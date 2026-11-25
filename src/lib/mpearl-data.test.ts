import { describe, expect, it } from "vitest";

import {
  healthPackages,
  investigations,
  serviceCatalog,
  signaturePackages,
} from "@/lib/mpearl-data";

describe("Mpearl service catalog", () => {
  it("keeps prices off package and investigation listings", () => {
    const listings = [
      ...healthPackages,
      ...signaturePackages,
      ...investigations,
      ...serviceCatalog,
    ];
    const copy = JSON.stringify(listings);

    expect(listings.every((listing) => !("price" in listing))).toBe(true);
    expect(copy).not.toMatch(/(?:₦|NGN|Naira|#)\s*[\d,.]+|\b\d{1,3}(?:,\d{3})+\b/i);
  });

  it("provides the selected services and packages in the appointment catalog", () => {
    const names = new Set(serviceCatalog.map(({ name }) => name));

    expect(names.has("Wellness Package")).toBe(true);
    expect(names.has("Silver Signature")).toBe(true);
    expect(names.has("Full Blood Count")).toBe(true);
    expect(names.has("Obstetric Scan")).toBe(true);
  });
});
