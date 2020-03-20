import React from "react";
import { Route } from "react-router-dom";
import Header from "./Header/Header";
import Landing from "./Landing/Landing";
import Home from "./Home/Home";
import ProductDetails from "./ProductDetails/ProductDetails";
import AddProduct from "./AddProduct/AddProduct";
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          {/* maybe just want the header for the landing and home page, when you look at individual products maybe just a navbar */}
          <Header />
        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/home" component={Home} />
          <Route path="/product-details" component={ProductDetails} />
          <Route path="/add-product" component={AddProduct} />
        </main>
      </div>
    );
  }
}
