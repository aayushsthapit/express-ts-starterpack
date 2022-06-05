import { Request, Response, Router } from 'express';

import * as appPackage from '../package.json';
import { todoCreateSchema } from './schema/todos';
import * as todosController from './controllers/todos';
import { validateSchema } from './middlewares/validate';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json({ [appPackage.name]: appPackage.version });
});

router.get('/todos', todosController.getTodos);
router.post('/todos', validateSchema(todoCreateSchema), todosController.createTodo);

export default router;
