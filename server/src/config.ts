require('dotenv').config();
export const config = {
  environment: 'development',
  URL: '/xenelectronic/api_v1',
  port: process.env.PORT || 4000,
  frontendPort: 'http://192.168.0.25:3000' || process.env.FRONTEND_PORT,
  walkers: 'bXyCiyVVwxAmDCSTOSrYDOyGAhoFfHNq' || process.env.WALKERS_SHORTBREAD,
  dbPort:
    'mongodb://127.0.0.1:27017/xenelectronic' ||
    process.env.DB_PORT_DEVELOPMENT,
};
