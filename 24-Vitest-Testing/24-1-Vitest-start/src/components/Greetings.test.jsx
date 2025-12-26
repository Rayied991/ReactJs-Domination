import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Greeting from "./Greetings";
describe("Greeting", () => {
  it("renders a default greeting", () => {
    render(<Greeting />);
    expect(screen.getByText("Hello, World!")).toBeInTheDocument();
  });
  it("renders a default greeting", () => {
    render(<Greeting name={"Rayied"} />);
    const text = screen.getByText("Hello, Rayied!");
    expect(text).toBeInTheDocument();
  });
});
