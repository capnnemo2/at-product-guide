import React from "react";
import ATContext from "../ATContext";
import "./AddComment.css";

export default class AddComment extends React.Component {
  static contextType = ATContext;

  state = {
    id: "",
    user_name: "",
    content: ""
  };

  handleClickCancel = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div className="AddComment">
        <section>
          <form className="addCommentForm">
            <label htmlFor="user-name">Name: </label>
            <input type="text" name="user-name" id="user-name" required />
            <br />
            <label htmlFor="user-comment">Comment: </label>
            <textarea name="user-comment" id="user-comment"></textarea>
            <br />
            <button type="submit">Submit</button>
            <button type="button" onClick={this.handleClickCancel}>
              Cancel
            </button>
          </form>
        </section>
      </div>
    );
  }
}
