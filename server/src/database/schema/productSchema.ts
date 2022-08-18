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
    product_name: {
      type: String,
      required: [true, 'Product name is required'],
    },
    product_brand: {
      type: String,
      required: [true, 'Product brand is required'],
    },
    product_category: {
      type: String,
      required: [true, 'Product category is required'],
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
    product_tags: {
      type: [
        {
          type: String,
        },
      ],
      required: [false, 'Product tags is required'],
      select: true,
    },
    product_rating: {
      type: Number,
      required: [false, 'Product rating is required'],
    },
  },
  { versionKey: false }
);

export default productSchema;
