import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRulerCombined,
  faSearch,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";
import "./Home.css";

export default class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <section className="first">
          <div className="fake-img">
            <div className="splash">
              <h1>Topiary Welding</h1>
              <p>Learn how to weld trellises, arbors, and topiary.</p>
              <Link to="/products">Begin</Link>
            </div>
          </div>
        </section>

        <div className="intro">
          <p>
            What the heck are trellises, arbors, and topiary, you ask? They are
            metal structures for plants to grow on in your garden.
          </p>
          <p>Do you have a climbing vine? Give it a trellis to go crazy on.</p>
          <p>
            Wish you could walk through a tunnel of flowers? Check out the
            arbors.
          </p>

          <p>Is your garden lacking flair? Topiary has you covered.</p>
        </div>

        <div className="landing">
          <FontAwesomeIcon icon={faSearch} size="4x" className="icon-left" />
          <p>
            Still curious? Come on in and browse the catalogue. We have
            pictures.
          </p>
        </div>
        <div className="landing">
          <p>
            {" "}
            Already know what you're looking for? Double check measurements and
            study detailed instructions.
          </p>
          <FontAwesomeIcon
            icon={faRulerCombined}
            size="4x"
            className="icon-right"
          />
        </div>
        <div className="landing">
          <FontAwesomeIcon
            icon={faClipboardList}
            size="4x"
            className="icon-left"
          />
          <p>
            If you're already a pro, drop a comment to share your personal
            tricks.
          </p>
        </div>
        <Link to="/products" className="begin">
          Begin
        </Link>

        <footer>&copy;2020 Ben Hernandez</footer>
      </div>
    );
  }
}
