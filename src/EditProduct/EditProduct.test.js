import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import EditProduct from "./EditProduct";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <EditProduct />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
