require('dotenv').config();

export const config = {
  environment: 'development',
  URL: '/xenelectronic/api_v1',
  port: process.env.PORT || 4000,
  frontendPort: process.env.FRONTEND_PORT,
};
