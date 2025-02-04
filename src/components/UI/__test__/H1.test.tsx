import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";

import H1 from "../H1";

describe("H1 component", () => {
  it("renders greeting with a name", () => {
    render(<H1>Test text</H1>);
    const text = screen.getByText("Test text");
    expect(text).toBeInTheDocument();
  });
});

