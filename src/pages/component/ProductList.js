import React from "react";
import "../../App.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setProduct } from "../../Redux/Actions/ProductAction";

const ProductList = () => {
  // const history = useNavigate();
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
  // const NavigateToReturn = (id) => {
  //   console.log("id is equal to ", id);
  //   history(`/details/${id}`);
  // };
  useEffect(() => {
    FetchProducts();
  });
  return (
    <div className="main-section">
      {products_list.map((e, index) => {
        return (
          <>
            <Link to={`/details/${e.id}`}>
              <div className="main">
                <table>
                  <tr>
                    <th>Products List</th>
                  </tr>
                  <tr>
                    <div className="container">
                      <div className="product-image">
                        <img className="images" src={e.image} alt="demo" />
                      </div>
                      <div className="details">
                        <p>${e.price}</p>
                      </div>
                      <div className="details">
                        <p>{e.title}</p>
                      </div>
                      <div className="details">
                        <p>{e.category}</p>
                      </div>
                    </div>
                  </tr>
                </table>
              </div>
            </Link>
          </>
        );
      })}
    </div>
  );
};
export default ProductList;
