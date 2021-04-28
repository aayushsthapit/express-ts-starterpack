import { Request, Response, Router } from 'express';

import * as appPackage from '../../package.json';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json({ [appPackage.name]: appPackage.version });
});

router.get('/test', (req: Request, res: Response) => {
  const response = { a: 'ssd' };
  res.json(response);
});

export default router;
