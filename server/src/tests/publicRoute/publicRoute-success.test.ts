import request from 'supertest';
import app from '../../app';
import { config } from '../../config';
import { vi, beforeEach, describe, expect, test } from 'vitest';
import { NextFunction, Request, Response } from 'express';

import { getAllProductsSuccessResponse } from '../../helpers/publicRouteSuccessResponse';
import { getAllProductsController } from '../../controllers/publicRouteController';
import { getAllSanitizationError } from '../../helpers/publicRoutesErrorResponse';

describe('Public Route API - Success', () => {
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

  test('Get All Users - Invalid Query Params', async () => {
    const getAllUsers = await request(app)
      .get(`${config.URL}/public/users?count=hello&skip=true`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(422);

    expect(getAllUsers.body).toEqual(
      expect.objectContaining(getAllSanitizationError)
    );
  });
  test('Get All Products - Invalid Query Params', async () => {
    const getAllProducts = await request(app)
      .get(`${config.URL}/public/products?count=hello&skip=true`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(422);

    expect(getAllProducts.body).toEqual(
      expect.objectContaining(getAllSanitizationError)
    );
  });
});
