import React from "react";
import Header from "./Header/Header";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <Header />
        </header>
      </div>
    );
  }
}