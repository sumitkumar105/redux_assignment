import ActionsTypes from "../constants/actions-types";

const initialState = {
  Products: [],
  selectedProduct: [],
};
export const ProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionsTypes.SET_PRODUCT:
      return { ...state, Products: payload };

    default:
      return state;
  }
};
export const selectproductReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ActionsTypes.SELECTED_PRODUCT:
      return { ...state, selectedProduct: payload };

    default:
      return state;
  }
};
