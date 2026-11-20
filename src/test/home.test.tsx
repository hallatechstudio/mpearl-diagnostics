import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { MpearlSite } from "@/MpearlSite";

describe("Mpearl pages", () => {
  it("links to the standalone pages from the shared navigation", () => {
    render(<MpearlSite page="services" />);

    const navigation = within(screen.getByRole("navigation", { name: "Main navigation" }));
    expect(navigation.getByRole("link", { name: "Services", current: "page" })).toHaveAttribute(
      "href",
      "services.html",
    );
    expect(navigation.getByRole("link", { name: "Health packages" })).toHaveAttribute(
      "href",
      "packages.html",
    );
    expect(navigation.getByRole("link", { name: "Visit us" })).toHaveAttribute(
      "href",
      "visit.html",
    );
    expect(screen.getByRole("link", { name: "Request an appointment" })).toHaveAttribute(
      "href",
      "appointments.html",
    );
  });

  it("shows a matching Signature package in the searchable catalog", () => {
    render(<MpearlSite page="services" />);

    fireEvent.change(screen.getByRole("textbox", { name: "Search tests and packages" }), {
      target: { value: "Silver Signature" },
    });

    const catalog = screen.getByRole("region", { name: "Laboratory tests and scans" });
    expect(within(catalog).getByRole("link", { name: "Request Silver Signature" })).toHaveAttribute(
      "href",
      "appointments.html?service=Silver+Signature",
    );
  });

  it("preselects a service when an appointment link carries it across pages", () => {
    const originalUrl = window.location.href;
    window.history.replaceState(null, "", "/appointments.html?service=Silver+Signature");
    try {
      render(<MpearlSite page="appointments" />);
      expect(screen.getByLabelText("Test, scan or package")).toHaveValue("Silver Signature");
    } finally {
      window.history.replaceState(null, "", originalUrl);
    }
  });

  it("opens a WhatsApp draft for visitors who need help choosing a service", () => {
    const open = vi.spyOn(window, "open").mockReturnValue(null);
    render(<MpearlSite page="appointments" />);

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
