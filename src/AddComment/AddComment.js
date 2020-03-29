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
    const product = this.context.products.filter(
      p => Number(p.id) === Number(this.props.match.params.product_id)
    );

    newComment = { ...newComment, id: product[0].comments.length + 1 };

    console.log(`this is new comment:`, newComment);
    console.log(`this is product;`, product);
    console.log(product[0].comments);
  };

  handleClickCancel = () => {
    this.props.history.goBack();
  };

  render() {
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
              onChange={e => this.updateUserName(e.target.value)}
              required
            />
            <br />
            <label htmlFor="user-comment">Comment: </label>
            <textarea
              name="user-comment"
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
