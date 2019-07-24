import { RemoteMongoClient } from "mongodb-stitch-browser-sdk";
import { app_client } from "./app";


const mongoClient = app_client.getServiceClient(
  RemoteMongoClient.factory,
  "mongodb-atlas"
);



const items = mongoClient.db("todo");

export { items };