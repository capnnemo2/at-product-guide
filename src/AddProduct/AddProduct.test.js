import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AddProduct from "./AddProduct";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <AddProduct />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
