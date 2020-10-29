import React from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./Nav/Nav";
import Home from "./Home/Home";
import Products from "./Products/Products";
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
    products: [],
    comments: [],
    error: null,
  };

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

  render() {
    const value = {
      products: this.state.products,
      comments: this.state.comments,
      addProduct: this.addProduct,
      deleteProduct: this.deleteProduct,
      updateProduct: this.updateProduct,
      addComment: this.addComment,
      deleteComment: this.deleteComment,
      updateComment: this.updateComment,
    };
    return (
      <ATContext.Provider value={value}>
        <div className="App">
          <nav>
            <Switch>
              <Route exact path="/" render={null} />
              <Route component={Nav} />
            </Switch>
          </nav>
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/products" component={Products} />
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
