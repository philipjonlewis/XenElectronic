import Express, {
  Request,
  Response,
  RequestHandler,
  NextFunction,
} from 'express';
const ObjectId = require('mongoose').Types.ObjectId;

import asyncHandler from '../handlers/asyncHandler';
import ErrorHandler from '../middleware/custom/modifiedErrorHandler';
import ProductModel from '../database/model/productDbModel';
import {
  getAllControllerError,
  verifyCartControllerError,
} from '../helpers/publicRoutesErrorResponse';
import type {
  TypedPublicAllProductsRequestBody,
  TypedPublicAllProductsResponseBody,
} from '../types/PublicRouteTypes';

import {
  getAllProductsSuccessResponse,
  verifyCartProductsSuccesResponse,
} from '../helpers/publicRouteSuccessResponse';

export const getAllProductsController = asyncHandler(
  async (
    req: TypedPublicAllProductsRequestBody,
    res: TypedPublicAllProductsResponseBody
  ) => {
    try {
      const { count, skip, category } = res.locals.query;

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
      throw new ErrorHandler(getAllControllerError);
    }
  }
) as RequestHandler;

export const verifyCartController = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      const cleanedData = req.body.filter((id: any) => ObjectId.isValid(id));

      const products = await ProductModel.find({ _id: { $in: cleanedData } });

      return res
        .status(200)
        .json(await verifyCartProductsSuccesResponse(products));
    } catch (error: any) {
      throw new ErrorHandler(verifyCartControllerError);
    }
  }
) as RequestHandler;
