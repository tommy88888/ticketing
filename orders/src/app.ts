import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cors from 'cors';
import cookieSession from 'cookie-session';
import { errorHandler, NotFoundError, currentUser } from '@tomtickets/common';
import { showOrderRouter } from './routes/show';
import { newOrderRouter } from './routes/new';
import { indexOrderRouter } from './routes/index';
import { deleteOrderRouter } from './routes/delete';

const app = express();

app.use(cors());

// app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    // secure: process.env.NODE_ENV !== 'test',
    // secure: true,
  })
);
app.use(currentUser);

app.use(newOrderRouter);
app.use(showOrderRouter);
app.use(indexOrderRouter);
app.use(deleteOrderRouter);

app.all('*', async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
