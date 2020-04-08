import React from "react";
import ATContext from "../ATContext";
import config from "../config";
import "./AddComment.css";

export default class AddComment extends React.Component {
  static contextType = ATContext;

  state = {
    id: "",
    user_name: "",
    content: "",
    product_id: "",
    error: null,
  };

  componentDidMount() {
    this.setState({
      product_id: this.props.match.params.product_id,
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
    newComment = { ...newComment, id: this.context.comments.length + 1 };

    fetch(`${config.API_ENDPOINT}/comments`, {
      method: "POST",
      body: JSON.stringify(newComment),
      headers: {
        "content-type": "application/json",
        Authorization: `${config.API_KEY}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then((data) => {
        this.context.addComment(newComment);
        this.props.history.push(
          `/productDetails/${this.props.match.params.product_id}`
        );
      })
      .catch((error) => {
        this.setState({ error });
      });
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
              onChange={(e) => this.updateUserName(e.target.value)}
              required
            />
            <br />
            <label htmlFor="user-comment">Comment: </label>
            <textarea
              name="user-comment"
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
