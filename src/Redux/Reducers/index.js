import { combineReducers } from "redux";
import { ProductReducer, selectproductReducer } from "./ProductReducer";
const reducers = combineReducers({
  allProduct: ProductReducer,
  slectedProducts: selectproductReducer,
});
export default reducers;
