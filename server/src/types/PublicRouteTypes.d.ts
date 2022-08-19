import { Request, Response, NextFunction, response } from 'express';

export interface TypedPublicAllUsersRequestBody<T = {}> extends Request {
  body: T;
}

export interface TypedPublicAllUsersResponseBody<T = {}> extends Response {
  locals: {
    query: {
      count?: number;
      skip?: number;
    };
  };
}

export interface TypedPublicAllProductsRequestBody<T = {}> extends Request {
  body: T;
}

export interface TypedPublicAllProductsResponseBody extends Response {
  [x: string]: any;
  locals: {
    query: {
      count?: number;
      skip?: number;
      category?: string;
    };
  };
}

export interface ProductType {
  product_name: string;
  product_brand: string;
  product_category: string;
  product_price: number;
  product_description: string;
  product_image: string;
  product_tags: string[];
  product_rating: number;
}

export interface GetAllProducts extends ProductType {}

export interface VerifyCartProducts extends ProductType {}

export interface GetAllUsers {
  email: string;
}
