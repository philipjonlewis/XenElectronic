import request from 'supertest';
import app from '../app';
import { config } from '../config';
import { vi, beforeEach, describe, expect, test } from 'vitest';
import { NextFunction, Request, Response } from 'express';
import ProductModel from '../database/model/productDbModel';
import {
  getAllProductsSuccessResponse,
  verifyCartProductsSuccesResponse,
} from '../helpers/publicRouteSuccessResponse';

describe('Public Route Products API - Success', () => {
  test('Get All Products', async () => {
    const getAllProducts = await request(app)
      .get(`${config.URL}/public/products`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(getAllProducts.body).toEqual(
      expect.objectContaining(
        await getAllProductsSuccessResponse(getAllProducts.body.payload)
      )
    );
  });

  test('Get All Phone Products', async () => {
    const getAllProducts = await request(app)
      .get(`${config.URL}/public/products?category=Phone`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(getAllProducts.body).toEqual(
      expect.objectContaining(
        await getAllProductsSuccessResponse(getAllProducts.body.payload)
      )
    );
  });

  test('Get All Computer Products', async () => {
    const getAllProducts = await request(app)
      .get(`${config.URL}/public/products?category=Computers`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(getAllProducts.body).toEqual(
      expect.objectContaining(
        await getAllProductsSuccessResponse(getAllProducts.body.payload)
      )
    );
  });

  test('Get All Appliance Products', async () => {
    const getAllProducts = await request(app)
      .get(`${config.URL}/public/products?category=Appliance`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(getAllProducts.body).toEqual(
      expect.objectContaining(
        await getAllProductsSuccessResponse(getAllProducts.body.payload)
      )
    );
  });

  test('Get One Product', async () => {
    const getOneProduct = await request(app)
      .get(`${config.URL}/public/products?skip=2`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(getOneProduct.body).toEqual(
      expect.objectContaining(
        await getAllProductsSuccessResponse(getOneProduct.body.payload)
      )
    );
  });

  test('Skip Two Products', async () => {
    const skipTwoProducts = await request(app)
      .get(`${config.URL}/public/products?count=1`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(skipTwoProducts.body).toEqual(
      expect.objectContaining(
        await getAllProductsSuccessResponse(skipTwoProducts.body.payload)
      )
    );
  });

  test('Get One Product , Skip Two , Category Computer', async () => {
    const getOneProduct = await request(app)
      .get(`${config.URL}/public/products?count=1&skip=2&category=Computers`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(getOneProduct.body).toEqual(
      expect.objectContaining(
        await getAllProductsSuccessResponse(getOneProduct.body.payload)
      )
    );
  });

  test('Verify Cart Products - Valid Id', async () => {
    const product = await ProductModel.findOne({});

    const res = await request(app)
      .post(`${config.URL}/public/verifycart`)
      .send([product?._id.toString()])
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
    expect(res.body).toEqual(
      expect.objectContaining(
        await verifyCartProductsSuccesResponse(res.body.payload)
      )
    );
  });
});
