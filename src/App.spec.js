import React from "react";
import App from "./App";
import { render } from "@testing-library/react";

test(`sss`, () => {
  const { getByText } = render(<App />);
  expect(getByText("Vite + React")).toBeTruthy();
});
