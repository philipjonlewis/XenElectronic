import { Router } from 'express';
const router = Router();
const ObjectId = require('mongoose').Types.ObjectId;
import asyncHandler from '../handlers/asyncHandler';
import {
  getAllProductsController,
  verifyCartController,
} from '../controllers/publicRouteController';

import ProductModel from '../database/model/productDbModel';

import { publicRouteQuerySanitizer } from '../middleware/sanitization/publicRouteSanitizer';

router.use(publicRouteQuerySanitizer);

router.route('/products').get([getAllProductsController]);
router.route('/verifycart').post([verifyCartController]);

export default router;
