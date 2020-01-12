import React from "react";
import { render } from "@testing-library/react";

import App from "./App";

test("renders header", () => {
  const { getByText } = render(<App />);
  const h1 = getByText("github users");
  expect(h1).toBeInTheDocument();
});
