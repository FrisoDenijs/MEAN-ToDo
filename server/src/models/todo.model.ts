import { Document } from 'mongoose';

import { IToDo } from './interfaces';

/**
 * Used for the ToDo schema
 *
 * @export
 * @extends {IToDo}
 * @extends {Document}
 */
export interface IToDoModel extends IToDo, Document {}
