import { MongoClient, MongoClientOptions } from 'mongodb'

const uri: string = process.env.MONGODB_URI as string;
const options: MongoClientOptions = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!uri) {
    throw new Error('Add Mongo URI to .env.local');
  }

  if (process.env.NODE_ENV === 'development') {
    if (!(global as any)._mongoClientPromise) {
      client = new MongoClient(uri, options);
      (global as any)._mongoClientPromise = client.connect();
    }
    clientPromise = (global as any)._mongoClientPromise;
  } else {
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
  }

export default clientPromise