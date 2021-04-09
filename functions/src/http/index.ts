import * as express from 'express';
import { router as paymentsRouter } from './payments/router';

export const app = express();

app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    console.info('Time: ', Date.now(), req.method, req.originalUrl);
    next();
  }
);

app.use('/payments', paymentsRouter);
