import { Router } from 'express';
const router = Router();
const ObjectId = require('mongoose').Types.ObjectId;
import asyncHandler from '../handlers/asyncHandler';
import { getAllProductsController } from '../controllers/publicRouteController';

import ProductModel from '../database/model/productDbModel';

import { publicRouteQuerySanitizer } from '../middleware/sanitization/publicRouteSanitizer';

/**
 * * Router : Public Route
 * * Description : Route to get all users and all products
 * * Done as per test instructions
 * ! User Activities :
 * ! - Get All Users
 *    - optional count & skip query parameters
 * ! - Get All Products
 *    - optional count & skip query parameters
 */

// Both routes will have the query params sanitizer to prevent parameter pollution
router.use(publicRouteQuerySanitizer);

router.route('/products').get([
  // ! Route : http://localhost:4000/api_v1/public/products?count=0&skip=0
  // * Description : API Endpoint for getting all products
  // ! Optional query parameter for productId to get just one product
  getAllProductsController,
]);

router.route('/verifycart').post(async (req, res, next) => {
  const cleanedData = req.body.filter((id: any) => ObjectId.isValid(id));

  const products = await ProductModel.find({ _id: { $in: cleanedData } });

  console.log(products);
  res.send(products);
});

export default router;
