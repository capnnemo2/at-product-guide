import React from "react";
import ATContext from "../ATContext";
import config from "../config";
import "./EditComment.css";

export default class EditComment extends React.Component {
  static contextType = ATContext;

  state = {
    error: null,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const comment_id = Number(this.props.match.params.comment_id);
    const existingComment = this.context.comments.find(
      (c) => Number(c.id) === Number(comment_id)
    );
    const id = comment_id;
    const product_id = existingComment.product_id;
    const user_name = e.target.name.value;
    const content = e.target.content.value;
    const newComment = { id, user_name, content, product_id };

    fetch(`${config.API_ENDPOINT}/comments/${comment_id}`, {
      method: "PATCH",
      body: JSON.stringify(newComment),
      headers: {
        "content-type": "application/json",
        Authorization: `${config.API_KEY}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error) => {
            throw error;
          });
        }
      })
      .then((data) => {
        this.context.updateComment(newComment, newComment.id);
      })
      .catch((error) => {
        this.setState({ error });
      });
    this.props.history.push(`/productDetails/${product_id}`);
  };

  handleClickCancel = () => {
    this.props.history.goBack();
  };

  render() {
    const comment = this.context.comments.find(
      (c) => Number(c.id) === Number(this.props.match.params.comment_id)
    );
    return comment ? (
      <div className="EditComment">
        <h2>Edit comment</h2>
        <form className="editCommentForm" onSubmit={this.handleSubmit}>
          <div className="comm-input">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              defaultValue={comment.user_name}
              required
            />
          </div>
          <div className="comm-input">
            <label htmlFor="content">Comment: </label>
            <textarea
              name="content"
              rows="4"
              cols="60"
              defaultValue={comment.content}
              required
            ></textarea>
          </div>
          <div className="btn-panel">
            <button type="submit" className="begin">
              Submit
            </button>
            <button
              type="button"
              className="del-btn"
              onClick={this.handleClickCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    ) : (
      "Loading...."
    );
  }
}
