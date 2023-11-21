import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
    test("renders a default button with text", async () => {
      render(<Button primary size='small' label="Click me"></Button>);
  
      expect(screen.getByText("Click me")).toBeInTheDocument();
      expect(screen.getByText("Click me")).toHaveStyle({
        backgroundColor: "#D1D5DB",
        color: "#1F2937",
      });
    });
});