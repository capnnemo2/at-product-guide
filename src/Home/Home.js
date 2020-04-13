import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <section className="first">
          <div className="fake-img"></div>
          <p>Learn how to weld trellises, arbors, and topiary.</p>
          <Link to="/products">Begin</Link>
        </section>

        <section className="section">
          <p>
            Peruse the entire repository of specifications. Search for specific
            products.
          </p>
        </section>
        <section className="section">
          <p>
            Double check measurements, reference images, study detailed
            instructions.
          </p>
        </section>
        <section className="section">
          <p>
            Share your personal tricks, get advice from other professionals.
          </p>
        </section>
      </div>
    );
  }
}
