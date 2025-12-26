import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import Counter from "./Counter";
describe("Counter", () => {
  it("increments counter on button click", async () => {
    render(<Counter />);

    const button = screen.getByRole("button", { name: /increment/i });
    const counterValue = screen.getByTestId("counter-value");

    expect(counterValue.textContent).toEqual("0");

    // test button click

    await userEvent.click(button);
    expect(counterValue.textContent).toEqual("1");
    await userEvent.click(button);
    expect(counterValue.textContent).toEqual("2");
  });
});
