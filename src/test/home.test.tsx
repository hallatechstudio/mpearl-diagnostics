import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { MpearlHome } from "@/MpearlHome";

describe("Mpearl home", () => {
  it("shows a matching Signature package in the searchable catalog", () => {
    render(<MpearlHome />);

    fireEvent.change(screen.getByRole("textbox", { name: "Search tests and packages" }), {
      target: { value: "Silver Signature" },
    });

    const catalog = screen.getByRole("region", { name: "Find a service that works for you." });
    expect(within(catalog).getByText("Silver Signature")).toBeInTheDocument();
  });

  it("opens a WhatsApp draft for visitors who need help choosing a service", () => {
    const open = vi.spyOn(window, "open").mockReturnValue(null);
    render(<MpearlHome />);

    try {
      fireEvent.change(screen.getByLabelText("Your name"), { target: { value: "Ada Okafor" } });
      fireEvent.change(screen.getByLabelText("Phone number"), {
        target: { value: "08012345678" },
      });
      fireEvent.change(screen.getByLabelText("Test, scan or package"), {
        target: { value: "Not sure, please advise" },
      });
      fireEvent.click(screen.getByRole("button", { name: "Continue to WhatsApp" }));

      const url = new URL(String(open.mock.calls[0]?.[0]));
      expect(url.hostname).toBe("wa.me");
      expect(url.searchParams.get("text")).toContain("Requested service: Not sure, please advise");
      expect(screen.getByRole("status")).toHaveTextContent("Please send the message");
    } finally {
      open.mockRestore();
    }
  });
});
