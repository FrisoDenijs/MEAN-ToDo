import { Request, Response} from 'express';
import { IController } from "./controller.interface";
import { Router } from "express-serve-static-core";
import { MongoDb } from '../db/mongo.db';
import { connection } from 'mongoose';
import * as HttpStatus from 'http-status-codes'

export class ToDoController implements IController {

    get(req: Request, res: Response, connectionString: string, dbName: string) {
        const db = new MongoDb().connect(connectionString, dbName);
        
        connection.collection('todo').find().toArray((err, result) => {
            if (err) {
                res.json(err);
                res.statusCode = HttpStatus.BAD_REQUEST
            }

            res.json(result);
            res.statusCode = HttpStatus.OK;
        });
    }    

    post(req: Request, res: Response, connectionString: string, dbName: string) {
        const db = new MongoDb();

        const connection = db.connect(connectionString, dbName);
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

    put(req: Request, res: Response, connectionString: string, dbName: string) {
        throw new Error("Method not implemented.");
    }
    delete(req: Request, res: Response, connectionString: string, dbName: string) {
        throw new Error("Method not implemented.");
    }

}

export function mountToDoRoutes(router: Router, route: string, connectionString: string, dbName: string) {
    const controller = new ToDoController();

    router.get(route, (req, res) => {
        controller.get(req, res, connectionString, dbName);
    });

    router.post(route, (req, res) => {
        controller.post(req, res, connectionString, dbName);
    });

    router.put(route, (req, res) => {
        controller.post(req, res, connectionString, dbName);
    });

    router.delete(route, (req, res) => {
        controller.post(req, res, connectionString, dbName);
    });
}