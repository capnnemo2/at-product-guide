import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import dummyStore from "../dummyStore";

export default class Home extends React.Component {
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
      // will I need .toString() here if there are numbers involved?
      productCode: code.toUpperCase()
    });
  }

  render() {
    //   there should be a better, more efficient way to get the productCode that the user has entered
    const getProduct = dummyStore.filter(
      p => p.productCode === this.state.productCode
    );
    const productCode = getProduct ? getProduct[0] : "";
    const finalCodeCheck = productCode ? productCode.productCode : "";
    console.log(finalCodeCheck);
    // end of the inefficiency

    const productsToDisplay =
      this.state.filter === "all"
        ? dummyStore
        : dummyStore.filter(p => p.productType === this.state.filter);
    return (
      <div className="Home">
        {/* is it better to have two separate forms? does it matter? */}
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
          {/* need an onClick for this btn */}
          <button type="button">Go</button>
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
