import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import Landing from "./Landing/Landing";
import Home from "./Home/Home";
import ProductDetails from "./ProductDetails/ProductDetails";
import AddProduct from "./AddProduct/AddProduct";
import NotFound from "./NotFound/NotFound";
import "./App.css";
import AddComment from "./AddComment/AddComment";

export default class App extends React.Component {
  render() {
    return (
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
            <Route
              path="/productDetails/:product_id"
              component={ProductDetails}
            />
            <Route path="/add-product" component={AddProduct} />
            <Route path="/add-comment" component={AddComment} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    );
  }
}
