import React from "react";
import ATContext from "../ATContext";
import config from "../config";
import "./EditComment.css";

export default class EditComment extends React.Component {
  static contextType = ATContext;

  state = {
    id: "",
    user_name: "",
    content: "",
    product_id: "",
    error: null,
  };

  componentDidMount() {
    const comment = this.context.comments.find(
      (c) => Number(c.id) === Number(this.props.match.params.comment_id)
    );

    this.setState({
      id: comment.id,
      user_name: comment.user_name,
      content: comment.content,
      product_id: comment.product_id,
    });
  }

  updateUserName(name) {
    this.setState({
      user_name: name,
    });
  }

  updateContent(content) {
    this.setState({
      content: content,
    });
  }

  handleSubmit = () => {
    let newComment = this.state;
    const { comment_id } = this.props.match.params;

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
    this.props.history.push(`/productDetails/${this.state.product_id}`);
  };

  handleClickCancel = () => {
    this.props.history.goBack();
  };

  render() {
    console.log(this.state);
    return (
      <div className="AddComment">
        <section>
          <form
            className="addCommentForm"
            onSubmit={(e) => {
              e.preventDefault();
              this.handleSubmit();
            }}
          >
            <label htmlFor="user-name">Name: </label>
            <input
              type="text"
              name="user-name"
              value={this.state.user_name}
              onChange={(e) => this.updateUserName(e.target.value)}
              required
            />
            <br />
            <label htmlFor="user-comment">Comment: </label>
            <textarea
              name="user-comment"
              value={this.state.content}
              onChange={(e) => this.updateContent(e.target.value)}
              required
            ></textarea>
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
