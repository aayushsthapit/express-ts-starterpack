import Joi from 'joi';

// Validation schema for request body of API that creates a new todo.
export const todoCreateSchema = Joi.object({
  title: Joi.string().required()
});