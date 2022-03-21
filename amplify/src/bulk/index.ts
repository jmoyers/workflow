import AWS from "aws-sdk";
import { Converter } from "aws-sdk/clients/dynamodb";
import * as swapi_data from "../../../data/swapi.json";
import uuid from "uuid-by-string";

type initial_data = typeof swapi_data;
interface swdata extends initial_data {
  joins?: object;
}

AWS.config.update({ region: "us-west-1" });
const ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });

export function prepareForDatabase(data: swdata) {
  const ids = {};
  const types = Object.keys(data.root);
  const urls = new Set<string>();

  data.joins = {};

  const references = [
    "films",
    "species",
    "vehicles",
    "starships",
    "characters",
    "people",
    "planets",
    "homeworld",
    "pilots",
    "residents",
  ];

  const delete_for_create = ["created", "edited"];

  for (const type of types) {
    for (const entity of data[type]) {
      if (entity.url) urls.add(entity.url as string);
      for (const key of delete_for_create) {
        if (entity[key]) delete entity[key];
      }
    }
  }

  for (const url of Array.from(urls)) {
    ids[url] = uuid(url);
  }

  for (const type of types) {
    for (const entity of data[type]) {
      const url = entity.url;
      delete entity.url;
      entity.id = ids[url];

      if ("homeworld" in entity) {
        if (type === "people") {
          entity.planetResidentsId = ids[entity.homeworld];
        } else if (type === "species") {
          entity.planetSpeciesId = ids[entity.homeworld];
        }
        delete entity.homeworld;
      }

      for (const ref of references.filter((name) => name !== "homeworld")) {
        if (entity[ref]) {
          const join_ids = [];

          for (const url of entity[ref]) {
            join_ids.push(ids[url]);
          }

          if (!data.joins[type]) data.joins[type] = {};
          if (!data.joins[type][entity.id]) data.joins[type][entity.id] = {};

          let ref_name = ref;

          if (ref_name === "pilots") ref_name = "people";
          if (ref_name === "residents") ref_name = "people";

          data.joins[type][entity.id][ref_name] = join_ids;

          delete entity[ref];
        }
      }
    }
  }

  return data;
}

function chunkedWrite(items, table, count = 25) {
  let i = 0;
  const all = [];

  if (items.length > count) {
    while (i < items.length) {
      const end = Math.min(items.length, i + count);

      const params = {
        RequestItems: {
          [table]: [...items.slice(i, end)],
        },
      };

      i += count;

      all.push(ddb.batchWriteItem(params).promise());
    }
  }

  return Promise.allSettled(all);
}

// needs to be modified for new structure with @manyToMany annotation etc
export function bulkWriteToDynamo(raw_items, table) {
  const marshalled_data = raw_items.map((item) => Converter.marshall(item));
  return chunkedWrite(marshalled_data, table, 25);
}
