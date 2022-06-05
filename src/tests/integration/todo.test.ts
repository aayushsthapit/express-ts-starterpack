import Knex from 'knex';
import { Model, knexSnakeCaseMappers } from 'objection';

import knexConfig from '../../../knexfile';
import TodosInterface from '../../domain/todos';
import { getTodos } from '../../services/todos';

const knex = Knex({
  ...knexConfig,
  ...knexSnakeCaseMappers()
});
const testTodoElemId = 1;

beforeAll(() => {
  Model.knex(knex);
});

afterAll(async () => {
  await knex.destroy();
});

describe('Todo fetch service', () => {
  test('it should return expected keys for todos list item', async () => {
    const todos = await getTodos();
    const todoElem = todos.find(todo => todo.id === testTodoElemId) as TodosInterface;
    const todoElemKeys = Object.keys(todoElem);

    expect(Array.isArray(todos)).toBe(true);
    expect(todoElemKeys.sort()).toEqual(['id', 'title', 'status', 'createdAt', 'updatedAt'].sort());
  });
});
