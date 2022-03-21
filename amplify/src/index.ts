import { Amplify, API } from "aws-amplify";

import awsconfig from "./aws-exports";

import * as mutations from "./graphql/mutations";

const entity_map = {
  people: {
    create: mutations.createPerson,
    delete: mutations.deletePerson,
    update: mutations.updatePerson,
  },
  planets: {
    create: mutations.createPlanet,
    delete: mutations.deletePlanet,
    update: mutations.updatePlanet,
  },
  films: {
    create: mutations.createFilm,
    delete: mutations.deleteFilm,
    update: mutations.updateFilm,
  },
  species: {
    create: mutations.createSpecies,
    delete: mutations.deleteSpecies,
    update: mutations.updateSpecies,
  },
  vehicles: {
    create: mutations.createVehicle,
    delete: mutations.deleteVehicle,
    update: mutations.updateVehicle,
  },
  starships: {
    create: mutations.createStarship,
    delete: mutations.deleteStarship,
    update: mutations.updateStarship,
  },
};

const entity_join_map = {
  people: {
    species: mutations.createPersonSpecies,
    starships: mutations.createPersonStarship,
    vehicles: mutations.createPersonVehicle,
    films: mutations.createPersonFilm,
  },
  planets: {
    films: mutations.createPlanetFilm,
  },
  films: {
    species: mutations.createFilmSpecies,
    vehicles: mutations.createFilmVehicle,
    startships: mutations.createFilmStarship,
  },
};

import { prepareForDatabase } from "./bulk";
import * as swapi_data from "../../data/swapi.json";

// definitely a better way to get these -- just environment variables in
// amplify lambdas. but in this case, this is a locally running script

import { PERSON, FILM, PLANET, SPECIES, STARSHIP, VEHICLE } from "./config";

const data = prepareForDatabase(swapi_data);

Amplify.configure(awsconfig);

async function upsert(create, update, item) {
  try {
    console.log("create", item.id);
    const result = await API.graphql({
      query: create,
      variables: {
        input: item,
      },
    });
  } catch (e) {
    try {
      console.log("update", item.id);
      const result = await API.graphql({
        query: update,
        variables: {
          input: item,
        },
      });
    } catch (e) {
      console.error(e);
    }
  }
}

async function createEntities(data) {
  const all = [];

  for (const type of Object.keys(entity_map)) {
    const create = entity_map[type].create;
    const update = entity_map[type].update;
    const items = data[type];
    for (const item of items) {
      all.push(upsert(create, update, item));
    }
  }

  await Promise.allSettled(all);
}

createEntities(data);
