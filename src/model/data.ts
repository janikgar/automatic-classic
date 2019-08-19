import { MongoClient, MongoError } from "mongodb";

console.log(process.env);

const user = process.env.MONGO_UN;
const password = process.env.MONGO_PW;

const dbUrl = `mongodb://${user}:${password}@localhost:27017`;
const dbName = "automatic-classic";
const collectionName = "trip";

const client = new MongoClient(dbUrl);

client.connect((err: MongoError, client: MongoClient) => {
    if (err != null) {
        console.log(err);
        return err
    }
    console.log("Connected to DB");
    
    const db = client.db(dbName);
    var coll = db.collection(collectionName);
    
    coll.insertOne({"foo": "bar"})
        .then((result) => {
            console.log(`Inserted ${result.insertedCount} record(s)`)
        })
        .catch((error) => {
            console.log(`Error inserting records: ${error}`)
        });
});

