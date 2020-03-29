import React from "react";
import { Link } from "react-router-dom";
import "./ProductDetails.css";
import ATContext from "../ATContext";

export default class ProductDetails extends React.Component {
  static contextType = ATContext;

  handleDeleteComment = commentId => {
    this.context.deleteComment(commentId);
  };

  render() {
    const productId = this.props.match.params.product_id;
    const product = this.context.products.find(
      p => Number(p.id) === Number(productId)
    );
    const threeEighthSteel = Object.values(product.hardSteel)[0];
    const quarterInchSteel = Object.values(product.hardSteel)[1];
    const softSteel = Object.values(product.softSteel);
    const prepBend = Object.values(product.prepBend);
    const prepWeld = Object.values(product.prepWeld);
    const weld = Object.values(product.weld);
    const comments = this.context.comments.filter(
      c => Number(c.productId) === Number(productId)
    );
    console.log(comments);
    return (
      <div className="ProductDetails">
        <section>
          <h2 className="uppercase">{product.productName}</h2>
          <div>
            <img
              src={product.image.src}
              alt="trellises"
              height="400"
              width="300"
            />
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
            {/* proof of concept with the mesh: if it's empty, don't display it. circle back to this for the other fields */}
            <fieldset className="hard-steel">
              <legend>
                <span className="bold">Hard steel</span>
              </legend>
              <div>
                <p>
                  <span className="bold">3/8": </span>
                </p>
                <ul className="steel-list">
                  {threeEighthSteel.map(i => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p>
                  <span className="bold">1/4": </span>
                </p>
                <ul className="steel-list">
                  {quarterInchSteel.map(i => (
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
            {prepBend.map(i => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </section>
        <section>
          <h3 className="uppercase">Prep weld</h3>
          <ul className="instruction-block">
            {prepWeld.map(i => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </section>
        <section>
          <h3 className="uppercase">Weld</h3>
          <ul className="instruction-block">
            {weld.map(i => (
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
            onClick={e => {
              e.preventDefault();
              this.context.deleteProduct(productId);
              this.props.history.push("/home");
            }}
          >
            Delete product
          </button>
        </section>
        <section>
          <h4 className="uppercase">Comments</h4>
          <div>
            <ul>
              {comments.map(comment => (
                <li key={comment.id} className="comment">
                  <p className="italic">{comment.user_name} says:</p>
                  <blockquote>{comment.content}</blockquote>
                  <Link to={"/edit-comment/"}>Edit comment</Link>
                  <button
                    type="button"
                    onClick={e => {
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
