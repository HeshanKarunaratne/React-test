import App from "./App";
import { shallow } from "enzyme";
import { findByTestAtrr, testStore } from "./Utils";
import React from "react";

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />);

  console.log("wrapper->", wrapper.debug());
  return wrapper;
};

describe("App Component", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      postsReducer: [
        {
          title: "Example title 1",
          body: "Some text",
        },
        {
          title: "Example title 2",
          body: "Some text",
        },
        {
          title: "Example title 3",
          body: "Some text",
        },
      ],
    };
    wrapper = setUp(initialState);
  });

  test("Should render without errors", () => {
    const component = findByTestAtrr(wrapper, "appComponent");
    expect(component.length).toBe(0);
  });

  test("Example_updateState should update state as expected", () => {
    const classInstance = wrapper.instance();
    classInstance.exampleMethod_updatesState();
    const newState = classInstance.state.hideBtn;
    expect(newState).toBe(false);
  });

  test("ExampleMethod_returnsAValue a value as expected", () => {
    const classInstance = wrapper.instance();
    const newValue = classInstance.exampleMethod_returnsAValue(1);
    expect(newValue).toBe(2);
  });
});
