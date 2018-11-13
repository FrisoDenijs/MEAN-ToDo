import { Schema, Model, model } from "mongoose";
import { IToDoModel } from "../models/todo.model";

export var ToDoSchema = new Schema({
    createdAt: Date,
    description: String,
    isDone: Boolean
});
ToDoSchema.pre("save", (next) => {
    let now = new Date();
    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
});

export const ToDo: Model<IToDoModel> = model<IToDoModel>("ToDo", ToDoSchema);