import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AddComment from "./AddComment";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <AddComment />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
