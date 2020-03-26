import React from "react";
import "./AddProduct.css";

export default class AddProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mesh: [{ measurements: "" }],
      hardThreeEighths: [{ measurements: "" }],
      hardOneQuarter: [{ measurements: "" }],
      softThreeEighths: []
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
  handleThreeEighthsChange = idx => e => {
    const newThreeEighths = this.state.hardThreeEighths.map((three, sidx) => {
      if (idx !== sidx) return three;
      return { ...three, measurements: e.target.value };
    });
    this.setState({ hardThreeEighths: newThreeEighths });
  };

  handleAddThreeEighths = () => {
    this.setState({
      hardThreeEighths: this.state.hardThreeEighths.concat([
        { measurements: "" }
      ])
    });
  };

  handleRemoveThreeEighths = idx => () => {
    this.setState({
      hardThreeEighths: this.state.hardThreeEighths.filter(
        (s, sidx) => idx !== sidx
      )
    });
  };

  // HARD STEEL 1/4"
  handleOneQuarterChange = idx => e => {
    const newOneQuarter = this.state.hardOneQuarter.map((quarter, sidx) => {
      if (idx !== sidx) return quarter;
      return { ...quarter, measurements: e.target.value };
    });
    this.setState({ hardOneQuarter: newOneQuarter });
  };

  handleAddOneQuarter = () => {
    this.setState({
      hardOneQuarter: this.state.hardOneQuarter.concat([{ measurements: "" }])
    });
  };

  handleRemoveOneQuarter = idx => () => {
    this.setState({
      hardOneQuarter: this.state.hardOneQuarter.filter(
        (s, sidx) => idx !== sidx
      )
    });
  };

  // SOFT STEEL 3/8"

  handleSoftSteelChange = idx => e => {
    const newSoftThreeEighths = this.state.softThreeEighths.map(
      (soft, sidx) => {
        if (idx !== sidx) return soft;
        return { ...soft, measurements: e.target.value };
      }
    );
    this.setState({ softThreeEighths: newSoftThreeEighths });
  };

  handleAddSoft = () => {
    this.setState({
      softThreeEighths: this.state.softThreeEighths.concat([
        { measurements: "" }
      ])
    });
  };

  handleRemoveSoft = idx => () => {
    this.setState({
      softThreeEighths: this.state.softThreeEighths.filter(
        (s, sidx) => idx !== sidx
      )
    });
  };

  // CLICK CANCEL
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
              <br />
              <label htmlFor="code">Product code: </label>
              <input type="text" name="code" id="code" required />
            </div>
            <fieldset>
              <legend>Materials:</legend>
              <label htmlFor="mesh">Mesh: </label>
              {this.state.mesh.map((mesh, idx) => (
                <div className="meshItem" key={idx}>
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

                <label htmlFor="three-eighths">3/8": </label>
                {this.state.hardThreeEighths.map((three, idx) => (
                  <div className="hardThreeEighths" key={idx}>
                    <input
                      type="text"
                      name="three-eighths"
                      placeholder={`3/8" input #${idx + 1}`}
                      value={three.measurements}
                      onChange={this.handleThreeEighthsChange(idx)}
                    />
                    <button
                      type="button"
                      onClick={this.handleRemoveThreeEighths(idx)}
                    >
                      -
                    </button>
                  </div>
                ))}
                <button type="button" onClick={this.handleAddThreeEighths}>
                  +
                </button>

                <br />

                <label htmlFor="quarter-inch">1/4": </label>
                {this.state.hardOneQuarter.map((quarter, idx) => (
                  <div className="hardOneQuarter" key={idx}>
                    <input
                      type="text"
                      name="quarter-inch"
                      placeholder={`1/4" input #${idx}`}
                      value={quarter.measurements}
                      onChange={this.handleOneQuarterChange(idx)}
                    />
                    <button
                      type="button"
                      onClick={this.handleRemoveOneQuarter(idx)}
                    >
                      -
                    </button>
                  </div>
                ))}
                <button type="button" onClick={this.handleAddOneQuarter}>
                  +
                </button>
              </fieldset>
              <fieldset>
                <legend>Soft steel:</legend>
                <label htmlFor="soft-steel">3/8": </label>
                {this.state.softThreeEighths.map((soft, idx) => (
                  <div className="softThreeEighths" key={idx}>
                    <input
                      type="text"
                      name="soft-steel"
                      placeholder={`soft steel input #${idx}`}
                      value={soft.measurements}
                      onChange={this.handleSoftSteelChange(idx)}
                    />
                    <button type="button" onClick={this.handleRemoveSoft(idx)}>
                      -
                    </button>
                  </div>
                ))}

                <button type="button" onClick={this.handleAddSoft}>
                  +
                </button>
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
