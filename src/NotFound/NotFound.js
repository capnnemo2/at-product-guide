import React from "react";
import "./NotFound.css";

export default class NotFound extends React.Component {
  render() {
    return (
      <div className="NotFound">
        <p>Sorry, the page you expected isn't here!</p>
        <p>This project is being updated, thank you for your patience!</p>
      </div>
    );
  }
}
