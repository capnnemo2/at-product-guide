import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ProductDetails from "./ProductDetails";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <ProductDetails />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
