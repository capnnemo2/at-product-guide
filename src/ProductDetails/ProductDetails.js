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
          return res.json().then((error) => {
            throw error;
          });
        }
      })
      .then((data) => {
        this.context.deleteProduct(productId);
      })
      .catch((error) => {
        this.setState({ error });
      });
    this.props.history.push("/products");
  };

  handleDeleteComment = (commentId) => {
    fetch(`${config.API_ENDPOINT}/comments/${commentId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: `${config.API_KEY}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error) => {
            throw error;
          });
        }
      })
      .then((data) => {
        this.context.deleteComment(commentId);
      })
      .catch((error) => {
        this.setState({ error });
      });
  };

  render() {
    const { products = [] } = this.context;
    const productId = this.props.match.params.product_id;
    const product = products.find((p) => Number(p.id) === Number(productId));
    const threeEighthSteel = !product
      ? []
      : Object.values(product.hard_three_eighths);
    const quarterInchSteel = !product
      ? []
      : Object.values(product.hard_one_quarter);
    const softSteel = !product ? [] : Object.values(product.soft_three_eighths);
    const prepBend = !product ? [] : Object.values(product.prep_bend);
    const prepWeld = !product ? [] : Object.values(product.prep_weld);
    const weld = !product ? [] : Object.values(product.weld);
    const comments = !product
      ? []
      : this.context.comments.filter(
          (c) => Number(c.product_id) === Number(productId)
        );

    console.log(threeEighthSteel);
    console.log(product.hard_three_eighths);
    console.log(product);

    // let threeEighthsSteelStr = "";
    // threeEighthSteel.forEach((i) => {
    //   threeEighthsSteelStr += `<li key="${i}">${i}</li>`;
    // });

    return product ? (
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
                  {/* <li key={threeEighthSteel[0]}>{threeEighthSteel[0]}</li> */}
                  {/* {threeEighthsSteelStr} */}
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
          <Link to={"/products"}>Products</Link>
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
    ) : (
      "Loading...."
    );
  }
}
