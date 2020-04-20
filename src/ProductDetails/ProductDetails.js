import React from "react";
import { Link } from "react-router-dom";
import "./ProductDetails.css";
import ATContext from "../ATContext";
import config from "../config";
import { Image, Transformation } from "cloudinary-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPencilAlt,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

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

    return product ? (
      <div className="ProductDetails">
        <section>
          <h2>
            {product.product_name}
            {"  "}
            {`(${product.product_code})`}
          </h2>
          <div className="dummyImg detail">
            <Image cloudName="at-product-guide" publicId={product.img_src}>
              <Transformation height="400" crop="scale" quality="auto" />
            </Image>
          </div>
        </section>

        <section>
          <div className="btn-panel">
            <Link className="btn" to={`/edit-product/${productId}`}>
              <FontAwesomeIcon icon={faPencilAlt} />
            </Link>
            <Link to={"/products"}>
              <FontAwesomeIcon icon={faHome} />
            </Link>
            <Link
              className="del-btn"
              to={`/products`}
              onClick={(e) => {
                if (
                  window.confirm(
                    `Are you sure you want to delete this product? (If this is not a test product, please don't delete it! Thank you!)`
                  )
                ) {
                  e.preventDefault();
                  this.handleDelete(productId);
                } else {
                  alert(`Whew, that was close!`);
                }
              }}
            >
              <FontAwesomeIcon icon={faTrashAlt} />
            </Link>
          </div>
        </section>

        <section>
          <h3 className="uppercase">Materials</h3>
          <div className="materials">
            {product.mesh.length !== 0 ? (
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
              {threeEighthSteel.length !== 0 ? (
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
              ) : (
                ""
              )}
              {quarterInchSteel.length !== 0 ? (
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
              ) : (
                ""
              )}
            </fieldset>
            {softSteel.length !== 0 ? (
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
            ) : (
              ""
            )}
          </div>
        </section>

        <section>
          {prepBend.length !== 0 ? (
            <div className="instruction-div">
              <h3 className="uppercase">Prep Bend</h3>
              <ul className="instruction-block">
                {prepBend.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ) : (
            ""
          )}

          {prepWeld.length !== 0 ? (
            <div className="instruction-div">
              <h3 className="uppercase">Prep Weld</h3>
              <ul className="instruction-block">
                {prepWeld.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ) : (
            ""
          )}

          <div className="instruction-div">
            <h3 className="uppercase">Weld</h3>
            <ul className="instruction-block">
              {weld.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h4 className="uppercase">Comments</h4>
          <div>
            <ul>
              {comments.map((comment) => (
                <li key={comment.id} className="comment">
                  <p className="italic">{comment.user_name} says:</p>
                  <blockquote>{comment.content}</blockquote>
                  <div className="btn-panel">
                    <Link className="btn" to={`/edit-comment/${comment.id}`}>
                      <FontAwesomeIcon icon={faPencilAlt} />
                    </Link>
                    <button
                      type="button"
                      className="del-btn"
                      onClick={(e) => {
                        if (
                          window.confirm(
                            "Are you sure you want to delete this comment?"
                          )
                        ) {
                          e.preventDefault();
                          this.handleDeleteComment(comment.id);
                        } else {
                          alert("Whew, that was close!");
                        }
                      }}
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <Link
            className="btn"
            to={`/add-comment/${this.props.match.params.product_id}`}
          >
            Add comment
          </Link>
        </section>
      </div>
    ) : (
      "Loading...."
    );
  }
}
