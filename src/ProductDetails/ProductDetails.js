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
          <h2 className="uppercase">{product.productName}</h2>
          <div className="dummyImage"></div>
        </section>
        <section>
          <h3 className="uppercase">Materials</h3>
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
          <h3 className="uppercase">Prep bend</h3>
          {/* maybe this should be an un/ordered list? */}
          <p className="description">{product.prepBend}</p>
        </section>
        <section>
          <h3 className="uppercase">Prep weld</h3>
          {/* maybe this should be an un/ordered list? */}
          <p className="description">{product.prepWeld}</p>
        </section>
        <section>
          <h3 className="uppercase">Weld</h3>
          {/* maybe this should be an un/ordered list? */}
          <p className="description">{product.weld}</p>
        </section>
        <section>
          <button type="button">Add comment</button>
          <button type="button">Edit specs</button>
        </section>
        <section>
          <h4 className="uppercase">Comments</h4>
          <div>
            <ul>
              {product.comments.map(comment => (
                <li key={comment.id}>
                  {comment.user_name} says: {comment.content}
                </li>
              ))}
            </ul>

            {/* <p>Mark says:</p>
            <blockquote>
              Make sure you use the 90" 1/4" steel, not the 5' pieces. That way
              you don't have as much scrap.
            </blockquote>
          </div>
          <div>
            <p>Taylor says:</p>
            <blockquote>I always turn my table when making these.</blockquote> */}
          </div>
        </section>
      </div>
    );
  }
}
