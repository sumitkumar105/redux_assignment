import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import ProductList from "../pages/component/ProductList";

export default function Routing() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<ProductList />} />
        </Routes>
      </Router>
    </div>
  );
}
