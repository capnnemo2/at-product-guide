import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default class Nav extends React.Component {
  render() {
    return (
      <div>
        <div className="nav-container">
          <Link to="/">Landing</Link>
          <Link to="/home">Home</Link>
          <Link to="/resources">Resources</Link>
        </div>
      </div>
    );
  }
}
