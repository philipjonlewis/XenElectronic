import mongoose from 'mongoose';
import path from 'path';
import { config } from '../config';

import { productSeeder } from './seed/dbProductSeeder';

require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
const mongooseOptions: any = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const databaseConnection = async () => {
  try {
    mongoose.connect(config.dbPort, mongooseOptions);

    productSeeder();
    console.log('Connected to the database');
  } catch (error) {
    console.log('Unable to Connect to the database', error);
  }
};

export { databaseConnection };
