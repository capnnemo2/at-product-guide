import React from "react";
import "./EditProduct.css";

// THIS WILL NEED TO PRE-FILL ONCE IT IS HOOKED UP TO A BACK-END
export default class AddProduct extends React.Component {
  handleClickCancel = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div className="AddProduct">
        <section>
          <form>
            <div>
              <label for="name">Product name:</label>
              <input type="text" name="name" id="name" required />
            </div>
            <fieldset>
              <legend>Materials:</legend>
              <label for="mesh">Mesh:</label>
              <input type="text" name="mesh" id="mesh" />
              <fieldset>
                <legend>Hard steel:</legend>
                <label for="three-eigths">3/8":</label>
                <input type="text" name="three-eigths" id="three-eigths" />
                <button type="button">Add field</button>
                <p>
                  Add field button should allow the user to add an additional
                  input field
                </p>
                <label for="quarter-inch">1/4":</label>
                <input type="text" name="quarter-inch" id="quarter-inch" />
              </fieldset>
              <fieldset>
                <legend>Soft steel:</legend>
                <label for="three-eigths">3/8":</label>
                <input type="text" name="three-eigths" id="three-eigths" />
                <button type="button">Add field</button>
                <p>
                  Add field button should allow the user to add an additional
                  input field
                </p>
              </fieldset>
            </fieldset>
            <fieldset>
              <legend>Prep bend:</legend>
              <div className="textarea__container">
                <label for="bends">Bend instructions:</label>
                <textarea name="bends" id="bends"></textarea>
              </div>
            </fieldset>
            <fieldset>
              <legend>Prep weld:</legend>
              <div className="textarea__container">
                <label for="prep-weld">Weld instructions:</label>
                <textarea name="prep-weld" id="prep-weld"></textarea>
              </div>
            </fieldset>
            <fieldset>
              {/* maybe there is a way for the input fields here to be part of an ordered list and the user can add additional steps */}
              <legend>Weld:</legend>
              <div className="textarea__container">
                <label for="weld">Weld instructions:</label>
                <textarea name="weld" id="weld"></textarea>
              </div>
            </fieldset>
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