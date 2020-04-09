import React from "react";
import ATContext from "../ATContext";
import config from "../config";
import "./EditComment.css";

export default class EditComment extends React.Component {
  static contextType = ATContext;

  state = {
    // initialFieldsSet: false,
    // id: "",
    // user_name: "",
    // content: "",
    // product_id: "",
    error: null,
  };

  // componentDidMount() {
  //   const comment = this.context.comments.find(
  //     (c) => Number(c.id) === Number(this.props.match.params.comment_id)
  //   );
  //   this.setState({
  //     id: comment.id,
  //     user_name: comment.user_name,
  //     content: comment.content,
  //     product_id: comment.product_id,
  //   });
  // }

  // componentDidUpdate() {
  //   const commentId = Number(this.props.match.params.comment_id);
  //   const comment = this.context.comments.find((c) => c.id === commentId);

  //   if (!this.state.initialFieldsSet && comment !== null) {
  //     this.setFieldsInState(comment);
  //   }
  // }

  // setFieldsInState = (comment) => {
  //   this.setState({
  //     initialFieldsSet: true,
  //     id: comment.id,
  //     user_name: comment.user_name,
  //     content: comment.content,
  //     product_id: comment.product_id,
  //   });
  // };

  // updateUserName(name) {
  //   this.setState({
  //     user_name: name,
  //   });
  // }

  // updateContent(content) {
  //   this.setState({
  //     content: content,
  //   });
  // }

  handleSubmit = (e) => {
    e.preventDefault();
    // let newComment = this.state;
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
    // if (!this.state.initialFieldsSet) {
    //   return <div>Comment loading...</div>;
    // }
    return comment ? (
      <div className="EditComment">
        <section>
          <form
            className="editCommentForm"
            onSubmit={this.handleSubmit}
            // onSubmit={(e) => {
            //   e.preventDefault();
            //   this.handleSubmit();
            // }}
          >
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              defaultValue={comment.user_name}
              // onChange={(e) => this.updateUserName(e.target.value)}
              required
            />
            <br />
            <label htmlFor="content">Comment: </label>
            <textarea
              name="content"
              defaultValue={comment.content}
              // onChange={(e) => this.updateContent(e.target.value)}
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
    ) : (
      "Loading...."
    );
  }
}
