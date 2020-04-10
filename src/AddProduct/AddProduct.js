import React from "react";
import ATContext from "../ATContext";
import config from "../config";
import ValidationError from "../ValidationError/ValidationError";
import "./AddProduct.css";

export default class AddProduct extends React.Component {
  static contextType = ATContext;

  state = {
    // id: "",
    // product_code: "",
    // product_name: "",
    // product_type: "",
    // // image: {
    // //   src: "/pics/shark.jpg",
    // //   alt: "new product",
    // // },
    // mesh: [],
    // hard_three_eighths: [],
    // hard_one_quarter: [],
    // soft_three_eighths: [],
    // prep_bend: [],
    // prep_weld: [],
    // weld: [],
    error: null,
  };

  // update state for required fields
  // updateProductCode(code) {
  //   this.setState({
  //     product_code: code,
  //   });
  // }

  // updateProductName(name) {
  //   this.setState({
  //     product_name: name,
  //     // image: {
  //     //   alt: name,
  //     //   src: "/pics/shark.jpg",
  //     // },
  //   });
  // }

  // updateProductType(type) {
  //   this.setState({
  //     product_type: type,
  //   });
  // }

  // validation functions
  validateProductCode() {
    const newProductCode = this.context.product_code.toUpperCase();
    const existingCode = this.context.products.find(
      (p) => p.product_code === newProductCode.trim()
    );
    if (existingCode) {
      return `${newProductCode.toUpperCase()} already exists`;
    }
  }

  validateProductName() {
    const newProductName = this.context.product_name.toUpperCase();
    const existingName = this.context.products.find(
      (p) => p.product_name.toUpperCase() === newProductName.trim()
    );
    if (existingName) {
      return `${newProductName} already exists`;
    }
  }

  // MESH handlers
  // handleMeshChange = (idx) => (e) => {
  //   const newMesh = this.state.mesh.map((mesh, sidx) => {
  //     if (idx !== sidx) return mesh;
  //     return { ...mesh, measurements: e.target.value };
  //   });
  //   this.setState({ mesh: newMesh });
  // };

  // handleAddMesh = () => {
  //   this.setState({
  //     mesh: this.state.mesh.concat([{ measurements: "" }]),
  //   });
  // };

  // handleRemoveMesh = (idx) => () => {
  //   this.setState({
  //     mesh: this.state.mesh.filter((s, sidx) => idx !== sidx),
  //   });
  // };

  // HARD STEEL 3/8" handlers
  // handleThreeEighthsChange = (idx) => (e) => {
  //   const newThreeEighths = this.state.hard_three_eighths.map((three, sidx) => {
  //     if (idx !== sidx) return three;
  //     return { ...three, measurements: e.target.value };
  //   });
  //   this.setState({ hard_three_eighths: newThreeEighths });
  // };

  // handleAddThreeEighths = () => {
  //   this.setState({
  //     hard_three_eighths: this.state.hard_three_eighths.concat([
  //       { measurements: "" },
  //     ]),
  //   });
  // };

  // handleRemoveThreeEighths = (idx) => () => {
  //   this.setState({
  //     hard_three_eighths: this.state.hard_three_eighths.filter(
  //       (s, sidx) => idx !== sidx
  //     ),
  //   });
  // };

  // HARD STEEL 1/4" handlers
  // handleOneQuarterChange = (idx) => (e) => {
  //   const newOneQuarter = this.state.hard_one_quarter.map((quarter, sidx) => {
  //     if (idx !== sidx) return quarter;
  //     return { ...quarter, measurements: e.target.value };
  //   });
  //   this.setState({ hard_one_quarter: newOneQuarter });
  // };

  // handleAddOneQuarter = () => {
  //   this.setState({
  //     hard_one_quarter: this.state.hard_one_quarter.concat([
  //       { measurements: "" },
  //     ]),
  //   });
  // };

  // handleRemoveOneQuarter = (idx) => () => {
  //   this.setState({
  //     hard_one_quarter: this.state.hard_one_quarter.filter(
  //       (s, sidx) => idx !== sidx
  //     ),
  //   });
  // };

  // SOFT STEEL 3/8" handlers
  // handleSoftSteelChange = (idx) => (e) => {
  //   const newSoftThreeEighths = this.state.soft_three_eighths.map(
  //     (soft, sidx) => {
  //       if (idx !== sidx) return soft;
  //       return { ...soft, measurements: e.target.value };
  //     }
  //   );
  //   this.setState({ soft_three_eighths: newSoftThreeEighths });
  // };

  // handleAddSoft = () => {
  //   this.setState({
  //     soft_three_eighths: this.state.soft_three_eighths.concat([
  //       { measurements: "" },
  //     ]),
  //   });
  // };

  // handleRemoveSoft = (idx) => () => {
  //   this.setState({
  //     soft_three_eighths: this.state.soft_three_eighths.filter(
  //       (s, sidx) => idx !== sidx
  //     ),
  //   });
  // };

  // PREPBEND handlers
  // handlePrepBendChange = (idx) => (e) => {
  //   const newPrepBend = this.state.prep_bend.map((prepB, sidx) => {
  //     if (idx !== sidx) return prepB;
  //     return { ...prepB, measurements: e.target.value };
  //   });
  //   this.setState({ prep_bend: newPrepBend });
  // };

  // handleAddPrepBend = () => {
  //   this.setState({
  //     prep_bend: this.state.prep_bend.concat([{ measurements: "" }]),
  //   });
  // };

  // handleRemovePrepBend = (idx) => () => {
  //   this.setState({
  //     prep_bend: this.state.prep_bend.filter((s, sidx) => idx !== sidx),
  //   });
  // };

  // PREPWELD handlers
  // handlePrepWeldChange = (idx) => (e) => {
  //   const newPrepWeld = this.state.prep_weld.map((prepW, sidx) => {
  //     if (idx !== sidx) return prepW;
  //     return { ...prepW, measurements: e.target.value };
  //   });
  //   this.setState({ prep_weld: newPrepWeld });
  // };

  // handleAddPrepWeld = () => {
  //   this.setState({
  //     prep_weld: this.state.prep_weld.concat([{ measurements: "" }]),
  //   });
  // };

  // handleRemovePrepWeld = (idx) => () => {
  //   this.setState({
  //     prep_weld: this.state.prep_weld.filter((s, sidx) => idx !== sidx),
  //   });
  // };

  // WELD handlers
  // handleWeldChange = (idx) => (e) => {
  //   const newWeld = this.state.weld.map((w, sidx) => {
  //     if (idx !== sidx) return w;
  //     return { ...w, measurements: e.target.value };
  //   });
  //   this.setState({ weld: newWeld });
  // };

  // handleAddWeld = () => {
  //   this.setState({ weld: this.state.weld.concat([{ measurements: "" }]) });
  // };

  // handleRemoveWeld = (idx) => () => {
  //   this.setState({
  //     weld: this.state.weld.filter((s, sidx) => idx !== sidx),
  //   });
  // };

  // button handlers
  handleSubmit = () => {
    let newProduct = {};
    newProduct.product_code = this.context.product_code.toUpperCase();
    newProduct.product_name = this.context.product_name.trim();
    newProduct.product_type = this.context.product_type;
    newProduct.hard_three_eighths = this.context.hard_three_eighths
      .map((hte) => hte.measurements)
      .filter(Boolean);
    newProduct.hard_one_quarter = this.context.hard_one_quarter
      .map((hoq) => hoq.measurements)
      .filter(Boolean);
    newProduct.soft_three_eighths = this.context.soft_three_eighths
      .map((ste) => ste.measurements)
      .filter(Boolean);
    newProduct.mesh = this.context.mesh
      .map((m) => m.measurements)
      .filter(Boolean);
    newProduct.prep_bend = this.context.prep_bend
      .map((pb) => pb.measurements)
      .filter(Boolean);
    newProduct.prep_weld = this.context.prep_weld
      .map((pw) => pw.measurements)
      .filter(Boolean);
    newProduct.weld = this.context.weld
      .map((w) => w.measurements)
      .filter(Boolean);

    console.log(newProduct);

    fetch(`${config.API_ENDPOINT}/products`, {
      method: "POST",
      body: JSON.stringify(newProduct),
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
        newProduct.id = data.id;
        this.context.addProduct(newProduct);
        this.context.clearProduct();
        this.props.history.push("/home");
      })
      .catch((error) => {
        this.setState({ error });
      });
  };

  handleClickCancel = () => {
    this.props.history.goBack();
  };

  render() {
    const codeError = this.validateProductCode();
    const nameError = this.validateProductName();
    return (
      <div className="AddProduct">
        <section>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              this.handleSubmit();
            }}
          >
            <div>
              <label htmlFor="code">Product code: </label>
              <input
                type="text"
                name="code"
                onChange={(e) => this.context.updateProductCode(e.target.value)}
                required
              />
              {<ValidationError message={codeError} />}
              <br />
              <label htmlFor="name">Product name: </label>
              <input
                type="text"
                name="name"
                onChange={(e) => this.context.updateProductName(e.target.value)}
                required
              />
              {<ValidationError message={nameError} />}
              <br />
              <label htmlFor="type">Product type: </label>
              <select
                name="type"
                onChange={(e) => this.context.updateProductType(e.target.value)}
                required
              >
                <option value="">Choose one</option>
                <option value="arbor">Arbor</option>
                <option value="trellis">Trellis</option>
                <option value="topiary">Topiary</option>
              </select>
            </div>
            <fieldset>
              <legend>Materials</legend>
              <label htmlFor="mesh">Mesh:</label>
              {this.context.mesh.map((mesh, idx) => (
                <div className="meshItem" key={idx}>
                  <input
                    type="text"
                    name="mesh"
                    placeholder={`mesh input #${idx + 1}`}
                    value={mesh.measurements}
                    onChange={this.context.handleMeshChange(idx)}
                  />
                  <button
                    type="button"
                    onClick={this.context.handleRemoveMesh(idx)}
                  >
                    -
                  </button>
                </div>
              ))}
              <button type="button" onClick={this.context.handleAddMesh}>
                +
              </button>
              <fieldset>
                <legend>Hard steel</legend>

                <label htmlFor="three-eighths">3/8": </label>
                {this.context.hard_three_eighths.map((three, idx) => (
                  <div className="hardThreeEighths" key={idx}>
                    <input
                      type="text"
                      name="three-eighths"
                      placeholder={`3/8" input #${idx + 1}`}
                      value={three.measurements}
                      onChange={this.context.handleThreeEighthsChange(idx)}
                    />
                    <button
                      type="button"
                      onClick={this.context.handleRemoveThreeEighths(idx)}
                    >
                      -
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={this.context.handleAddThreeEighths}
                >
                  +
                </button>

                <br />

                <label htmlFor="quarter-inch">1/4": </label>
                {this.context.hard_one_quarter.map((quarter, idx) => (
                  <div className="hardOneQuarter" key={idx}>
                    <input
                      type="text"
                      name="quarter-inch"
                      placeholder={`1/4" input #${idx + 1}`}
                      value={quarter.measurements}
                      onChange={this.context.handleOneQuarterChange(idx)}
                    />
                    <button
                      type="button"
                      onClick={this.context.handleRemoveOneQuarter(idx)}
                    >
                      -
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={this.context.handleAddOneQuarter}
                >
                  +
                </button>
              </fieldset>
              <fieldset>
                <legend>Soft steel</legend>
                <label htmlFor="soft-steel">3/8": </label>
                {this.context.soft_three_eighths.map((soft, idx) => (
                  <div className="softThreeEighths" key={idx}>
                    <input
                      type="text"
                      name="soft-steel"
                      placeholder={`soft steel input #${idx + 1}`}
                      value={soft.measurements}
                      onChange={this.context.handleSoftSteelChange(idx)}
                    />
                    <button
                      type="button"
                      onClick={this.context.handleRemoveSoft(idx)}
                    >
                      -
                    </button>
                  </div>
                ))}

                <button type="button" onClick={this.context.handleAddSoft}>
                  +
                </button>
              </fieldset>
            </fieldset>
            <fieldset>
              <legend>Prep bend</legend>
              <div className="textarea__container">
                <label htmlFor="prepBend">Bend instructions:</label>
                {this.context.prep_bend.map((prepB, idx) => (
                  <div className="prepBendItem" key={idx}>
                    <textarea
                      name="prepBend"
                      placeholder={`prepBend input #${idx + 1}`}
                      value={prepB.measurements}
                      onChange={this.context.handlePrepBendChange(idx)}
                    ></textarea>
                    <button
                      type="button"
                      onClick={this.context.handleRemovePrepBend(idx)}
                    >
                      -
                    </button>
                  </div>
                ))}
                <button type="button" onClick={this.context.handleAddPrepBend}>
                  +
                </button>
              </div>
            </fieldset>
            <fieldset>
              <legend>Prep weld</legend>
              <div className="textarea__container">
                <label htmlFor="prep-weld">Prep weld instructions:</label>
                {this.context.prep_weld.map((prepW, idx) => (
                  <div className="prepWeldItem" key={idx}>
                    <textarea
                      name="prepWeld"
                      placeholder={`prepWeld input #${idx + 1}`}
                      value={prepW.measurements}
                      onChange={this.context.handlePrepWeldChange(idx)}
                    ></textarea>
                    <button
                      type="button"
                      onClick={this.context.handleRemovePrepWeld(idx)}
                    >
                      -
                    </button>
                  </div>
                ))}
                <button type="button" onClick={this.context.handleAddPrepWeld}>
                  +
                </button>
              </div>
            </fieldset>
            <fieldset>
              <legend>Weld</legend>
              <div className="textarea__container">
                <label htmlFor="weld">Weld instructions:</label>
                {this.context.weld.map((w, idx) => (
                  <div className="weldItem" key={idx}>
                    <textarea
                      name="weld"
                      placeholder={`weld input #${idx + 1}`}
                      value={w.measurements}
                      onChange={this.context.handleWeldChange(idx)}
                    ></textarea>
                    <button
                      type="button"
                      onClick={this.context.handleRemoveWeld(idx)}
                    >
                      -
                    </button>
                  </div>
                ))}
                <button type="button" onClick={this.context.handleAddWeld}>
                  +
                </button>
              </div>
            </fieldset>
            <button
              type="submit"
              disabled={
                this.validateProductCode() || this.validateProductName()
              }
            >
              Submit
            </button>
            <button type="button" onClick={this.handleClickCancel}>
              Cancel
            </button>
          </form>
        </section>
      </div>
    );
  }
}
