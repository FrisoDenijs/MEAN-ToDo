import { MongoClient, Db } from "mongodb";

export class MongoDb {
    private readonly connectionString = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017';
    private readonly dbName = process.env.DB_NAME || 'mean-to-do';
    private client: MongoClient;

    connect() {
        console.log('connecting to mongo')
        MongoClient.connect(this.connectionString, {useNewUrlParser: true})
        .then(client => {
            console.log('setting client');
            this.client = client;
            console.log(this.client);
        })
        .catch(error => {
            console.log('error during connecting to mongo: ');
            console.error(error);
        });
    }

    getDb(): Db {
        console.log('getting db')
        if (this.client) {
            console.log(`client exists, returning db ${this.dbName}`)
            return this.client.db(this.dbName);
        } else {
            console.error('getDb: client is undefined')
            return undefined;
        }
    }

    close() {
        if (this.client) {
            this.client.close();
        } else {
            console.error('close: client is undefined');
        }
    }
}