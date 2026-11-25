import { ArrowRight, MapPin, Menu, Phone, X } from "lucide-react";
import { useState } from "react";

import { BrandLogo } from "@/components/BrandLogo";
import { SocialLinks } from "@/components/SocialLinks";
import { Button } from "@/components/ui/button";
import { homeHref, pageFiles, type PageId } from "@/lib/mpearl-pages";
import { clinic, quickLinks } from "@/lib/mpearl-site";
import { AboutPage } from "@/pages/AboutPage";
import { AppointmentsPage } from "@/pages/AppointmentsPage";
import { FaqsPage } from "@/pages/FaqsPage";
import { HomePage } from "@/pages/HomePage";
import { PackagesPage } from "@/pages/PackagesPage";
import { ServicesPage } from "@/pages/ServicesPage";
import { VisitPage } from "@/pages/VisitPage";

const pages = {
  home: HomePage,
  services: ServicesPage,
  packages: PackagesPage,
  about: AboutPage,
  faqs: FaqsPage,
  appointments: AppointmentsPage,
  visit: VisitPage,
} satisfies Record<PageId, () => React.JSX.Element>;

const navigation = [
  { id: "services", label: "Services" },
  { id: "packages", label: "Health packages" },
  { id: "about", label: "About" },
  { id: "faqs", label: "FAQs" },
  { id: "visit", label: "Visit us" },
] as const;

export function MpearlSite({ page }: { page: PageId }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const Page = pages[page];

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <a
        href="#main-content"
        className="sr-only z-50 focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-md focus:bg-background focus:px-4 focus:py-3"
      >
        Skip to content
      </a>
      <div className="bg-primary px-4 py-2.5 text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 text-center text-xs font-medium sm:text-sm">
          <MapPin aria-hidden="true" className="size-4 shrink-0 text-leaf" />
          <span>78 Bode Thomas Street, Surulere, Lagos</span>
          <span className="hidden sm:inline">
            · Opposite Chicken Republic, same building as Konga, first floor
          </span>
        </div>
      </div>

      <header className="relative z-20 border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-6 lg:px-8 xl:flex xl:justify-between">
          <a
            href={homeHref}
            aria-label="Mpearl home"
            aria-current={page === "home" ? "page" : undefined}
            className="flex min-w-0 items-center gap-3"
          >
            <BrandLogo className="h-14 w-auto sm:h-16" />
          </a>

          <nav aria-label="Main navigation" className="hidden items-center gap-6 xl:flex xl:gap-8">
            {navigation.map(({ id, label }) => (
              <a
                key={id}
                href={pageFiles[id]}
                aria-current={page === id ? "page" : undefined}
                className="text-sm font-medium text-foreground hover:text-primary aria-[current=page]:text-primary aria-[current=page]:underline aria-[current=page]:underline-offset-8"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <SocialLinks showHandle={false} className="hidden xl:flex" />
            <Button asChild size="sm" className="hidden px-5 sm:inline-flex">
              <a
                href={pageFiles.appointments}
                aria-current={page === "appointments" ? "page" : undefined}
              >
                Request an appointment <ArrowRight aria-hidden="true" />
              </a>
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMobileMenuOpen((current) => !current)}
              className="xl:hidden"
            >
              {mobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </Button>
          </div>
        </div>
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          hidden={!mobileMenuOpen}
          className={
            mobileMenuOpen
              ? "grid gap-1 border-t border-border bg-background px-4 py-3 shadow-md xl:hidden"
              : "hidden"
          }
        >
          {navigation.map(({ id, label }) => (
            <a
              key={id}
              href={pageFiles[id]}
              aria-current={page === id ? "page" : undefined}
              className="rounded-md px-3 py-3 text-sm font-medium hover:bg-secondary aria-[current=page]:bg-secondary aria-[current=page]:text-primary"
            >
              {label}
            </a>
          ))}
          <Button asChild className="mt-1">
            <a
              href={pageFiles.appointments}
              aria-current={page === "appointments" ? "page" : undefined}
            >
              Request an appointment <ArrowRight aria-hidden="true" />
            </a>
          </Button>
          <SocialLinks className="mt-2" />
        </nav>
      </header>

      <main id="main-content" className="flex-1">
        <Page />
      </main>

      <footer className="border-t border-border bg-background px-5 pb-24 pt-10 sm:px-8 sm:pb-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href={homeHref} aria-label="Mpearl home">
              <BrandLogo className="h-24 w-auto" />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">
              Clinical laboratory and diagnostic services in Surulere, Lagos.
            </p>
          </div>
          <nav aria-label="Footer">
            <p className="text-sm font-bold text-foreground">Quick links</p>
            <ul className="mt-3 grid gap-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="text-sm font-bold text-foreground">Visit</p>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {clinic.street}
              <br />
              {clinic.area}
              <br />
              {clinic.landmarks.join(". ")}.
            </p>
            <a
              href={clinic.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              Get directions
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
          <div>
            <p className="text-sm font-bold text-foreground">Contact</p>
            <div className="mt-3 grid gap-2 text-sm">
              {clinic.phones.map((phone) => (
                <a
                  key={phone.href}
                  href={phone.href}
                  className="inline-flex items-center gap-2 font-medium hover:text-primary"
                >
                  <Phone aria-hidden="true" className="size-4" /> {phone.display}
                </a>
              ))}
              <a
                href={`mailto:${clinic.email}`}
                className="text-muted-foreground hover:text-primary"
              >
                {clinic.email}
              </a>
            </div>
            <SocialLinks className="mt-4" />
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-7xl border-t border-border pt-5 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Mpearl Clinical Laboratory &amp; Diagnostics Services. All
          rights reserved.
        </div>
      </footer>

      <Button
        asChild
        size="icon"
        aria-label="Call Mpearl"
        className="fixed bottom-5 right-5 z-30 size-12 rounded-full shadow-lg sm:hidden"
      >
        <a href="tel:+2349046403013">
          <Phone aria-hidden="true" className="size-5" />
        </a>
      </Button>
    </div>
  );
}
