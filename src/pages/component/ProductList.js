import React from "react";
import "../../App.css";
const ProductList = () => {
  const Add = () => {
    alert("you clicked the card!!");
  };
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
            <td>
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
            </td>
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
