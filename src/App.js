import React from "react";
import { Route } from "react-router-dom";
import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import Landing from "./Landing/Landing";
import Home from "./Home/Home";
import ProductDetails from "./ProductDetails/ProductDetails";
import AddProduct from "./AddProduct/AddProduct";
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <nav>
          {/* <Route path="/home" component={Nav} /> */}
          <Nav />
        </nav>
        <header>
          {/* maybe just want the header for the landing and home page, when you look at individual products maybe just a navbar */}
          {/* <Route exact path="/" component={Header} /> */}
          <Header />
        </header>

        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/home" component={Home} />
          <Route
            path="/productDetails/:product_id"
            component={ProductDetails}
          />
          <Route path="/add-product" component={AddProduct} />
        </main>
      </div>
    );
  }
}
