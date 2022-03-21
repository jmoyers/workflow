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

import { prepareForDatabase } from "./bulk";
import * as swapi_data from "../../data/swapi.json";
const api_id = process.env.API_SWAPI_GRAPHQLAPIIDOUTPUT;

console.log(api_id);
console.log(process.env);
process.exit();

const data = prepareForDatabase(swapi_data);

Amplify.configure(awsconfig);

async function create(query, item) {
  try {
    const result = await API.graphql({
      query: query,
      variables: {
        input: item,
      },
    });
  } catch (e) {
    console.error(e);
  }
}
