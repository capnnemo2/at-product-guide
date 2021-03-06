import React from "react";
import ATContext from "../ATContext";
import config from "../config";
import ValidationError from "../ValidationError/ValidationError";
import "./EditProduct.css";

export default class EditProduct extends React.Component {
  static contextType = ATContext;

  state = {
    initialFieldsSet: false,
    id: "",
    product_code: "",
    product_name: "",
    product_type: "",
    mesh: [],
    newMesh: [],
    hard_three_eighths: [],
    hard_one_quarter: [],
    soft_three_eighths: [],
    prep_bend: [],
    prep_weld: [],
    weld: [],
    error: null,
  };

  componentDidMount() {
    const productId = Number(this.props.match.params.product_id);
    const product = this.context.products.find((p) => p.id === productId);
    if (product) {
      this.setState({
        id: product.id,
        product_code: product.product_code,
        product_name: product.product_name,
        product_type: product.product_type,
        mesh: product.mesh || [],
        hard_three_eighths: product.hard_three_eighths,
        hard_one_quarter: product.hard_one_quarter,
        soft_three_eighths: product.soft_three_eighths,
        prep_bend: product.prep_bend,
        prep_weld: product.prep_weld,
        weld: product.weld,
      });
    }
  }

  componentDidUpdate() {
    const productId = Number(this.props.match.params.product_id);
    const product = this.context.products.find((p) => p.id === productId);

    if (!this.state.initialFieldsSet && product != null) {
      this.setFieldsInState(product);
    }
  }

  setFieldsInState = (product) => {
    this.setState({
      initialFieldsSet: true,
      id: product.id,
      product_code: product.product_code,
      product_name: product.product_name,
      product_type: product.product_type,
      mesh: product.mesh || [],
      hard_three_eighths: product.hard_three_eighths,
      hard_one_quarter: product.hard_one_quarter,
      soft_three_eighths: product.soft_three_eighths,
      prep_bend: product.prep_bend,
      prep_weld: product.prep_weld,
      weld: product.weld,
    });
  };

  // update state for required fields
  updateProductCode(code) {
    this.setState({
      product_code: code,
    });
  }

  updateProductName(name) {
    this.setState({
      product_name: name,
    });
  }

  updateProductType(type) {
    this.setState({
      product_type: type,
    });
  }

  // validation functions
  validateProductCode() {
    const newProductCode = this.state.product_code.toUpperCase();
    const existingCode = this.context.products.find(
      (p) => p.product_code === newProductCode.trim()
    );
    if (existingCode) {
      if (existingCode.id !== this.state.id)
        return `${newProductCode.toUpperCase()} already exists`;
    }
  }

  validateProductName() {
    const newProductName = this.state.product_name.toUpperCase();
    const existingName = this.context.products.find(
      (p) => p.product_name.toUpperCase() === newProductName.trim()
    );
    if (existingName) {
      if (existingName.id !== this.state.id)
        return `${newProductName} already exists`;
    }
  }

  // MESH handlers
  handleMeshChange = (idx) => (e) => {
    const newMesh = this.state.mesh.map((mesh, sidx) => {
      if (idx !== sidx) return mesh;
      return { measurements: e.target.value };
    });
    this.setState({ mesh: newMesh });
  };

  handleAddMesh = () => {
    this.setState({
      mesh: this.state.mesh.concat(""),
    });
  };

  handleRemoveMesh = (idx) => () => {
    this.setState({
      mesh: this.state.mesh.filter((s, sidx) => idx !== sidx),
    });
  };

  // HARD STEEL 3/8" handlers
  handleThreeEighthsChange = (idx) => (e) => {
    const newThreeEighths = this.state.hard_three_eighths.map((three, sidx) => {
      if (idx !== sidx) return three;
      return { measurements: e.target.value };
    });
    this.setState({ hard_three_eighths: newThreeEighths });
  };

  handleAddThreeEighths = () => {
    this.setState({
      hard_three_eighths: this.state.hard_three_eighths.concat(""),
    });
  };

  handleRemoveThreeEighths = (idx) => () => {
    this.setState({
      hard_three_eighths: this.state.hard_three_eighths.filter(
        (s, sidx) => idx !== sidx
      ),
    });
  };

  // HARD STEEL 1/4" handlers
  handleOneQuarterChange = (idx) => (e) => {
    const newOneQuarter = this.state.hard_one_quarter.map((quarter, sidx) => {
      if (idx !== sidx) return quarter;
      return { measurements: e.target.value };
    });
    this.setState({ hard_one_quarter: newOneQuarter });
  };

  handleAddOneQuarter = () => {
    this.setState({
      hard_one_quarter: this.state.hard_one_quarter.concat(""),
    });
  };

  handleRemoveOneQuarter = (idx) => () => {
    this.setState({
      hard_one_quarter: this.state.hard_one_quarter.filter(
        (s, sidx) => idx !== sidx
      ),
    });
  };

  // SOFT STEEL 3/8" handlers
  handleSoftSteelChange = (idx) => (e) => {
    const newSoftThreeEighths = this.state.soft_three_eighths.map(
      (soft, sidx) => {
        if (idx !== sidx) return soft;
        return { measurements: e.target.value };
      }
    );
    this.setState({ soft_three_eighths: newSoftThreeEighths });
  };

  handleAddSoft = () => {
    this.setState({
      soft_three_eighths: this.state.soft_three_eighths.concat(""),
    });
  };

  handleRemoveSoft = (idx) => () => {
    this.setState({
      soft_three_eighths: this.state.soft_three_eighths.filter(
        (s, sidx) => idx !== sidx
      ),
    });
  };

  // PREPBEND handlers
  handlePrepBendChange = (idx) => (e) => {
    const newPrepBend = this.state.prep_bend.map((prepB, sidx) => {
      if (idx !== sidx) return prepB;
      return { measurements: e.target.value };
    });
    this.setState({ prep_bend: newPrepBend });
  };

  handleAddPrepBend = () => {
    this.setState({
      prep_bend: this.state.prep_bend.concat(""),
    });
  };

  handleRemovePrepBend = (idx) => () => {
    this.setState({
      prep_bend: this.state.prep_bend.filter((s, sidx) => idx !== sidx),
    });
  };

  // PREPWELD handlers
  handlePrepWeldChange = (idx) => (e) => {
    const newPrepWeld = this.state.prep_weld.map((prepW, sidx) => {
      if (idx !== sidx) return prepW;
      return { measurements: e.target.value };
    });
    this.setState({ prep_weld: newPrepWeld });
  };

  handleAddPrepWeld = () => {
    this.setState({
      prep_weld: this.state.prep_weld.concat(""),
    });
  };

  handleRemovePrepWeld = (idx) => () => {
    this.setState({
      prep_weld: this.state.prep_weld.filter((s, sidx) => idx !== sidx),
    });
  };

  // WELD handlers
  handleWeldChange = (idx) => (e) => {
    const newWeld = this.state.weld.map((w, sidx) => {
      if (idx !== sidx) return w;
      return { measurements: e.target.value };
    });
    this.setState({ weld: newWeld });
  };

  handleAddWeld = () => {
    this.setState({ weld: this.state.weld.concat("") });
  };

  handleRemoveWeld = (idx) => () => {
    this.setState({
      weld: this.state.weld.filter((s, sidx) => idx !== sidx),
    });
  };

  // button handlers
  handleSubmit = () => {
    let newProduct = this.state;
    const { product_id } = this.props.match.params;

    newProduct.product_code = newProduct.product_code.toUpperCase();
    newProduct.product_name = newProduct.product_name.trim();
    newProduct.hard_three_eighths = newProduct.hard_three_eighths
      .map(function (hte) {
        if (hte.hasOwnProperty("measurements")) {
          return hte.measurements;
        } else {
          return hte;
        }
      })
      .filter(Boolean);
    newProduct.hard_one_quarter = newProduct.hard_one_quarter
      .map(function (hoq) {
        if (hoq.hasOwnProperty("measurements")) {
          return hoq.measurements;
        } else {
          return hoq;
        }
      })
      .filter(Boolean);
    newProduct.soft_three_eighths = newProduct.soft_three_eighths
      .map(function (ste) {
        if (ste.hasOwnProperty("measurements")) {
          return ste.measurements;
        } else {
          return ste;
        }
      })
      .filter(Boolean);
    newProduct.mesh = newProduct.mesh
      .map(function (m) {
        if (m.hasOwnProperty("measurements")) {
          return m.measurements;
        } else {
          return m;
        }
      })
      .filter(Boolean);
    newProduct.prep_bend = newProduct.prep_bend
      .map(function (pb) {
        if (pb.hasOwnProperty("measurements")) {
          return pb.measurements;
        } else {
          return pb;
        }
      })
      .filter(Boolean);
    newProduct.prep_weld = newProduct.prep_weld
      .map(function (pw) {
        if (pw.hasOwnProperty("measurements")) {
          return pw.measurements;
        } else {
          return pw;
        }
      })
      .filter(Boolean);
    newProduct.weld = newProduct.weld
      .map(function (w) {
        if (w.hasOwnProperty("measurements")) {
          return w.measurements;
        } else {
          return w;
        }
      })
      .filter(Boolean);

    fetch(`${config.API_ENDPOINT}/products/${product_id}`, {
      method: "PATCH",
      body: JSON.stringify(newProduct),
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
      .then(() => {
        this.context.updateProduct(newProduct, newProduct.id);
      })
      .catch((error) => {
        this.setState({ error });
      });
    this.props.history.push(`/productDetails/${newProduct.id}`);
  };

  handleClickCancel = () => {
    this.props.history.goBack();
  };

  render() {
    const productId = Number(this.props.match.params.product_id);
    const product = this.context.products.find((p) => p.id === productId);
    const codeError = this.validateProductCode();
    const nameError = this.validateProductName();

    if (!this.state.initialFieldsSet) {
      return <div>Product loading...</div>;
    }

    return product ? (
      <div className="EditProduct">
        <h2>Edit Product</h2>
        <form
          onSubmit={(e) => {
            if (
              window.confirm(
                `Are you sure you want to permanently edit this product? (If this is not a test product, please don't edit it! Thank you!)`
              )
            ) {
              e.preventDefault();
              this.handleSubmit();
            } else {
              alert(`Whew, that was close!`);
            }
          }}
        >
          <div className="required-fields">
            <label htmlFor="code">Product code: </label>
            <input
              type="text"
              name="code"
              size="8"
              value={this.state.product_code}
              onChange={(e) => this.updateProductCode(e.target.value)}
              required
            />
            {<ValidationError message={codeError} />}
            <br />
            <label htmlFor="name">Product name: </label>
            <input
              type="text"
              name="name"
              size="25"
              value={this.state.product_name}
              onChange={(e) => this.updateProductName(e.target.value)}
              required
            />
            {<ValidationError message={nameError} />}
            <br />
            <label htmlFor="type">Product type: </label>
            <select
              name="type"
              value={this.state.product_type}
              onChange={(e) => this.updateProductType(e.target.value)}
              required
            >
              <option value="arbor">Arbor</option>
              <option value="trellis">Trellis</option>
              <option value="topiary">Topiary</option>
            </select>
          </div>

          <div className="non-required">
            <fieldset>
              <legend>Materials</legend>
              <label htmlFor="mesh">Mesh:</label>
              {this.state.mesh.map((mesh, idx) => (
                <div className="meshItem" key={idx}>
                  <input
                    type="text"
                    name="mesh"
                    size="35"
                    placeholder={`mesh input #${idx + 1}`}
                    defaultValue={mesh}
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
                <legend>Hard steel</legend>

                <label htmlFor="three-eighths">3/8": </label>
                {this.state.hard_three_eighths.map((three, idx) => (
                  <div className="hardThreeEighths" key={idx}>
                    <input
                      type="text"
                      name="three-eighths"
                      size="35"
                      placeholder={`3/8" input #${idx + 1}`}
                      defaultValue={three}
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
                {this.state.hard_one_quarter.map((quarter, idx) => (
                  <div className="hardOneQuarter" key={idx}>
                    <input
                      type="text"
                      name="quarter-inch"
                      size="35"
                      placeholder={`1/4" input #${idx + 1}`}
                      defaultValue={quarter}
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
                <legend>Soft steel</legend>
                <label htmlFor="soft-steel">3/8": </label>
                {this.state.soft_three_eighths.map((soft, idx) => (
                  <div className="softThreeEighths" key={idx}>
                    <input
                      type="text"
                      name="soft-steel"
                      size="35"
                      placeholder={`soft steel input #${idx + 1}`}
                      defaultValue={soft}
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
              <legend>Prep bend</legend>
              <div className="textarea__container">
                <label htmlFor="prepBend">Bend instructions:</label>
                {this.state.prep_bend.map((prepB, idx) => (
                  <div className="prepBendItem" key={idx}>
                    <textarea
                      name="prepBend"
                      placeholder={`prepBend input #${idx + 1}`}
                      defaultValue={prepB}
                      onChange={this.handlePrepBendChange(idx)}
                    ></textarea>
                    <button
                      type="button"
                      onClick={this.handleRemovePrepBend(idx)}
                    >
                      -
                    </button>
                  </div>
                ))}
                <button type="button" onClick={this.handleAddPrepBend}>
                  +
                </button>
              </div>
            </fieldset>
            <fieldset>
              <legend>Prep weld</legend>
              <div className="textarea__container">
                <label htmlFor="prep-weld">Prep weld instructions:</label>
                {this.state.prep_weld.map((prepW, idx) => (
                  <div className="prepWeldItem" key={idx}>
                    <textarea
                      name="prepWeld"
                      placeholder={`prepWeld input #${idx + 1}`}
                      defaultValue={prepW}
                      onChange={this.handlePrepWeldChange(idx)}
                    ></textarea>
                    <button
                      type="button"
                      onClick={this.handleRemovePrepWeld(idx)}
                    >
                      -
                    </button>
                  </div>
                ))}
                <button type="button" onClick={this.handleAddPrepWeld}>
                  +
                </button>
              </div>
            </fieldset>
            <fieldset>
              <legend>Weld</legend>
              <div className="textarea__container">
                <label htmlFor="weld">Weld instructions:</label>
                {this.state.weld.map((w, idx) => (
                  <div className="weldItem" key={idx}>
                    <textarea
                      name="weld"
                      placeholder={`weld input #${idx + 1}`}
                      defaultValue={w}
                      onChange={this.handleWeldChange(idx)}
                    ></textarea>
                    <button type="button" onClick={this.handleRemoveWeld(idx)}>
                      -
                    </button>
                  </div>
                ))}
                <button type="button" onClick={this.handleAddWeld}>
                  +
                </button>
              </div>
            </fieldset>
          </div>

          <div className="btn-panel">
            <button
              type="submit"
              className="begin"
              disabled={
                this.validateProductCode() || this.validateProductName()
              }
            >
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
