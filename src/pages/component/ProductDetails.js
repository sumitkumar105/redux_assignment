import React from "react";
import "../../App.css";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { fetchSelectedProducts } from "../../Redux/Actions/ProductAction";
// import { useLocation } from "react-router";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
export default function ProductDetails() {
  const selected_data = useSelector(
    (state) => state.slectedProducts.selectedProduct
  );
  const dispatch = useDispatch();
  let { prodId } = useParams();

  console.log("id of product", prodId);

  // async function fetchselectedProduct() {
  //   const Select_item = await axios.get(
  //     `https://fakestoreapi.com/products/${prodId}`
  //   );
  //   dispatch(selectedProduct(Select_item.data));
  //   console.log("slected product", Select_item.data);
  // }
  useEffect(() => {
    dispatch(fetchSelectedProducts(prodId));
  }, []);

  // async function FetchSelectedProducts() {
  //   const ProductData = await axios
  //     .get("https://fakestoreapi.com/products/1")
  //     .catch((err) => console.log(err));
  //   dispatch(selectedProduct(ProductData.data));
  //   // console.log(ProductData.data);
  // }
  const { title, price, description, category, image } = selected_data;

  // useEffect(() => {
  //   FetchSelectedProducts();
  // }, []);

  return (
    <div className="detail_heading">
      <div className="Details_card">
        <div className="image_details">
          <img className="image_selecteddProduct" src={image} alt="Product" />
        </div>
        <div className="product_details">
          <p>{title}</p>
          <p>{description}</p>
          <p>{category}</p>
          <p>${price}</p>
        </div>
      </div>
    </div>
  );
}
