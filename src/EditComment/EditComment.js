import React from "react";
import ATContext from "../ATContext";
import "./EditComment.css";

export default class EditComment extends React.Component {
  static contextType = ATContext;

  state = {
    id: "",
    user_name: "",
    content: "",
    productId: ""
  };

  componentDidMount() {
    const comment = this.context.comments.find(
      c => Number(c.id) === Number(this.props.match.params.comment_id)
    );

    this.setState({
      id: comment.id,
      user_name: comment.user_name,
      content: comment.content,
      productId: comment.productId
    });
  }

  updateUserName(name) {
    this.setState({
      user_name: name
    });
  }

  updateContent(content) {
    this.setState({
      content: content
    });
  }

  handleSubmit = () => {
    let newComment = this.state;
    console.log(newComment);
    this.context.updateComment(newComment, newComment.id);
    this.props.history.push(`/productDetails/${this.state.productId}`);
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
            onSubmit={e => {
              e.preventDefault();
              this.handleSubmit();
            }}
          >
            <label htmlFor="user-name">Name: </label>
            <input
              type="text"
              name="user-name"
              value={this.state.user_name}
              onChange={e => this.updateUserName(e.target.value)}
              required
            />
            <br />
            <label htmlFor="user-comment">Comment: </label>
            <textarea
              name="user-comment"
              value={this.state.content}
              onChange={e => this.updateContent(e.target.value)}
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
