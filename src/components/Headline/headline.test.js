import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";
import { findByTestAtrr, checkProps } from "./../../Utils";

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Headline Component", () => {
  describe("Have Props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "Test Header",
        desc: "Test Desc",
      };
      wrapper = setUp(props);
    });
    test("Should render without errors", () => {
      const component = findByTestAtrr(wrapper, "headlineComponent");
      expect(component.length).toBe(1);
    });

    test("Should render a h1", () => {
      const component = findByTestAtrr(wrapper, "header");
      expect(component.length).toBe(1);
    });

    test("Should render a description", () => {
      const component = findByTestAtrr(wrapper, "desc");
      expect(component.length).toBe(1);
    });
  });

  describe("Have no Props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    test("Should not render", () => {
      const component = findByTestAtrr(wrapper, "headlineComponent");
      expect(component.length).toBe(0);
    });
  });

  describe("Checking propTypes", () => {
    test("should not throw a warning", () => {
      const expectedProps = {
        header: "Test Header",
        desc: "Test Desc",
        tempArr: [
          {
            fName: "Test fName",
            lName: "Test lName",
            age: 24,
            email: "heshn@gmail.com",
            onlineStatus: false,
          },
        ],
      };
      const propsErr = checkProps(Headline, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });
});
