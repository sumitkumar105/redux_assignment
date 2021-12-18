import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import ProductList from "../pages/component/ProductList";
import ProductDetails from "../pages/component/ProductDetails";

export default function Routing() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<ProductList />} />
          <Route exact path="/details/:prodId" element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  );
}
