import ProductModel from '../model/productDbModel';
import fs from 'fs';

const applianceSeed = JSON.parse(
  fs.readFileSync(__dirname + '/applianceSeed.json').toString()
);

const computerSeed = JSON.parse(
  fs.readFileSync(__dirname + '/computerSeed.json').toString()
);

const gamingSeed = JSON.parse(
  fs.readFileSync(__dirname + '/gamingSeed.json').toString()
);

const phoneSeed = JSON.parse(
  fs.readFileSync(__dirname + '/phoneSeed.json').toString()
);

const wearableSeed = JSON.parse(
  fs.readFileSync(__dirname + '/wearableSeed.json').toString()
);

export const productSeeder = async () => {
  if (await ProductModel.exists({})) {
    return;
  }

  await ProductModel.insertMany([
    ...applianceSeed,
    ...computerSeed,
    ...gamingSeed,
    ...phoneSeed,
    ...wearableSeed,
  ]);
};

export const deleteSeed = async () => {
  await ProductModel.deleteMany({});
};

// export const
