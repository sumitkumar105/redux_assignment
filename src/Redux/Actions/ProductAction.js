import FakeApiStore from "../../api/FakeApiStore";
import ActionTypes from "../constants/actions-types";
export const fetchProducts = () => async (dispatch) => {
  const response = await FakeApiStore.get("/products");
  console.log("Product data", response.data);
  dispatch({
    type: ActionTypes.FETCH_PRODUCT,
    payload: response.data,
  });
};
export const fetchSelectedProducts = (id) => async (dispatch) => {
  const response = await FakeApiStore.get(`/products/${id}`);
  console.log("Product data", response.data);
  dispatch({
    type: ActionTypes.SELECTED_PRODUCT,
    payload: response.data,
  });
};
export const setProduct = (products) => {
  return {
    type: ActionTypes.SET_PRODUCT,
    payload: products,
  };
};
export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
