import "@testing-library/jest-dom/vitest";
import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useCounter } from "./useCounter";
describe("useCounter", () => {
  it("Initial value is 5", () => {
    const { result } = renderHook(() => useCounter(5));
    expect(result.current.count).toBe(5);
  });
  it("increment", () => {
    const { result } = renderHook(() => useCounter(0));
    expect(result.current.count).toBe(0);
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(2);
  });
  it("Decrement", () => {
    const { result } = renderHook(() => useCounter(5));
    expect(result.current.count).toBe(5);
    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(4);
  });
  it("Reset", () => {
    const { result } = renderHook(() => useCounter(4));
    expect(result.current.count).toBe(4);
    act(() => {
      result.current.reset();
    });
    expect(result.current.count).toBe(0);
  });
});
