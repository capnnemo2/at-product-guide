import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import dummyStore from "../dummyStore";

export default class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="Home__subheader">
          <h2>Filters</h2>
          <p>
            This should have product type filters, like the AT product catalog.
          </p>
        </div>

        <ul>
          <li key="0" className="Home__li">
            <a href="http://www.artisantrellis.com/all-products">
              Artisan Trellis Catalog
            </a>
          </li>
          {dummyStore.map(p => (
            <li key={p.id} className="Home__li">
              <Link to={`productDetails/${p.id}`} className="Home__link">
                {p.productName}
              </Link>
              <div className="dummyImage"></div>
            </li>
          ))}
        </ul>

        <section>
          <p>
            Here we see all of the products, similar/identical to how they are
            displayed on the Artisan Trellis wholesale catalog site.
          </p>
          <a href="http://www.artisantrellis.com/all-products">
            Artisan Trellis Catalog
          </a>
          <p>
            The main difference is that when you click on a product you will be
            taken to the specs of how to make it.
          </p>
        </section>
        <section className="product">
          <h3>Product Name</h3>
          <p>product image</p>
          <Link to="/product-details">Details</Link>
        </section>
        <section className="product">
          <h3>Product Name</h3>
          <p>product image</p>
          <Link to="/product-details">Details</Link>
        </section>
        <section className="product">
          <h3>Product Name</h3>
          <p>product image</p>
          <Link to="/product-details">Details</Link>
        </section>
        <section className="product">
          <h3>Product Name</h3>
          <p>product image</p>
          <Link to="/product-details">Details</Link>
        </section>
        <section className="product">
          <h3>Product Name</h3>
          <p>product image</p>
          <Link to="/product-details">Details</Link>
        </section>
        <Link to="/add-product">Add new product</Link>
      </div>
    );
  }
}
