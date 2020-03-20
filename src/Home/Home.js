import React from "react";
import "./Home.css";

export default class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="Home__subheader">
          <h2>All products</h2>
          <p>
            This have product type filters, also like the AT product catalog.
          </p>
        </div>

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
        <section class="product">
          <h3>Product Name</h3>
          <p>product image</p>
          <a href="product-details.html">Details</a>
        </section>
        <section class="product">
          <h3>Product Name</h3>
          <p>product image</p>
          <a href="product-details.html">Details</a>
        </section>
        <section class="product">
          <h3>Product Name</h3>
          <p>product image</p>
          <a href="product-details.html">Details</a>
        </section>
        <section class="product">
          <h3>Product Name</h3>
          <p>product image</p>
          <a href="product-details.html">Details</a>
        </section>
        <section class="product">
          <h3>Product Name</h3>
          <p>product image</p>
          <a href="product-details.html">Details</a>
        </section>
        <a href="add-new-product.html">Add a new product</a>
      </div>
    );
  }
}
