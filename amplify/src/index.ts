import { Amplify, API } from "aws-amplify";

import awsconfig from "./aws-exports";

import * as mutations from "./graphql/mutations";

import uuid from "uuid-by-string";

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

const property_to_type = {
  people: "person",
  planets: "planet",
  films: "film",
  species: "species",
  vehicles: "vehicle",
  starships: "starship",
};

const entity_join_map = {
  people: {
    species: {
      create: mutations.createPersonSpecies,
      update: mutations.updatePersonSpecies,
      delete: mutations.deletePersonSpecies,
    },
    starships: {
      create: mutations.createPersonStarship,
      update: mutations.updatePersonStarship,
      delete: mutations.deletePersonStarship,
    },
    vehicles: {
      create: mutations.createPersonVehicle,
      update: mutations.updatePersonVehicle,
      delete: mutations.deletePersonVehicle,
    },
    films: {
      create: mutations.createPersonFilm,
      update: mutations.updatePersonFilm,
      delete: mutations.deletePersonFilm,
    },
  },
  planets: {
    films: {
      create: mutations.createPlanetFilm,
      update: mutations.updatePlanetFilm,
      delete: mutations.deletePlanetFilm,
    },
  },
  films: {
    species: {
      create: mutations.createFilmSpecies,
      update: mutations.updateFilmSpecies,
      delete: mutations.deleteFilmSpecies,
    },
    vehicles: {
      create: mutations.createFilmVehicle,
      update: mutations.updateFilmVehicle,
      delete: mutations.deleteFilmVehicle,
    },
    starships: {
      create: mutations.createFilmStarship,
      update: mutations.updateFilmStarship,
      delete: mutations.deleteFilmStarship,
    },
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

async function joinEntities(joins) {
  const all = [];

  for (const type of Object.keys(entity_join_map)) {
    const entities = joins[type];
    for (const id of Object.keys(entities)) {
      for (const join_type of Object.keys(entity_join_map[type])) {
        const create = entity_join_map[type][join_type].create;
        const update = entity_join_map[type][join_type].update;

        for (const join_id of entities[id][join_type]) {
          const input = {
            id: uuid(id + join_id),
            [property_to_type[type] + "ID"]: id,
            [property_to_type[join_type] + "ID"]: join_id,
          };

          all.push(upsert(create, update, input));
        }
      }
    }
  }

  await Promise.allSettled(all);
}

//createEntities(data);
joinEntities(data.joins);
