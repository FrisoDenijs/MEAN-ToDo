import { Model, Schema, model } from 'mongoose';

import { IToDoModel } from '../models/todo.model';

export const TO_DO_SCHEMA = new Schema({
    'createdAt': Date,
    'description': String,
    'isDone': Boolean,
});
TO_DO_SCHEMA.pre('save', next => {
    const now: Date = new Date();
    // tslint:disable-next-line:no-invalid-this
    if (!(this.createdAt) {
        // tslint:disable-next-line:no-invalid-this
        this.createdAt = now;
    }
    next();
});

export const TO_DO: Model<IToDoModel> = model<IToDoModel>('ToDo', TO_DO_SCHEMA);
