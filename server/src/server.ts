require('dotenv').config();

import app from './app';
import { config } from './config';

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}!`);
});
