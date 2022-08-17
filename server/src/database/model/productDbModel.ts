import mongoose from 'mongoose';

import productSchema from '../schema/productSchema';

const ProductModel = mongoose.model('product', productSchema);

export default ProductModel;
