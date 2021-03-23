import React, { Component } from "react";
import Header from "./components/Header/index";
import "./App.scss";
import Headline from "./components/Headline";

const tempArr = [
  {
    fName: "Joe",
    lName: "Karu",
    age: 24,
    email: "heshn@gmail.com",
    onlineStatus: true,
  },
];
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <section className="main">
          <Headline
            header="Posts"
            desc="Click the button to render posts"
            tempArr={tempArr}
          />
        </section>
      </div>
    );
  }
}

export default App;
