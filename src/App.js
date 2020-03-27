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

  // TODO: do I need to figure out how to assign an id # to new products in this static client or can I wait for the back-end?
  // I won't be able to delete newly added products on the static client if I don't figure out assigning an id
  // ALSO cannot navigate to the productDetails page for new products, so need to figure something out
  addProduct = newProduct => {
    this.setState({ products: [...this.state.products, newProduct] });
    console.log(this.state.products);
  };

  render() {
    const value = {
      products: this.state.products,
      addProduct: this.addProduct
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
