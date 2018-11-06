import { Request, Response } from "express";

export interface IController {
    get(req: Request, res: Response, connectionString: string, dbName: string);
    post(req: Request, res: Response, connectionString: string, dbName: string);
    put(req: Request, res: Response, connectionString: string, dbName: string);
    delete(req: Request, res: Response, connectionString: string, dbName: string);
}