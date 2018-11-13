import { Request, Response} from 'express';
import { IController } from "./controller.interface";
import { MongoDb } from '../db/mongo.db';
import * as HttpStatus from 'http-status-codes'

export class ToDoController implements IController {

    async get(req: Request, res: Response) {
        const mongo = new MongoDb();
        await mongo.connect();
        const db = mongo.getDb();
        console.log(db);
        db.collection('todo', (error, collection) => {
            if (error) {
                res.json(error);
                res.statusCode = HttpStatus.BAD_REQUEST
                return;
            }

            collection.find().toArray((error, result) => {
                if (error) {
                    res.json(error);
                    res.statusCode = HttpStatus.BAD_REQUEST
                }
    
                res.json(result);
                res.statusCode = HttpStatus.OK;
            })
        });

        mongo.close();
    }    

    async post(req: Request, res: Response) {
        const mongo = new MongoDb();
        await mongo.connect();
        const db = mongo.getDb();

        if (db) {
            db.collection('todo').save(req.body, (err, result) => {
                if (err) {
                    res.json(err);
                    res.statusCode = HttpStatus.BAD_REQUEST
                }
    
                res.json(result);
                res.statusCode = HttpStatus.OK;
            });
        } else {
            res.json({msg: "could not connect to db"})
            res.statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
        }
    }

    put(req: Request, res: Response) {
        throw new Error("Method not implemented.");
    }
    delete(req: Request, res: Response) {
        throw new Error("Method not implemented.");
    }

}
