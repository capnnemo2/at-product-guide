import React from "react";
import "./AddProduct.css";

export default class AddProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mesh: [{ measurements: "" }]
    };
  }

  // MESH
  handleMeshChange = idx => e => {
    const newMesh = this.state.mesh.map((mesh, sidx) => {
      if (idx !== sidx) return mesh;
      return { ...mesh, measurements: e.target.value };
    });
    this.setState({ mesh: newMesh });
  };

  handleAddMesh = () => {
    this.setState({
      mesh: this.state.mesh.concat([{ measurements: "" }])
    });
  };

  handleRemoveMesh = idx => () => {
    this.setState({
      mesh: this.state.mesh.filter((s, sidx) => idx !== sidx)
    });
  };

  // HARD STEEL 3/8"

  handleClickCancel = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div className="AddProduct">
        <section>
          <form>
            <div>
              <label htmlFor="name">Product name: </label>
              <input type="text" name="name" id="name" required />
            </div>
            <fieldset>
              <legend>Materials:</legend>
              <label htmlFor="mesh">Mesh: </label>
              {this.state.mesh.map((mesh, idx) => (
                <div className="meshItem">
                  <input
                    type="text"
                    name="mesh"
                    placeholder={`mesh input #${idx + 1}`}
                    value={mesh.measurements}
                    onChange={this.handleMeshChange(idx)}
                  />
                  <button type="button" onClick={this.handleRemoveMesh(idx)}>
                    -
                  </button>
                </div>
              ))}
              <button type="button" onClick={this.handleAddMesh}>
                +
              </button>
              <fieldset>
                <legend>Hard steel:</legend>
                <label htmlFor="three-eigths">3/8": </label>
                <input type="text" name="three-eigths" id="three-eigths" />
                <button type="button">Add field</button>
                <p>
                  Add field button should allow the user to add an additional
                  input field
                </p>
                <label htmlFor="quarter-inch">1/4": </label>
                <input type="text" name="quarter-inch" id="quarter-inch" />
                <button type="button">Add field</button>
              </fieldset>
              <fieldset>
                <legend>Soft steel:</legend>
                <label htmlFor="three-eigths">3/8": </label>
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
                <label htmlFor="bends">Bend instructions:</label>
                <textarea name="bends" id="bends"></textarea>
              </div>
            </fieldset>
            <fieldset>
              <legend>Prep weld:</legend>
              <div className="textarea__container">
                <label htmlFor="prep-weld">Weld instructions:</label>
                <textarea name="prep-weld" id="prep-weld"></textarea>
              </div>
            </fieldset>
            <fieldset>
              {/* maybe there is a way for the input fields here to be part of an ordered list and the user can add additional steps */}
              <legend>Weld:</legend>
              <div className="textarea__container">
                <label htmlFor="weld">Weld instructions:</label>
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
