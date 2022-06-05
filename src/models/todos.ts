import { Model } from 'objection';

import { Status } from '../constants/enums';
import TodosInterface from '../domain/todos';

/**
 * Model for table "todos"
 */
class Todos extends Model {
  id!: number;
  title!: string;
  status!: Status;
  createdAt!: Date;
  updatedAt!: Date;

  static get tableName() {
    return 'todos';
  }

  // Get list of todos.
  static getTodos(): Promise<TodosInterface[]> {
    return this.query();
  }
}

export default Todos;
