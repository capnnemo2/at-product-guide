import React from "react";
import "./Resources.css";

export default class Resources extends React.Component {
  render() {
    return (
      <div className="Resources">
        <section>
          <h2>About</h2>
          <p className="text-block">
            The content of this application applies to a specific company that
            fabricates and distributes trellises, arbors, topiary, and more to
            garden nurseries across the country. However, the structure of the
            application could be applied to any business that manufactures
            products which require detailed instructions. A repository of
            specifications is important so that hard-earned knowledge isn't lost
            during any transitions or changes the company may undergo.
          </p>
        </section>
        <section>
          <h2>All Products</h2>
          <p className="text-block">
            For each product, the materials listed are for a single product.
            However, you will encounter directions in prep bend and prep weld
            that give guidance for putting together batches to maximize
            efficiency.
          </p>
        </section>

        <section>
          <h2>Trellises</h2>
          <p className="text-block">
            Trellis mesh measurements are provided with the height x width. When
            you cut the mesh, the width of the mesh is open on both sides, open
            on the top, but not the bottom.
          </p>
          <p className="text-block">
            Generally, hard 3/8" cross pieces are 1" narrower than the width of
            the trellis/mesh (IE: FT51 requires 2 x 11"), but depending on your
            mess cutting style you may have to adjust your measurements.
          </p>
          <p className="text-block">
            Back weld all 3/8" connections. Products like DFTs and BFTs also
            have 1/4" - 3/8" connections that also need to be back welded.
          </p>
          <p className="text-block">
            Trellises that are wider than 1' require additional foot spikes.
            Trellises between 1' and 4' wide get one extra foot spike.
          </p>
          <ul className="trellis-feet">
            <li>1' = no extra foot spikes</li>
            <li>1' &lt; trellis &lt; 4' = one extra foot spike, centered</li>
            <li>
              4' &lt; trellis &lt; 6' = two extra foot spikes, evenly spaced
            </li>
            <li>
              6' &lt; trellis = probably a special order and should come with
              specific specifications
            </li>
            <li>
              EXCEPTION: CTs do not require additional foot spikes despite being
              2' wide on each side. The cornered structure makes them plenty
              stable.
            </li>
          </ul>
        </section>

        <section>
          <h2>Arbors</h2>
          <p className="text-block">
            Arbors do not get extra foot spikes. The bent frame pieces provide
            the only foot spikes.
          </p>
          <p className="text-block">
            Cutting arbor mesh: mesh is open on all sides.
          </p>
          <p className="text-block">
            Arbor mesh gets welded on backwards from flat work.
          </p>
        </section>
      </div>
    );
  }
}
