import React, { Component } from "react";
import Header from "./components/Header/index";
import "./App.scss";
import Headline from "./components/Headline";
import { connect } from "react-redux";

import Button from "./components/Button";
import ListItem from "./components/ListItem";

import { fetchPosts } from "./actions";

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
  constructor(props) {
    super(props);
  }
  fetch = () => {
    this.props.fetchPosts();
  };
  render() {
    const { posts } = this.props;
    return (
      <div className="App" data-test="appComponent">
        <Header />
        <section className="main">
          <Headline
            header="Posts"
            desc="Click the button to render posts"
            tempArr={tempArr}
          />
          <Button buttonText="Get Posts" emitEvent={this.fetch}></Button>
          {posts.length > 0 && (
            <div>
              {posts.map((post, index) => {
                const { title, body } = post;
                return <ListItem key={index} title={title} desc={body} />;
              })}
            </div>
          )}
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.postsReducer.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
