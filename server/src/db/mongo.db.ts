import { MongoClient } from "mongodb";

export class MongoDb {
    private readonly connectionString = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017';
    private readonly dbName = process.env.DB_NAME || 'mean-to-do';

    connect() {
        let db;

        MongoClient.connect(this.connectionString, (err, res) => {
            if (err) {
                console.error(err);
            }
            db = res.db(this.dbName);
        });

        return db;
    }
}