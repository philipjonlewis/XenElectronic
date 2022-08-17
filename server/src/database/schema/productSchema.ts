import mongoose from 'mongoose';
const { Schema } = mongoose;

import { v4 as uuidV4 } from 'uuid';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const productSchema = new Schema(
  {
    // product_owner: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'auth',
    //   required: [true, 'All products must have an owner'],
    // },
    product_title: {
      type: String,
      required: [true, 'Product name is required'],
    },
    product_price: {
      type: Number,
      required: [true, 'Product price is required'],
    },
    product_description: {
      type: String,
      required: [true, 'Product description is required'],
    },
    product_image: {
      type: String,
      required: [true, 'Product price is required'],
    },
    product_category: {
      type: [
        {
          type: String,
        },
      ],
      required: [true, 'Product category is required'],
      select: true,
    },
    product_rating: {
      rate: Number,
      count: Number,
    },
  },
  { versionKey: false }
);

export default productSchema;
