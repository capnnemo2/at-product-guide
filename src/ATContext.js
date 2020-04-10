import React from "react";

export default React.createContext({
  id: "",
  product_code: "",
  product_name: "",
  product_type: "",
  mesh: [],
  hard_three_eighths: [],
  hard_one_quarter: [],
  soft_three_eighths: [],
  prep_bend: [],
  prep_weld: [],
  weld: [],

  products: [],
  comments: [],
  addProduct: () => {},
  deleteProduct: () => {},
  updateProduct: () => {},
  addComment: () => {},
  deleteComment: () => {},
  updateComment: () => {},

  clearProduct: () => {},

  updateProductCode: () => {},
  updateProductName: () => {},
  updateProductType: () => {},

  handleMeshChange: () => {},
  handleAddMesh: () => {},
  handleRemoveMesh: () => {},

  handleThreeEighthsChange: () => {},
  handleAddThreeEighths: () => {},
  handleRemoveThreeEighths: () => {},

  handleOneQuarterChange: () => {},
  handleAddOneQuarter: () => {},
  handleRemoveOneQuarter: () => {},

  handleSoftSteelChange: () => {},
  handleAddSoft: () => {},
  handleRemoveSoft: () => {},

  handlePrepBendChange: () => {},
  handleAddPrepBend: () => {},
  handleRemovePrepBend: () => {},

  handlePrepWeldChange: () => {},
  handleAddPrepWeld: () => {},
  handleRemovePrepWeld: () => {},

  handleWeldChange: () => {},
  handleAddWeld: () => {},
  handleRemoveWeld: () => {},
});
