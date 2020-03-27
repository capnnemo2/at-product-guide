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
import dummyStore from "./dummyStore";
import ATContext from "./ATContext";
import "./App.css";

export default class App extends React.Component {
  state = {
    products: []
  };

  componentDidMount() {
    const productArray = dummyStore;
    this.setState({
      products: productArray
    });
  }

  addProduct = newProduct => {
    this.setState({ products: [...this.state.products, newProduct] });
    console.log(this.state.products);
  };

  deleteProduct = productId => {
    const newProducts = this.state.products.filter(
      p => Number(p.id) !== Number(productId)
    );
    this.setState({ products: newProducts });
  };

  render() {
    const value = {
      products: this.state.products,
      addProduct: this.addProduct,
      deleteProduct: this.deleteProduct
    };
    console.log(this.state.products);
    return (
      <ATContext.Provider value={value}>
        <div className="App">
          <nav>
            <Nav />
          </nav>
          <header>
            {/* maybe just want the header for the landing and home page, when you look at individual products maybe just a navbar? */}
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
              <Route path="/add-comment" component={AddComment} />
              <Route path="/edit-product" component={EditProduct} />
              <Route path="/edit-comment" component={EditComment} />
              <Route component={NotFound} />
            </Switch>
          </main>
        </div>
      </ATContext.Provider>
    );
  }
}
