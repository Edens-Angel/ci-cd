import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Demo github actions CI-CD/i);
  expect(linkElement).toBeInTheDocument();
});

test("test if the app exist", () => {
  render(<App />);

  expect(true).toBe(true);
});
