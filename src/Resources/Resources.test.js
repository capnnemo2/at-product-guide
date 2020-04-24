import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Resources from "./Resources";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <Resources />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
