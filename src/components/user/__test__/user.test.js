import React from "react";
import renderer from "react-test-renderer";
import User from "../user";

describe("<User />", () => {
  it("renders User", () => {
    const component = renderer.create(
      <User data={{ id: "", name: "", imgURL: "" }} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
