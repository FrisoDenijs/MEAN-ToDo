import { Router } from "express";
import { ToDoController } from "../controllers/to-do.controller";

export function mountToDoRoutes(router: Router, route: string) {
    const controller = new ToDoController();

    router.get(route, (req, res) => {
        controller.get(req, res);
    });

    router.post(route, (req, res) => {
        controller.post(req, res);
    });

    router.put(route, (req, res) => {
        controller.post(req, res);
    });

    router.delete(route, (req, res) => {
        controller.post(req, res);
    });
}