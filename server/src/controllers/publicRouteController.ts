import Express, {
  Request,
  Response,
  RequestHandler,
  NextFunction,
} from 'express';
import asyncHandler from '../handlers/asyncHandler';
import ErrorHandler from '../middleware/custom/modifiedErrorHandler';
import ProductModel from '../database/model/productDbModel';
import { getAllControllerError } from '../helpers/publicRoutesErrorResponse';
import type {
  TypedPublicAllProductsRequestBody,
  TypedPublicAllProductsResponseBody,
} from '../types/PublicRouteTypes';

import { getAllProductsSuccessResponse } from '../helpers/publicRouteSuccessResponse';

export const getAllProductsController = asyncHandler(
  async (
    req: TypedPublicAllProductsRequestBody,
    res: TypedPublicAllProductsResponseBody
  ) => {
    try {
      const { count, skip } = res.locals.query;
      const { category } = req.query;
      console.log(category);
      console.log(req.query);
      const newCat =
        category && (category as string)?.toLowerCase()?.split(',');

      const allProducts = (await ProductModel.find({
        ...(category
          ? {
              product_category: category,
            }
          : {}),
      })
        .limit(count || 0)
        .skip(skip || 0)) as any;

      return res
        .status(200)
        .json(await getAllProductsSuccessResponse(allProducts));
    } catch (error: any) {
      console.log(error);
      throw new ErrorHandler(getAllControllerError);
    }
  }
) as RequestHandler;
