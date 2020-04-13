import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <h1>Topiary Welding Product Guide</h1>
        {/* <Link to="/" className="Header__link">
          <h1>Affable Triceratops Product Guide</h1>
        </Link> */}
      </div>
    );
  }
}
