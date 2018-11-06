import { Request, Response} from 'express';
import { IController } from "./controller.interface";
import { Router } from "express-serve-static-core";
import { MongoDb } from '../db/mongo.db';
import { connection } from 'mongoose';
import * as HttpStatus from 'http-status-codes'

export class ToDoController implements IController {

    get(req: Request, res: Response, connectionString: string, dbName: string) {
        res.json({
            msg: "todo called"
        })
        res.statusCode = HttpStatus.OK;
        // const db = new MongoDb().connect(
        //     'mongodb://FrisoPrograms:A1b2c3d4@ds024548.mlab.com:24548/mean-to-do',
        //     'mean-to-do');
        
        // connection.collection('todo').find().toArray((err, result) => {
        //     res.json(result);
        //     res.statusCode = 200;
        // });
    }    

    post(req: Request, res: Response, connectionString: string, dbName: string) {
        res.json(req.body);
        res.statusCode = HttpStatus.OK;
        // const db = new MongoDb();

        // const connection = db.connect(
        //     'mongodb://FrisoPrograms:A1b2c3d4@ds024548.mlab.com:24548/mean-to-do',
        //     'mean-to-do');
        
        // connection.collection('todo').save(req.body, (err, result) => {
        //     if (err) {

        //         res.json(err);
        //         res.statusCode = 200;
        //     }

        //     res.json(result);
        //     res.statusCode = 200;
        // });
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