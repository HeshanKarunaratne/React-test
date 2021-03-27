import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr, checkProps } from "./../../Utils";
import Button from "./index";

describe("Button Component", () => {
  describe("Checking proptypes", () => {
    test("should not throw a warning", () => {
      const expectedProps = {
        buttonText: "Example Button Text",
        emitEvent: () => {},
      };
      const propsError = checkProps(Button, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe("Render", () => {
    let wrapper;
    let mockFunc;
    beforeEach(() => {
      mockFunc = jest.fn();
      const props = {
        buttonText: "Example Button Text",
        emitEvent: mockFunc,
      };
      wrapper = shallow(<Button {...props} />);
    });

    test("should render a button", () => {
      const button = findByTestAtrr(wrapper, "buttonComponent");
      expect(button.length).toBe(1);
    });

    test("should emit callback on click event", () => {
      const button = findByTestAtrr(wrapper, "buttonComponent");
      button.simulate("click");
      const callback = mockFunc.mock.calls.length;
      expect(callback).toBe(1);
    });

    test("ExampleMethod_returnsAValue a value as expected", () => {
      const classInstance = wrapper.instance();
      const newValue = classInstance.exampleMethod_returnsAValue(1);
      expect(newValue).toBe(2);
    });
  });
});
