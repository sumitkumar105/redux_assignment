import ActionsTypes from "../constants/actions-types";

const initialState = {
  Products: [],
};
export const ProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionsTypes.SET_PRODUCT:
      return { ...state, Products: payload };

    default:
      return state;
  }
};
