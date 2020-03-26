import React from "react";
import { Link } from "react-router-dom";
import "./ProductDetails.css";
import dummyStore from "../dummyStore";

export default class ProductDetails extends React.Component {
  render() {
    const productId = this.props.match.params.product_id;
    const product = dummyStore.find(p => Number(p.id) === Number(productId));

    const threeEigthSteel = Object.values(product.hardSteel)[0]
      ? Object.values(product.hardSteel)[0]
      : [];

    const quarterInchSteel = Object.values(product.hardSteel)[1]
      ? Object.values(product.hardSteel)[1]
      : [];

    const softSteel = Object.values(product.softSteel)
      ? Object.values(product.softSteel)
      : [];

    return (
      <div className="ProductDetails">
        <section>
          <h2 className="uppercase">{product.productName}</h2>
          {/* <div className="dummyImage"></div> */}
          <div>
            <img
              src={require("../pics/SA.jpg")}
              alt="small arbor"
              height="400"
              width="300"
            />
          </div>
        </section>
        <section>
          <h3 className="uppercase">Materials</h3>
          <div className="materials">
            <fieldset>
              <legend>
                <span className="bold">Mesh</span>
              </legend>
              {product.mesh}
            </fieldset>
            <fieldset className="hard-steel">
              <legend>
                <span className="bold">Hard steel</span>
              </legend>
              <div>
                <p>
                  <span className="bold">3/8": </span>
                </p>
                <ul className="steel-list">
                  {threeEigthSteel.map(i => (
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
          {/* should editing be available to all users or just admin? is there a way for anyone to make changes, but they don't go into effect until the admin approves them? */}
          <Link to={"/edit-product"}>Edit specs</Link>
          <br />
          <Link to={"/home"}>Home</Link>
        </section>
        <section>
          <h4 className="uppercase">Comments</h4>
          <div>
            <ul>
              {product.comments.map(comment => (
                <li key={comment.id} className="comment">
                  <p className="italic">{comment.user_name} says:</p>
                  <blockquote>{comment.content}</blockquote>
                  {/* the edit comment option should only be available for the user who left it */}
                  <Link to={"/edit-comment"}>Edit comment</Link>
                  {/* this button should only appear for the admin user */}
                  <button type="button">Delete</button>
                </li>
              ))}
            </ul>
          </div>
          <Link to={"/add-comment"}>Add comment</Link>
        </section>
      </div>
    );
  }
}
