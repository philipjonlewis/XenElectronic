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
require('dotenv').config();

const app: Express = express();

app.use(cors());
const boolParser = require('express-query-boolean');
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

app.use(function (req, res, next) {
  res.header('Content-Type', 'application/json;charset=UTF-8');
  // res.header("Access-Control-Allow-Credentials", "*");
  res.header(
    'Access-Control-Allow-Credentials',
    'https://xenelectronicbyphiliplewis.netlify.app/'
  );
  res.header('Access-Control-Allow-Credentials', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Origin',
    'https://xenelectronicbyphiliplewis.netlify.app/'
  );
  res.header('Access-Control-Allow-Methods', 'POST,GET,PATCH,DELETE');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');

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
