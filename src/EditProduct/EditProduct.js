import React from "react";
import ATContext from "../ATContext";
import config from "../config";
import ValidationError from "../ValidationError/ValidationError";
import "./EditProduct.css";

export default class EditProduct extends React.Component {
  static contextType = ATContext;

  state = {
    error: null,
  };

  componentDidMount() {
    const productId = Number(this.props.match.params.product_id);
    const product = this.context.products.find((p) => p.id === productId);
    console.log(`product`, product);
    console.log(product.id);
  }

  // validation functions
  validateProductCode() {
    const newProductCode = this.context.product_code.toUpperCase();
    const existingCode = this.context.products.find(
      (p) => p.product_code === newProductCode.trim()
    );
    if (existingCode) {
      if (existingCode.id !== Number(this.props.match.params.product_id))
        return `${newProductCode.toUpperCase()} already exists`;
    }
  }

  validateProductName() {
    const newProductName = this.context.product_name.toUpperCase();
    const existingName = this.context.products.find(
      (p) => p.product_name.toUpperCase() === newProductName.trim()
    );
    if (existingName) {
      if (existingName.id !== Number(this.props.match.params.product_id))
        return `${newProductName} already exists`;
    }
  }

  // button handlers
  handleSubmit = (e) => {
    e.preventDefault();
    let newProduct = {};
    const { product_id } = this.props.match.params;

    newProduct.product_type = e.target.type.value;
    newProduct.product_code = e.target.code.value.toUpperCase();
    newProduct.product_name = e.target.name.value.trim();
    newProduct.hard_three_eighths = e.target.threeEighths
      .map(function (hte) {
        if (hte.measurements) {
          return hte.measurements;
        } else {
          return hte;
        }
      })
      .filter(Boolean);
    newProduct.hard_one_quarter = e.target.oneQuarter
      .map(function (hoq) {
        if (hoq.measurements) {
          return hoq.measurements;
        } else {
          return hoq;
        }
      })
      .filter(Boolean);
    newProduct.soft_three_eighths = e.target.softSteel
      .map(function (ste) {
        if (ste.measurements) {
          return ste.measurements;
        } else {
          return ste;
        }
      })
      .filter(Boolean);
    newProduct.mesh = e.target.mesh
      .map(function (m) {
        if (m.measurements) {
          return m.measurements;
        } else {
          return m;
        }
      })
      .filter(Boolean);
    newProduct.prep_bend = e.target.prepBend
      .map(function (pb) {
        if (pb.measurements) {
          return pb.measurements;
        } else {
          return pb;
        }
      })
      .filter(Boolean);
    newProduct.prep_weld = e.target.prepWeld
      .map(function (pw) {
        if (pw.measurements) {
          return pw.measurements;
        } else {
          return pw;
        }
      })
      .filter(Boolean);
    newProduct.weld = e.target.weld
      .map(function (w) {
        if (w.measurements) {
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
    console.log(`product`, product);

    console.log(`context`, this.context);

    return product ? (
      <div className="EditProduct">
        <section>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="code">Product code: </label>
              <input
                type="text"
                name="code"
                defaultValue={product.product_code}
                onChange={(e) => this.context.updateProductCode(e.target.value)}
                required
              />
              {<ValidationError message={codeError} />}
              <br />
              <label htmlFor="name">Product name: </label>
              <input
                type="text"
                name="name"
                defaultValue={product.product_name}
                onChange={(e) => this.context.updateProductName(e.target.value)}
                required
              />
              {<ValidationError message={nameError} />}
              <br />
              <label htmlFor="type">Product type: </label>
              <select
                name="type"
                defaultValue={product.product_type}
                onChange={(e) => this.context.updateProductType(e.target.value)}
                required
              >
                <option value="arbor">Arbor</option>
                <option value="trellis">Trellis</option>
                <option value="topiary">Topiary</option>
              </select>
            </div>
            <fieldset>
              <legend>Materials</legend>
              <label htmlFor="mesh">Mesh:</label>
              {product.mesh.map((mesh, idx) => (
                <div className="meshItem" key={idx}>
                  <input
                    type="text"
                    name="mesh"
                    placeholder={`mesh input #${idx + 1}`}
                    defaultValue={mesh}
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

                <label htmlFor="threeEighths">3/8": </label>
                {product.hard_three_eighths.map((three, idx) => (
                  <div className="hardThreeEighths" key={idx}>
                    <input
                      type="text"
                      name="threeEighths"
                      placeholder={`3/8" input #${idx + 1}`}
                      defaultValue={three}
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

                <label htmlFor="oneQuarter">1/4": </label>
                {product.hard_one_quarter.map((quarter, idx) => (
                  <div className="hardOneQuarter" key={idx}>
                    <input
                      type="text"
                      name="oneQuarter"
                      placeholder={`1/4" input #${idx + 1}`}
                      defaultValue={quarter}
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
                <label htmlFor="softSteel">3/8": </label>
                {product.soft_three_eighths.map((soft, idx) => (
                  <div className="softThreeEighths" key={idx}>
                    <input
                      type="text"
                      name="softSteel"
                      placeholder={`soft steel input #${idx + 1}`}
                      defaultValue={soft}
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
                {product.prep_bend.map((prepB, idx) => (
                  <div className="prepBendItem" key={idx}>
                    <textarea
                      name="prepBend"
                      placeholder={`prepBend input #${idx + 1}`}
                      defaultValue={prepB}
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
                {product.prep_weld.map((prepW, idx) => (
                  <div className="prepWeldItem" key={idx}>
                    <textarea
                      name="prepWeld"
                      placeholder={`prepWeld input #${idx + 1}`}
                      defaultValue={prepW}
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
                {product.weld.map((w, idx) => (
                  <div className="weldItem" key={idx}>
                    <textarea
                      name="weld"
                      placeholder={`weld input #${idx + 1}`}
                      defaultValue={w}
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
    ) : (
      "Loading...."
    );
  }
}
