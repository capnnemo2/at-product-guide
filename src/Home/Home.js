import React from "react";
import { Link } from "react-router-dom";
import ATContext from "../ATContext";
import "./Home.css";

export default class Home extends React.Component {
  static contextType = ATContext;

  state = {
    filter: "all",
    productCode: ""
  };

  updateFilter(filter) {
    this.setState({
      filter: filter
    });
  }

  updateProductCode(code) {
    this.setState({
      productCode: code.toUpperCase()
    });
  }

  render() {
    const findProduct = this.context.products.filter(
      p => p.productCode === this.state.productCode
    );
    const getProduct = findProduct ? findProduct[0] : "";
    const productId = getProduct ? getProduct.id : "";

    const productsToDisplay =
      this.state.filter === "all"
        ? this.context.products
        : this.context.products.filter(
            p => p.productType === this.state.filter
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
            onChange={e => this.updateProductCode(e.target.value)}
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
          <select id="filter" onChange={e => this.updateFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="trellis">Trellises</option>
            <option value="arbor">Arbors</option>
            <option value="topiary">Topiary</option>
          </select>
        </form>

        <ul>
          <li key="0" className="Home__li">
            <p>Purely for reference purposes:</p>
            <a href="http://www.artisantrellis.com/all-products">
              Artisan Trellis Catalog
            </a>
          </li>
          {productsToDisplay.map(p => (
            <li key={p.id} className="Home__li">
              <Link to={`productDetails/${p.id}`} className="Home__link">
                {p.productName}
              </Link>
              <div className="dummyImage"></div>
            </li>
          ))}
        </ul>

        <Link to="/add-product">Add new product</Link>
      </div>
    );
  }
}
