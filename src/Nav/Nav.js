import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default class Nav extends React.Component {
  render() {
    return (
      <div>
        <div className="nav-container">
          <Link to="/">Topiary Welding</Link>
          <Link to="/products">Products</Link>
          <Link to="/resources">Resources</Link>
        </div>
      </div>
    );
  }
}
