import React from "react";
import "../../App.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setProduct } from "../../Redux/Actions/ProductAction";
const ProductList = () => {
  const products_list = useSelector((state) => state.allProduct.Products);
  const dispatch = useDispatch();

  async function FetchProducts() {
    const ProductData = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log(err));
    dispatch(setProduct(ProductData.data));
    // console.log(ProductData.data);
  }
  const { id, title, price, description, category, image } = products_list;
  // console.log(id);
  products_list.map((e) => {
    console.log("id:", e.id);
    console.log("price:", e.price);
    console.log("category:", e.category);
    console.log("title:", e.title);
  });

  const Add = () => {
    alert("you clicked the card!!");
  };
  useEffect(() => {
    FetchProducts();
  }, []);
  return (
    <div className="main-section">
      <div className="main" onClick={Add}>
        <table>
          <tr>
            <th>Products List</th>
          </tr>
          <tr>
            <div className="container">
              <div className="product-image">
                <img
                  className="images"
                  src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt="demo"
                />
              </div>
              <div className="details">
                <p>mens clothing this is sumitkumar sanjay Deshpande</p>
              </div>
              <div className="details">{/* <p>{title}</p> */}</div>
              <div className="details">{/* <p>{category}</p> */}</div>
            </div>
          </tr>
        </table>
      </div>

      <div className="main" onClick={Add}>
        <table>
          <tr>
            <th>Products List</th>
          </tr>
          <tr>
            <div className="container">
              <div className="product-image">
                <img
                  className="images"
                  src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt="demo"
                />
              </div>
              <div className="details">
                <p>mens clothing this is sumitkumar sanjay Deshpande</p>
              </div>
              <div className="details">
                <p>50000rs</p>
              </div>
              <div className="details">
                <p>category</p>
              </div>
            </div>
          </tr>
        </table>
      </div>
      <div className="main" onClick={Add}>
        <table>
          <tr>
            <th>Products List</th>
          </tr>
          <tr>
            <div className="container">
              <div className="product-image">
                <img
                  className="images"
                  src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt="demo"
                />
              </div>
              <div className="details">
                <p>mens clothing this is sumitkumar sanjay Deshpande</p>
              </div>
              <div className="details">
                <p>50000rs</p>
              </div>
              <div className="details">
                <p>category</p>
              </div>
            </div>
          </tr>
        </table>
      </div>
      <div className="main">
        <table>
          <tr>
            <th>Products List</th>
          </tr>
          <tr>
            <div className="container">
              <div className="product-image">
                <img
                  className="images"
                  src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt="demo"
                />
              </div>
              <div className="details">
                <p>mens clothing this is sumitkumar sanjay Deshpande</p>
              </div>
              <div className="details">
                <p>50000rs</p>
              </div>
              <div className="details">
                <p>category</p>
              </div>
            </div>
          </tr>
        </table>
      </div>
    </div>
  );
};
export default ProductList;
