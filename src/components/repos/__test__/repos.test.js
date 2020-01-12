import React from "react";
import renderer from "react-test-renderer";
import Repos from "../repos";

describe("<Repos />", () => {
  it("renders repos", () => {
    const component = renderer.create(
      <Repos data={{ id: "", name: "", fullName: "" }} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
