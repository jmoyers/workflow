import AWS from "aws-sdk";
import { Converter } from "aws-sdk/clients/dynamodb";
import * as swapi_data from "../../../data/swapi.json";
import uuid from "uuid-by-string";

export function prepareForDatabase(data: typeof swapi_data) {
  const ids = {};
  const types = Object.keys(data.root);
  const urls = new Set<string>();
  const references = [
    "films",
    "species",
    "vehicles",
    "starships",
    "characters",
    "planets",
  ];

  for (const type of types) {
    for (const entity of data[type]) {
      if (entity.url) urls.add(entity.url as string);
    }
  }

  for (const url of Array.from(urls)) {
    ids[url] = uuid(url);
  }

  function isNumeric(str: string) {
    return !isNaN(str as unknown as number) && !isNaN(parseFloat(str));
  }

  for (const type of types) {
    for (const entity of data[type]) {
      const url = entity.url;
      entity.id = ids[url];

      for (const key of Object.keys(entity)) {
        if (isNumeric(entity[key])) {
          entity[key] = Number(entity[key]);
        }
      }

      for (const type of types) {
        if (entity[type]) {
          const references = [];

          for (const url_reference of entity[type]) {
            references.push(ids[url_reference]);
          }

          entity[type] = references;
        }
      }
    }
  }

  // build references from new id hash function
  for (const type of types) {
    if (Array.isArray(data[type])) {
      for (const entity of data[type]) {
        for (const reference of references) {
          if (entity[reference]) {
            entity[reference] = entity[reference].map((id) => ids[id]);
          }
        }
      }
    }
  }

  return data;
}

// needs to be modified for new structure with @manyToMany annotation etc
export function bulkWriteToDynamo(data) {
  throw new Error("Not implemented");

  const marshalled_data = [];

  for (const type of Object.keys(data.root)) {
    marshalled_data[type] = [];

    for (const entity of data[type]) {
      marshalled_data[type].push(Converter.marshall(entity));
    }
  }

  async function main() {
    AWS.config.update({ region: "us-west-1" });

    const ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });

    const PutItems = marshalled_data["people"].map((person) => {
      return {
        PutRequest: {
          Item: {
            ...person,
          },
        },
      };
    });

    let i = 0;

    if (PutItems.length > 25) {
      while (i < PutItems.length) {
        const end = Math.min(PutItems.length, i + 25);

        const params = {
          RequestItems: {
            "Person-qs4akq4ewbbozoyxgzfqnujph4-dev": [
              ...PutItems.slice(i, end),
            ],
          },
        };

        i += 25;

        ddb.batchWriteItem(params, function (err, data) {
          console.log(err, data);
        });
      }
    }
  }
}
