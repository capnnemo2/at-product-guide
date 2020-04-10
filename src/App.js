import React from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./Nav/Nav";
import Header from "./Header/Header";
import Landing from "./Landing/Landing";
import Home from "./Home/Home";
import Resources from "./Resources/Resources";
import ProductDetails from "./ProductDetails/ProductDetails";
import AddProduct from "./AddProduct/AddProduct";
import AddComment from "./AddComment/AddComment";
import EditProduct from "./EditProduct/EditProduct";
import EditComment from "./EditComment/EditComment";
import NotFound from "./NotFound/NotFound";
import config from "./config";
import ATContext from "./ATContext";
import "./App.css";

export default class App extends React.Component {
  state = {
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
    error: null,
  };

  // set initial state
  setProducts = (products) => {
    this.setState({
      products,
      error: null,
    });
  };

  setComments = (comments) => {
    this.setState({
      comments,
      error: null,
    });
  };

  // get initial data
  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/products`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `${config.API_KEY}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then(this.setProducts)
      .catch((error) => this.setState({ error }));

    fetch(`${config.API_ENDPOINT}/comments`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `${config.API_KEY}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then(this.setComments)
      .catch((error) => this.setState({ error }));
  }

  // product handlers
  addProduct = (newProduct) => {
    this.setState({
      products: [...this.state.products, newProduct],
    });
  };

  deleteProduct = (productId) => {
    const newProducts = this.state.products.filter(
      (p) => Number(p.id) !== Number(productId)
    );
    this.setState({ products: newProducts });
  };

  updateProduct = (newProduct, productId) => {
    let newProducts = this.state.products.map((p) =>
      Number(p.id) === Number(productId) ? newProduct : p
    );
    console.log(newProducts);
    this.setState({ products: newProducts });
  };

  // comment handlers
  addComment = (newComment) => {
    this.setState({
      comments: [...this.state.comments, newComment],
    });
  };

  deleteComment = (commentId) => {
    const newComments = this.state.comments.filter(
      (c) => Number(c.id) !== Number(commentId)
    );
    this.setState({ comments: newComments });
  };

  updateComment = (newComment, commentId) => {
    let newComments = this.state.comments.map((c) =>
      Number(c.id) === Number(commentId) ? newComment : c
    );
    this.setState({ comments: newComments });
  };

  // ADD/EDIT PRODUCT HANDLERS
  updateProductCode = (code) => {
    this.setState({
      product_code: code,
    });
  };

  updateProductName = (name) => {
    this.setState({
      product_name: name,
    });
  };

  updateProductType = (type) => {
    this.setState({
      product_type: type,
    });
  };

  // mesh handlers
  handleMeshChange = (idx) => (e) => {
    const newMesh = this.state.mesh.map((mesh, sidx) => {
      if (idx !== sidx) return mesh;
      return { ...mesh, measurements: e.target.value };
    });
    this.setState({ mesh: newMesh });
  };

  handleAddMesh = () => {
    this.setState({
      mesh: this.state.mesh.concat([{ measurements: "" }]),
    });
  };

  handleRemoveMesh = (idx) => () => {
    this.setState({
      mesh: this.state.mesh.filter((s, sidx) => idx !== sidx),
    });
  };

  // hard 3/8" handlers
  handleThreeEighthsChange = (idx) => (e) => {
    const newThreeEighths = this.state.hard_three_eighths.map((three, sidx) => {
      if (idx !== sidx) return three;
      return { ...three, measurements: e.target.value };
    });
    this.setState({ hard_three_eighths: newThreeEighths });
  };

  handleAddThreeEighths = () => {
    this.setState({
      hard_three_eighths: this.state.hard_three_eighths.concat([
        { measurements: "" },
      ]),
    });
  };

  handleRemoveThreeEighths = (idx) => () => {
    this.setState({
      hard_three_eighths: this.state.hard_three_eighths.filter(
        (s, sidx) => idx !== sidx
      ),
    });
  };

  // hard 1/4" handlers
  handleOneQuarterChange = (idx) => (e) => {
    const newOneQuarter = this.state.hard_one_quarter.map((quarter, sidx) => {
      if (idx !== sidx) return quarter;
      return { ...quarter, measurements: e.target.value };
    });
    this.setState({ hard_one_quarter: newOneQuarter });
  };

  handleAddOneQuarter = () => {
    this.setState({
      hard_one_quarter: this.state.hard_one_quarter.concat([
        { measurements: "" },
      ]),
    });
  };

  handleRemoveOneQuarter = (idx) => () => {
    this.setState({
      hard_one_quarter: this.state.hard_one_quarter.filter(
        (s, sidx) => idx !== sidx
      ),
    });
  };

  // soft steel handlers
  handleSoftSteelChange = (idx) => (e) => {
    const newSoftThreeEighths = this.state.soft_three_eighths.map(
      (soft, sidx) => {
        if (idx !== sidx) return soft;
        return { ...soft, measurements: e.target.value };
      }
    );
    this.setState({ soft_three_eighths: newSoftThreeEighths });
  };

  handleAddSoft = () => {
    this.setState({
      soft_three_eighths: this.state.soft_three_eighths.concat([
        { measurements: "" },
      ]),
    });
  };

  handleRemoveSoft = (idx) => () => {
    this.setState({
      soft_three_eighths: this.state.soft_three_eighths.filter(
        (s, sidx) => idx !== sidx
      ),
    });
  };

  // prep bend handlers
  handlePrepBendChange = (idx) => (e) => {
    const newPrepBend = this.state.prep_bend.map((prepB, sidx) => {
      if (idx !== sidx) return prepB;
      return { ...prepB, measurements: e.target.value };
    });
    this.setState({ prep_bend: newPrepBend });
  };

  handleAddPrepBend = () => {
    this.setState({
      prep_bend: this.state.prep_bend.concat([{ measurements: "" }]),
    });
  };

  handleRemovePrepBend = (idx) => () => {
    this.setState({
      prep_bend: this.state.prep_bend.filter((s, sidx) => idx !== sidx),
    });
  };

  // prep weld handlers
  handlePrepWeldChange = (idx) => (e) => {
    const newPrepWeld = this.state.prep_weld.map((prepW, sidx) => {
      if (idx !== sidx) return prepW;
      return { ...prepW, measurements: e.target.value };
    });
    this.setState({ prep_weld: newPrepWeld });
  };

  handleAddPrepWeld = () => {
    this.setState({
      prep_weld: this.state.prep_weld.concat([{ measurements: "" }]),
    });
  };

  handleRemovePrepWeld = (idx) => () => {
    this.setState({
      prep_weld: this.state.prep_weld.filter((s, sidx) => idx !== sidx),
    });
  };

  // weld handlers
  handleWeldChange = (idx) => (e) => {
    const newWeld = this.state.weld.map((w, sidx) => {
      if (idx !== sidx) return w;
      return { ...w, measurements: e.target.value };
    });
    this.setState({ weld: newWeld });
  };

  handleAddWeld = () => {
    this.setState({ weld: this.state.weld.concat([{ measurements: "" }]) });
  };

  handleRemoveWeld = (idx) => () => {
    this.setState({
      weld: this.state.weld.filter((s, sidx) => idx !== sidx),
    });
  };

  // clear context
  clearProduct = () => {
    this.setState({
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
    });
  };

  render() {
    const value = {
      product_code: this.state.product_code,
      product_name: this.state.product_name,
      product_type: this.state.product_type,
      mesh: this.state.mesh,
      hard_three_eighths: this.state.hard_three_eighths,
      hard_one_quarter: this.state.hard_one_quarter,
      soft_three_eighths: this.state.soft_three_eighths,
      prep_bend: this.state.prep_bend,
      prep_weld: this.state.prep_weld,
      weld: this.state.weld,

      products: this.state.products,
      comments: this.state.comments,
      addProduct: this.addProduct,
      deleteProduct: this.deleteProduct,
      updateProduct: this.updateProduct,
      addComment: this.addComment,
      deleteComment: this.deleteComment,
      updateComment: this.updateComment,

      updateProductCode: this.updateProductCode,
      updateProductName: this.updateProductName,
      updateProductType: this.updateProductType,

      handleMeshChange: this.handleMeshChange,
      handleAddMesh: this.handleAddMesh,
      handleRemoveMesh: this.handleRemoveMesh,

      handleThreeEighthsChange: this.handleThreeEighthsChange,
      handleAddThreeEighths: this.handleAddThreeEighths,
      handleRemoveThreeEighths: this.handleRemoveThreeEighths,

      handleOneQuarterChange: this.handleOneQuarterChange,
      handleAddOneQuarter: this.handleAddOneQuarter,
      handleRemoveOneQuarter: this.handleRemoveOneQuarter,

      handleSoftSteelChange: this.handleSoftSteelChange,
      handleAddSoft: this.handleAddSoft,
      handleRemoveSoft: this.handleRemoveSoft,

      handlePrepBendChange: this.handlePrepBendChange,
      handleAddPrepBend: this.handleAddPrepBend,
      handleRemovePrepBend: this.handleRemovePrepBend,

      handlePrepWeldChange: this.handlePrepWeldChange,
      handleAddPrepWeld: this.handleAddPrepWeld,
      handleRemovePrepWeld: this.handleRemovePrepWeld,

      handleWeldChange: this.handleWeldChange,
      handleAddWeld: this.handleAddWeld,
      handleRemoveWeld: this.handleRemoveWeld,

      clearProduct: this.clearProduct,
    };
    return (
      <ATContext.Provider value={value}>
        <div className="App">
          <nav>
            <Nav />
          </nav>
          <header>
            <Header />
          </header>

          <main>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/home" component={Home} />
              <Route path="/resources" component={Resources} />
              <Route
                path="/productDetails/:product_id"
                component={ProductDetails}
              />
              <Route path="/add-product" component={AddProduct} />
              <Route path="/add-comment/:product_id" component={AddComment} />
              <Route path="/edit-product/:product_id" component={EditProduct} />
              <Route path="/edit-comment/:comment_id" component={EditComment} />
              <Route component={NotFound} />
            </Switch>
          </main>
        </div>
      </ATContext.Provider>
    );
  }
}
