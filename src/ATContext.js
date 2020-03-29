import React from "react";

export default React.createContext({
  products: [],
  comments: [],
  addProduct: () => {},
  deleteProduct: () => {},
  updateProduct: () => {},
  addComment: () => {},
  deleteComment: () => {},
  updateComment: () => {}
});
