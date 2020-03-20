import React from "react";
import "./Landing.css";

export default class Landing extends React.Component {
  render() {
    return (
      <div>
        <section className="section">
          <p>
            This product guide is a repository of specifications on how to make
            all Artisan Trellis products.
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
          <a href="home-page.html">Home page</a>
        </section>
      </div>
    );
  }
}
