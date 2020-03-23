import React from "react";
import "./EditComment.css";

// THIS WILL NEED TO PRE-FILL ONCE IT IS HOOKED UP TO A BACK-END
export default class AddComment extends React.Component {
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
