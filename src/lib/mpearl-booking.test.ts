import { describe, expect, it } from "vitest";

import { createAppointmentMessage } from "@/lib/mpearl-booking";

describe("Mpearl appointment message", () => {
  it("includes selected service and contact details without displaying a price", () => {
    const message = createAppointmentMessage({
      name: " Ada Okafor ",
      phone: "+234 800 123 4567",
      service: "Silver Signature",
      preferredDate: "2026-11-25",
    });

    expect(message).toContain("Name: Ada Okafor");
    expect(message).toContain("Phone: +234 800 123 4567");
    expect(message).toContain("Requested service: Silver Signature");
    expect(message).toContain("Preferred date: November 25, 2026");
    expect(message).not.toMatch(/(?:₦|NGN|Naira|#)\s*[\d,.]+/i);
  });

  it("treats the date and notes as optional", () => {
    const message = createAppointmentMessage({
      name: "Ada Okafor",
      phone: "+234 800 123 4567",
      service: "Full Blood Count",
    });

    expect(message).toContain("Preferred date: Flexible");
    expect(message).not.toContain("Notes:");
  });
});