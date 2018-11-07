import { Request, Response} from 'express';
import { IController } from "./controller.interface";
import { Router } from "express-serve-static-core";
import { MongoDb } from '../db/mongo.db';
import { connection } from 'mongoose';
import * as HttpStatus from 'http-status-codes'

export class ToDoController implements IController {

    get(req: Request, res: Response) {
        const db = new MongoDb().connect();
        
        const collection = connection.collection('todo').find();
        
        if (collection) {
            collection.toArray((err, result) => {
                if (err) {
                    res.json(err);
                    res.statusCode = HttpStatus.BAD_REQUEST
                }
    
                res.json(result);
                res.statusCode = HttpStatus.OK;
            });
        } else {
            res.json({ msg: 'collection not found'});
            res.statusCode = HttpStatus.NOT_FOUND;
        }
    }    

    post(req: Request, res: Response) {
        const db = new MongoDb();

        const connection = db.connect();
        if (connection) {
            connection.collection('todo').save(req.body, (err, result) => {
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
