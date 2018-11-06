import { MongoClient } from "mongodb";

export class MongoDb {
    connect(uri: string, dbName: string) {
        let db;

        MongoClient.connect(uri, (err, res) => {
            db = res.db(dbName);
        });

        return db;
    }
}