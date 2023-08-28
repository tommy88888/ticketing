import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import { json } from 'body-parser';
import { errorHandler, NotFoundError } from '@tomtickets/common';

import cookieSession from 'cookie-session';

import { currentUserRouter } from './routes/current-user';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
import { signinRouter } from './routes/signin';

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

app.use(currentUserRouter);
app.use(signoutRouter);
app.use(signupRouter);
app.use(signinRouter);

app.all('*', async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
