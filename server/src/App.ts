import * as express from 'express';
import * as bodyParser from "body-parser";
import { Router } from 'express-serve-static-core';
import { mountRoutes } from './controllers/controllers.config';
import { ToDoController } from './controllers/to-do.controller';

//based on https://blog.risingstack.com/building-a-node-js-app-with-typescript-tutorial/
export class App {
    public express;

    public constructor() {
        this.express = express();
        const router = express.Router();
        
        this.express.use(bodyParser.urlencoded({
            extended: false
         }));
         
        this.express.use(bodyParser.json());

        this.mountTestRoute(router);
        mountRoutes(router);

        this.express.use('/', router);
    }

    private mountTestRoute(router: Router): void {
        router.get('/', (req, res) => {
            res.json({
                message: 'Hello World!'
            })
        });

        router.post('/', (req, res) => {
            res.json(req.body);
        });
    }
}