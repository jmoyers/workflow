import AWS, { DynamoDB } from "aws-sdk";
import { BatchGetItemInput, Converter } from "aws-sdk/clients/dynamodb";
import * as swapi_data from "../../../data/swapi.json";
import { v4 as uuid } from "uuid";
import util from "util";

const replaceIds = (data: typeof swapi_data) => {
  const ids = {};
  const types = Object.keys(data.root);

  const urls = new Set<string>();

  for (const type of types) {
    for (const entity of data[type]) {
      if (entity.url) urls.add(entity.url as string);
    }
  }

  for (const url of Array.from(urls)) {
    ids[url] = uuid();
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

  return data;
};

const data = replaceIds(swapi_data);
const marshalled_data = [];

for (const type of Object.keys(data.root)) {
  marshalled_data[type] = [];

  for (const entity of data[type]) {
    marshalled_data[type].push(Converter.marshall(entity));
  }
}

console.log(marshalled_data["people"].length);

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
          "Person-qs4akq4ewbbozoyxgzfqnujph4-dev": [...PutItems.slice(i, end)],
        },
      };

      i += 25;

      ddb.batchWriteItem(params, function (err, data) {
        console.log(err, data);
      });

      //console.log(util.inspect(params, false, null, true));
    }
  }
}

//main();
