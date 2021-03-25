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
    beforeEach(() => {
      const props = {
        buttonText: "Example Button Text",
        emitEvent: () => {},
      };
      wrapper = shallow(<Button {...props} />);
    });

    test("should render a button", () => {
      const button = findByTestAtrr(wrapper, "buttonComponent");
      expect(button.length).toBe(1);
    });
  });
});
