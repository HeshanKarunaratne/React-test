import React, { Component } from "react";
import Header from "./components/Header/index";
import "./App.scss";
import Headline from "./components/Headline";
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <section className="main">
          <Headline header="Posts" desc="Click the button to render posts" />
        </section>
      </div>
    );
  }
}

export default App;
