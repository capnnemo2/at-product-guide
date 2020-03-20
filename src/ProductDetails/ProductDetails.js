import React from "react";
import "./ProductDetails.css";
import dummyStore from "../dummyStore";

export default class ProductDetails extends React.Component {
  render() {
    const productId = this.props.match.params.product_id;
    const product = dummyStore.find(p => Number(p.id) === Number(productId));

    return (
      <div className="ProductDetails">
        <section>
          <h2>{product.productName}</h2>
          <div className="dummyImage"></div>
        </section>
        <section>
          <h3>Materials</h3>
          <ul>
            <li>
              <span className="bold">Mesh: </span>
              {product.mesh}
            </li>
            <li>
              <span className="bold">Hard steel:</span>
              <ul>
                <li>
                  <span className="bold">3/8": </span>
                  {product.hardSteel[0].threeEigths}
                </li>
                <li>
                  <span className="bold">1/4": </span>
                  {product.hardSteel[0].oneQuarter}
                </li>
              </ul>
            </li>

            <li>
              <span className="bold">Soft steel:</span>
              <ul>
                <li>
                  <span className="bold">3/8": </span>
                  {product.softSteel[0].threeEigths}
                </li>
              </ul>
            </li>
          </ul>
        </section>
        <section>
          <h3>Prep bends</h3>
          <p>Description of any bending and/or cutting.</p>
        </section>
        <section>
          <h3>Prep welds</h3>
          <p>Description of any modular welding.</p>
        </section>
        <section>
          <h3>Weld</h3>
          <p>
            First weld, order of putting together modules, directions on foot
            spikes, reminder to back weld.
          </p>
        </section>
        <section>
          <button type="button">Add comment</button>
          <button type="button">Edit specs</button>
        </section>
        <section>
          <h4>Comments</h4>
          <div>
            <p>Mark says:</p>
            <blockquote>
              Make sure you use the 90" 1/4" steel, not the 5' pieces. That way
              you don't have as much scrap.
            </blockquote>
          </div>
          <div>
            <p>Taylor says:</p>
            <blockquote>I always turn my table when making these.</blockquote>
          </div>
        </section>
      </div>
    );
  }
}
