import React from "react";
import ATContext from "../ATContext";
import "./EditProduct.css";

export default class EditProduct extends React.Component {
  static contextType = ATContext;

  state = {
    id: "",
    productCode: "",
    productName: "",
    productType: "",
    image: {
      src: "/pics/shark.jpg",
      alt: "new product"
    },
    mesh: [],
    hardThreeEighths: [],
    hardOneQuarter: [],
    softThreeEighths: [],
    prepBend: [],
    prepWeld: [],
    weld: [],
    comments: []
  };

  componentDidMount() {
    const productId = Number(this.props.match.params.product_id);
    const product = this.context.products.find(p => p.id === productId);
    this.setState({
      id: product.id,
      productCode: product.productCode,
      productName: product.productName,
      productType: product.productType,
      mesh: product.mesh || [],
      hardThreeEighths: product.hardSteel.threeEighths,
      hardOneQuarter: product.hardSteel.oneQuarter,
      softThreeEighths: product.softSteel.threeEighths,
      prepBend: product.prepBend,
      prepWeld: product.prepWeld,
      weld: product.weld,
      comments: product.comments,
      image: {
        src: product.image.src,
        alt: product.productName
      }
    });
  }

  updateProductCode(code) {
    this.setState({
      productCode: code
    });
  }

  updateProductName(name) {
    this.setState({
      productName: name,
      image: {
        alt: name
      }
    });
  }

  updateProductType(type) {
    this.setState({
      productType: type
    });
  }

  // MESH handlers
  handleMeshChange = idx => e => {
    const newMesh = this.state.mesh.map((mesh, sidx) => {
      if (idx !== sidx) return mesh;
      return { ...mesh, measurements: e.target.value };
    });
    this.setState({ mesh: newMesh });
  };

  // changed concat to '' rather than [{measurements: ''}] for some reason this works...?
  handleAddMesh = () => {
    this.setState({
      mesh: this.state.mesh.concat("")
    });
  };

  handleRemoveMesh = idx => () => {
    this.setState({
      mesh: this.state.mesh.filter((s, sidx) => idx !== sidx)
    });
  };

  // HARD STEEL 3/8" handlers
  handleThreeEighthsChange = idx => e => {
    const newThreeEighths = this.state.hardThreeEighths.map((three, sidx) => {
      if (idx !== sidx) return three;
      return { ...three, measurements: e.target.value };
    });
    this.setState({ hardThreeEighths: newThreeEighths });
  };

  handleAddThreeEighths = () => {
    this.setState({
      hardThreeEighths: this.state.hardThreeEighths.concat("")
    });
  };

  handleRemoveThreeEighths = idx => () => {
    this.setState({
      hardThreeEighths: this.state.hardThreeEighths.filter(
        (s, sidx) => idx !== sidx
      )
    });
  };

  // HARD STEEL 1/4" handlers
  handleOneQuarterChange = idx => e => {
    const newOneQuarter = this.state.hardOneQuarter.map((quarter, sidx) => {
      if (idx !== sidx) return quarter;
      return { ...quarter, measurements: e.target.value };
    });
    this.setState({ hardOneQuarter: newOneQuarter });
  };

  handleAddOneQuarter = () => {
    this.setState({
      hardOneQuarter: this.state.hardOneQuarter.concat("")
    });
  };

  handleRemoveOneQuarter = idx => () => {
    this.setState({
      hardOneQuarter: this.state.hardOneQuarter.filter(
        (s, sidx) => idx !== sidx
      )
    });
  };

  // SOFT STEEL 3/8" handlers
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
      softThreeEighths: this.state.softThreeEighths.concat("")
    });
  };

  handleRemoveSoft = idx => () => {
    this.setState({
      softThreeEighths: this.state.softThreeEighths.filter(
        (s, sidx) => idx !== sidx
      )
    });
  };

  // PREPBEND handlers
  handlePrepBendChange = idx => e => {
    const newPrepBend = this.state.prepBend.map((prepB, sidx) => {
      if (idx !== sidx) return prepB;
      return { ...prepB, measurements: e.target.value };
    });
    this.setState({ prepBend: newPrepBend });
  };

  handleAddPrepBend = () => {
    this.setState({
      prepBend: this.state.prepBend.concat("")
    });
  };

  handleRemovePrepBend = idx => () => {
    this.setState({
      prepBend: this.state.prepBend.filter((s, sidx) => idx !== sidx)
    });
  };

  // PREPWELD handlers
  handlePrepWeldChange = idx => e => {
    const newPrepWeld = this.state.prepWeld.map((prepW, sidx) => {
      if (idx !== sidx) return prepW;
      return { ...prepW, measurements: e.target.value };
    });
    this.setState({ prepWeld: newPrepWeld });
  };

  handleAddPrepWeld = () => {
    this.setState({
      prepWeld: this.state.prepWeld.concat("")
    });
  };

  handleRemovePrepWeld = idx => () => {
    this.setState({
      prepWeld: this.state.prepWeld.filter((s, sidx) => idx !== sidx)
    });
  };

  // WELD handlers
  handleWeldChange = idx => e => {
    const newWeld = this.state.weld.map((w, sidx) => {
      if (idx !== sidx) return w;
      return { ...w, measurements: e.target.value };
    });
    this.setState({ weld: newWeld });
  };

  handleAddWeld = () => {
    this.setState({ weld: this.state.weld.concat("") });
  };

  handleRemoveWeld = idx => () => {
    this.setState({
      weld: this.state.weld.filter((s, sidx) => idx !== sidx)
    });
  };

  handleSubmit = () => {
    let newProduct = this.state;

    newProduct.hardSteel = {
      threeEighths: newProduct.hardThreeEighths,
      oneQuarter: newProduct.hardOneQuarter
    };
    newProduct.softSteel = {
      threeEighths: newProduct.softThreeEighths
    };

    delete newProduct.hardThreeEighths;
    delete newProduct.hardOneQuarter;
    delete newProduct.softThreeEighths;

    this.context.updateProduct(newProduct, newProduct.id);
    this.props.history.push("/home");
  };

  // CANCEL handler
  handleClickCancel = () => {
    this.props.history.goBack();
  };

  render() {
    const productId = Number(this.props.match.params.product_id);
    const product = this.context.products.find(p => p.id === productId);
    return product ? (
      <div className="EditProduct">
        <section>
          <form
            onSubmit={e => {
              e.preventDefault();
              this.handleSubmit();
            }}
          >
            <div>
              <label htmlFor="code">Product code: </label>
              <input
                type="text"
                name="code"
                value={this.state.productCode}
                onChange={e => this.updateProductCode(e.target.value)}
                required
              />
              <br />
              <label htmlFor="name">Product name: </label>
              <input
                type="text"
                name="name"
                value={this.state.productName}
                onChange={e => this.updateProductName(e.target.value)}
                required
              />
              <br />
              <label htmlFor="type">Product type: </label>
              <select
                name="type"
                // defaultValue={this.state.productType}
                value={this.state.productType}
                onChange={e => this.updateProductType(e.target.value)}
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
              {this.state.mesh.map((mesh, idx) => (
                <div className="meshItem" key={idx}>
                  <input
                    type="text"
                    name="mesh"
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
                {this.state.hardThreeEighths.map((three, idx) => (
                  <div className="hardThreeEighths" key={idx}>
                    <input
                      type="text"
                      name="three-eighths"
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
                {this.state.hardOneQuarter.map((quarter, idx) => (
                  <div className="hardOneQuarter" key={idx}>
                    <input
                      type="text"
                      name="quarter-inch"
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
                {this.state.softThreeEighths.map((soft, idx) => (
                  <div className="softThreeEighths" key={idx}>
                    <input
                      type="text"
                      name="soft-steel"
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
                {this.state.prepBend.map((prepB, idx) => (
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
                {this.state.prepWeld.map((prepW, idx) => (
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
            <button type="submit">Submit</button>
            <button type="button" onClick={this.handleClickCancel}>
              Cancel
            </button>
          </form>
        </section>
      </div>
    ) : (
      ""
    );
  }
}
