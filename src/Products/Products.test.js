import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Products from "./Products";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <Products />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
