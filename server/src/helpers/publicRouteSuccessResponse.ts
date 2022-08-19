import type {
  GetAllUsers,
  GetAllProducts,
  VerifyCartProducts,
} from '../types/PublicRouteTypes';

export const getAllUsersSuccessResponse = async (allUsers: GetAllUsers[]) => {
  return {
    success: true,
    message: 'All Users',
    payload: allUsers,
  };
};

export const getAllProductsSuccessResponse = async (
  allProducts: GetAllProducts[]
) => {
  return {
    success: true,
    message: 'All Products',
    payload: allProducts,
  };
};

export const verifyCartProductsSuccesResponse = async (
  allProducts: VerifyCartProducts[] | any[]
) => {
  return {
    success: true,
    message: 'Verified Cart Products',
    payload: allProducts,
  };
};
