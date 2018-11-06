import { Router } from "express";
import { mountToDoRoutes } from "./to-do.controller";

export function mountRoutes(router: Router) {
    const connectionString = process.env.DB_CONNECTION_STRING || 'mongodb://FrisoPrograms:A1b2c3d4@ds024548.mlab.com:24548/mean-to-do';
    const dbName = process.env.DB_NAME || 'mean-to-do';

    const todoRoute = process.env.TODO_ROUTE || '/api/todo';
    mountToDoRoutes(router, todoRoute, connectionString, dbName);
}