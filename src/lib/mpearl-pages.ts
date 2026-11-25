export const pageFiles = {
  home: "index.html",
  services: "services.html",
  packages: "packages.html",
  about: "about.html",
  faqs: "faqs.html",
  appointments: "appointments.html",
  visit: "visit.html",
} as const;

export type PageId = keyof typeof pageFiles;

export const homeHref = "./";

export function isPageId(value: string | undefined): value is PageId {
  return value !== undefined && Object.hasOwn(pageFiles, value);
}

export function appointmentHref(serviceName: string) {
  const query = new URLSearchParams({ service: serviceName });
  return `${pageFiles.appointments}?${query}`;
}
