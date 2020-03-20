import React from "react";
import "./ProductDetails.css";

export default class ProductDetails extends React.Component {
  render() {
    return (
      <div className="ProductDetails">
        <section>
          <p>
            A larger image of the product than the one you clicked on to get to
            this page.
          </p>
        </section>
        <section>
          <h3>Materials</h3>
          <ul>
            <li>Mesh:</li>
            <li>Hard steel:</li>
            <ul>
              <li>3/8":</li>
              <li>1/4":</li>
            </ul>
            <li>Soft steel:</li>
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
