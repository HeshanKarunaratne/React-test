import React, { Component } from "react";
import Header from "./components/Header/index";
import "./App.scss";
import Headline from "./components/Headline";
import { Provider } from "react-redux";
import store from "./store";
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
      <Provider store={store}>
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
      </Provider>
    );
  }
}

export default App;
