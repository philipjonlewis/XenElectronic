import express, { Express, Request, response, NextFunction } from 'express';

import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import cors from 'cors';
import nocache from 'nocache';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import customErrorMiddleware from './middleware/custom/customErrorMiddleware';
import publicRoutes from './routes/publicRoutes';

import { databaseConnection } from './database/dbConnection';
import { productSeeder, deleteSeed } from './database/seed/dbProductSeeder';
import { config } from './config';

const app: Express = express();

const boolParser = require('express-query-boolean');
require('dotenv').config();

app.disable('x-powered-by');

app.set('trust proxy', 1);
app.set('etag', false);

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser(process.env.WALKERS_SHORTBREAD));
app.use(boolParser());
app.use(helmet());
app.use(nocache());

// app.use(cors());
// app.use(
//   cors({
//     origin: process.env.FRONTEND_PORT,
//     // origin: config.frontendPort,
//     methods: ['GET', 'POST', 'PATCH', 'DELETE'],
//     credentials: true,
//   })
// );

// app.use(
//   rateLimit({
//     windowMs: 15 * 60 * 1000, // 15 minutes
//     max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
//     standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
//     legacyHeaders: false, // Disable the `X-RateLimit-*` headers
//   })
// );

app.use((req, res, next: NextFunction) => {
  res.header('Content-Type', 'application/json;charset=UTF-8');
  res.header(
    'Access-Control-Allow-Credentials',
    process.env.FRONTEND_PORT || '*'
  );
  // res.header('Access-Control-Allow-Credentials', config.frontendPort);
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

databaseConnection();
// productSeeder();
// deleteSeed();

app.get('/', (req, res) => {
  res.send('XenElectronic');
});

app.use(`${config.URL}/public`, publicRoutes);

app.get('*', (req, res) => {
  res.send('Page does not exit');
});

app.use(customErrorMiddleware);

export default app;
