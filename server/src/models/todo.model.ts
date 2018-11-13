import { Document } from 'mongoose';
import { IToDo } from "./interfaces";

export interface IToDoModel extends IToDo, Document {
    
}