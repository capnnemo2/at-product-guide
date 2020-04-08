import React from "react";
import { Link } from "react-router-dom";
import "./ProductDetails.css";
import ATContext from "../ATContext";
import config from "../config";

export default class ProductDetails extends React.Component {
  static contextType = ATContext;
  state = {
    error: null,
  };

  handleDelete = (productId) => {
    fetch(`${config.API_ENDPOINT}/products/${productId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: `${config.API_KEY}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then((data) => {
        this.context.deleteProduct(productId);
        this.props.history.goBack();
      })
      .catch((error) => {
        this.setState({ error });
      });
  };

  handleDeleteComment = (commentId) => {
    this.context.deleteComment(commentId);
  };

  render() {
    const { products = [] } = this.context;
    const productId = this.props.match.params.product_id;
    const product = products.find((p) => Number(p.id) === Number(productId));
    const threeEighthSteel = Object.values(product.hard_three_eighths);
    const quarterInchSteel = Object.values(product.hard_one_quarter);
    const softSteel = Object.values(product.soft_three_eighths);
    const prepBend = Object.values(product.prep_bend);
    const prepWeld = Object.values(product.prep_weld);
    const weld = Object.values(product.weld);
    const comments = this.context.comments.filter(
      (c) => Number(c.product_id) === Number(productId)
    );
    return (
      <div className="ProductDetails">
        <section>
          <h2 className="uppercase">{product.product_name}</h2>
          <div>
            {/* <img
              src={product.image.src}
              alt="trellises"
              height="400"
              width="300"
            /> */}
          </div>
        </section>
        <section>
          <h3 className="uppercase">Materials</h3>
          <div className="materials">
            {product.mesh !== "" ? (
              <fieldset>
                <legend>
                  <span className="bold">Mesh</span>
                </legend>
                {product.mesh}
              </fieldset>
            ) : (
              ""
            )}
            <fieldset className="hard-steel">
              <legend>
                <span className="bold">Hard steel</span>
              </legend>
              <div>
                <p>
                  <span className="bold">3/8": </span>
                </p>
                <ul className="steel-list">
                  {threeEighthSteel.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p>
                  <span className="bold">1/4": </span>
                </p>
                <ul className="steel-list">
                  {quarterInchSteel.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            </fieldset>
            <fieldset className="soft-steel">
              <legend>
                <span className="bold">Soft steel</span>
              </legend>
              <div>
                <p>
                  <span className="bold">3/8": </span>
                </p>
                {softSteel}
              </div>
            </fieldset>
          </div>
        </section>
        <section>
          <h3 className="uppercase">Prep bend</h3>
          <ul className="instruction-block">
            {prepBend.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </section>
        <section>
          <h3 className="uppercase">Prep weld</h3>
          <ul className="instruction-block">
            {prepWeld.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </section>
        <section>
          <h3 className="uppercase">Weld</h3>
          <ul className="instruction-block">
            {weld.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </section>
        <section>
          <Link to={`/edit-product/${productId}`}>Edit specs</Link>
          <br />
          <Link to={"/home"}>Home</Link>
          <br />
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              this.handleDelete(productId);
            }}
          >
            Delete product
          </button>
        </section>
        <section>
          <h4 className="uppercase">Comments</h4>
          <div>
            <ul>
              {comments.map((comment) => (
                <li key={comment.id} className="comment">
                  <p className="italic">{comment.user_name} says:</p>
                  <blockquote>{comment.content}</blockquote>
                  <Link to={`/edit-comment/${comment.id}`}>Edit comment</Link>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      this.handleDeleteComment(comment.id);
                    }}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <Link to={`/add-comment/${this.props.match.params.product_id}`}>
            Add comment
          </Link>
        </section>
      </div>
    );
  }
}
