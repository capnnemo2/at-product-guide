import React from "react";
import "./Resources.css";

export default class Resources extends React.Component {
  render() {
    return (
      <div className="Resources">
        {/* <section>
          <p>
            This page will include images and descriptions of the various jigs
            and benders. It will also include general tips and guidelines. For
            example: All arbors do not require additional foot spikes.
          </p>
          <p>
            Perhaps this section will also include things like how to make top
            rings?
          </p>
        </section> */}
        <section>
          <h2>General Guidance</h2>
          <p>
            For each product, the materials listed are for one of that product.
            However, you will encounter directions in sections like prep bend
            and prep weld that give guidance for putting together batches.
          </p>
        </section>
        <section>
          <h2>Arbors</h2>
          <p>
            Arbors do not get extra foot spikes. The bent frame pieces provide
            the only foot spikes.
          </p>
          <p>Cutting arbor mesh: mesh is open on all sides.</p>
          <p>Arbor mesh gets welded on backwards from flat work.</p>
        </section>
        <section>
          <h2>Trellises</h2>
          <p>
            Trellis mesh measurements are provided with the height x width. When
            you cut the mesh, the width of the mesh is open on both sides, open
            on the top, but not the bottom.
          </p>
          <p>
            Generally, hard 3/8" cross pieces are 1" narrower than the width of
            the trellis/mesh (IE: FT51 requires 2 x 11"), but depending on your
            mess cutting style you may have to adjust your measurements.
          </p>
          <p>
            Back weld all 3/8" connections. Products like DFTs and BFTs also
            have 1/4" - 3/8" connections that also need to be back welded.
          </p>
          <p>
            Trellises that are wider than 1' require additional foot spikes.
            Trellises between 1' and 4' wide get one extra foot spike.
          </p>
          <ul>
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
      </div>
    );
  }
}
