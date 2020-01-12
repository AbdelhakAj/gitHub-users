import React from "react";
import renderer from "react-test-renderer";
import SearchBar from "../searchBar";

describe("<SearchBar />", () => {
  it("renders SearchBar", () => {
    const component = renderer.create(<SearchBar />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
