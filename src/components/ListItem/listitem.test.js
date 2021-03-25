import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr, checkProps } from "./../../Utils";
import ListItem from "./index";

describe("ListItem Component", () => {
  describe("Checking proptypes", () => {
    test("should not throw a warning", () => {
      const expectedProps = {
        title: "Example Button Text",
        desc: "Example description",
      };
      const propsError = checkProps(ListItem, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe("Render", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: "Example Button Text",
        desc: "Example description",
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    test("should render a listItem", () => {
      const listItem = findByTestAtrr(wrapper, "listItemComponent");
      expect(listItem.length).toBe(1);
    });

    test("should render a title", () => {
      const title = findByTestAtrr(wrapper, "titleComponent");
      expect(title.length).toBe(1);
    });

    test("should render a desc", () => {
      const desc = findByTestAtrr(wrapper, "descComponent");
      expect(desc.length).toBe(1);
    });
  });

  describe("Should not render", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        desc: "Example description",
      };
      wrapper = shallow(<ListItem {...props} />);
    });
    test("should not render the component", () => {
      const component = findByTestAtrr(wrapper, "listItemComponent");
      expect(component.length).toBe(0);
    });
  });
});
