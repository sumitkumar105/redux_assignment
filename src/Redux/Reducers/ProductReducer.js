import { ActionsTypes } from "../constants/actions-types";

const initialState = {
  Products: [
      {
          id:1,
          title:"Sumit",
          ctaegory:"Full Stack Developer",
      },
  ],
};
export const ProductReducer = (state=initialState, { type, payload }) => {
  switch (type) {
    case ActionsTypes.SET_PRODUCT:
      return state;

    default:
      return state;
  }
};
