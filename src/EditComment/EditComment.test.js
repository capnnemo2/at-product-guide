import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import EditComment from "./EditComment";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <EditComment />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
