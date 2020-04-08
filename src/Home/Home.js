import React from "react";
import { Link } from "react-router-dom";
import ATContext from "../ATContext";
import "./Home.css";

export default class Home extends React.Component {
  static contextType = ATContext;

  state = {
    filter: "all",
    productCode: "",
  };

  updateFilter(filter) {
    this.setState({
      filter: filter,
    });
  }

  updateProductCode(code) {
    this.setState({
      productCode: code.toUpperCase(),
    });
  }

  render() {
    const findProduct = this.context.products.filter(
      (p) => p.product_code === this.state.productCode
    );
    const getProduct = findProduct ? findProduct[0] : "";
    const productId = getProduct ? getProduct.id : "";

    const productsToDisplay =
      this.state.filter === "all"
        ? this.context.products
        : this.context.products.filter(
            (p) => p.product_type === this.state.filter
          );

    return (
      <div className="Home">
        <form>
          <label htmlFor="search" className="filter-label">
            Know what you're looking for? Enter product code:
          </label>{" "}
          <input
            type="text"
            name="search"
            id="search"
            onChange={(e) => this.updateProductCode(e.target.value)}
          />
          {productId !== "" ? (
            <Link to={`/productDetails/${productId}`}>Zip to it</Link>
          ) : (
            ""
          )}
          <br />
          <label htmlFor="filter" className="filter-label">
            Filter:
          </label>{" "}
          <select
            id="filter"
            onChange={(e) => this.updateFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="trellis">Trellises</option>
            <option value="arbor">Arbors</option>
            <option value="topiary">Topiary</option>
          </select>
        </form>

        <ul>
          {productsToDisplay.map((p) => (
            <li key={p.id} className="Home__li">
              <Link to={`productDetails/${p.id}`} className="Home__link">
                {p.product_name}
              </Link>
              <br />
              {/* <img
                src={p.image.src}
                alt={p.image.alt}
                height="200"
                width="200"
              /> */}
            </li>
          ))}
        </ul>

        <Link to="/add-product">Add new product</Link>
      </div>
    );
  }
}
