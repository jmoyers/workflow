import { Amplify, API } from "aws-amplify";
import awsconfig from "./aws-exports";
import {
  createPerson,
  updatePerson,
  createPlanet,
  updatePlanet,
} from "./graphql/mutations";
import {
  CreatePersonInput,
  CreatePlanetInput,
  UpdatePersonInput,
  UpdatePlanetInput,
  GetPlanetQueryVariables,
} from "./API";

import { getPlanet } from "./graphql/queries";

const planet_query_variables: GetPlanetQueryVariables = {
  id: "test_dagobah",
};

const person: CreatePersonInput = {
  id: "test_luke",
  name: "Luke Skywalker",
  height: 172,
  mass: 77,
  hair_color: "blond",
  skin_color: "fair",
  eye_color: "blue",
  birth_year: "19BBY",
  gender: "male",
};
// 7538c999-53d0-414d-8b74-07570236295a
const update_person: UpdatePersonInput = {
  id: "test_luke",
  planetResidentsId: "test_dagobah",
};

const planet: CreatePlanetInput = {
  id: "test_dagobah",
  name: "Dagobah",
  rotation_period: 23,
  orbital_period: 341,
  diameter: 8900,
  climate: "murky",
  gravity: "N/A",
  terrain: "swamp, jungles",
  surface_water: 8,
  population: null,
};

const update_planet: UpdatePlanetInput = {
  id: "e8702b56-dee9-438b-bec6-f31fe16c655c",
};

Amplify.configure(awsconfig);

async function mockPerson() {
  try {
    const result = await API.graphql({
      query: createPerson,
      variables: {
        input: person,
      },
    });
  } catch (e) {
    console.error(e);
  }
}

async function mockPlanet() {
  try {
    const result = await API.graphql({
      query: createPlanet,
      variables: {
        input: planet,
      },
    });
  } catch (e) {
    console.error(e);
  }
}

async function connectPersonToPlanet() {
  try {
    const result = await API.graphql({
      query: updatePerson,
      variables: {
        input: update_person,
      },
    });
  } catch (e) {
    console.error(e);
  }
}

async function connectPlanetToPerson() {
  try {
    const result = await API.graphql({
      query: updatePlanet,
      variables: {
        input: update_planet,
      },
    });
  } catch (e) {
    console.error(e);
  }
}

async function queryPlanet() {
  try {
    const result = await API.graphql({
      query: getPlanet,
      variables: planet_query_variables,
    });

    if ("data" in result) {
      console.log(result.data.getPlanet?.residents);
    }
  } catch (e) {
    console.error(e);
  }
}

queryPlanet();

//mockPerson().then(mockPlanet).then(connectPersonToPlanet);
