import ProductModel from '../model/productDbModel';
import fs from 'fs';

const data = JSON.parse(
  fs.readFileSync(__dirname + '/electronics.json').toString()
);

export const productSeeder = async () => {
  await ProductModel.insertMany(data, (err, docs) => {
    console.log(err);
  });
  //   console.log(data);
  console.log('Seeded Data');
};

export const deleteSeed = async () => {
  await ProductModel.deleteMany({});
  console.log('Deleted Data');
};
