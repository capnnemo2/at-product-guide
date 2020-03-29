import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

export default class Landing extends React.Component {
  render() {
    return (
      <div className="Landing">
        <section className="section">
          <p>
            This product guide is a repository of specifications on how to make
            Affable Triceratops products.
          </p>
        </section>
        <section className="section">
          <p>
            Check out pictures, measurements, and detailed instructions on what
            to do, when to do it, and tips for execution.
          </p>
        </section>
        <section className="section">
          <p>
            Post comments to share your personal tricks, see what others do.
          </p>
          <Link to="/home">Begin</Link>
        </section>
      </div>
    );
  }
}
