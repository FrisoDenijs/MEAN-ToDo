import { Request, Response } from "express";

export interface IController {
    get(req: Request, res: Response);
    post(req: Request, res: Response);
    put(req: Request, res: Response);
    delete(req: Request, res: Response);
}