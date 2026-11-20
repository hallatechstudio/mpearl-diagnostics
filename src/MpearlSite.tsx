import { ArrowRight, MapPin, Menu, Phone, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { homeHref, pageFiles, type PageId } from "@/lib/mpearl-pages";
import { AppointmentsPage } from "@/pages/AppointmentsPage";
import { HomePage } from "@/pages/HomePage";
import { PackagesPage } from "@/pages/PackagesPage";
import { ServicesPage } from "@/pages/ServicesPage";
import { VisitPage } from "@/pages/VisitPage";

const mpearlLogo = `${import.meta.env.BASE_URL}favicon.png`;

const pages = {
  home: HomePage,
  services: ServicesPage,
  packages: PackagesPage,
  appointments: AppointmentsPage,
  visit: VisitPage,
} satisfies Record<PageId, () => React.JSX.Element>;

const navigation = [
  { id: "services", label: "Services" },
  { id: "packages", label: "Health packages" },
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
            · Opposite Chicken Republic, same building as Konga
          </span>
        </div>
      </div>

      <header className="relative z-20 border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-6 lg:flex lg:justify-between lg:px-8">
          <a
            href={homeHref}
            aria-label="Mpearl home"
            aria-current={page === "home" ? "page" : undefined}
            className="flex min-w-0 items-center gap-3"
          >
            <img className="h-12 w-12 shrink-0 rounded-full object-cover" src={mpearlLogo} alt="" />
            <span className="min-w-0">
              <span className="block truncate font-display text-xl font-black leading-none text-primary sm:text-2xl">
                MPEARL
              </span>
              <span className="mt-1 block text-[9px] font-bold uppercase leading-tight text-muted-foreground sm:text-[10px]">
                Clinical Laboratory
                <br className="sm:hidden" /> &amp; Diagnostics
              </span>
            </span>
          </a>

          <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
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
              className="lg:hidden"
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
              ? "grid gap-1 border-t border-border bg-background px-4 py-3 shadow-md lg:hidden"
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
        </nav>
      </header>

      <main id="main-content" className="flex-1">
        <Page />
      </main>

      <footer className="bg-background px-5 pb-20 pt-9 sm:px-8 sm:pb-9 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <a href={homeHref} className="flex items-center gap-3" aria-label="Mpearl home">
            <img src={mpearlLogo} alt="" className="size-10 rounded-full object-cover" />
            <span>
              <span className="block font-display font-black leading-none text-primary">
                MPEARL
              </span>
              <span className="mt-1 block text-[10px] text-muted-foreground">
                Clinical Laboratory &amp; Diagnostics
              </span>
            </span>
          </a>
          <div className="grid gap-2 text-sm sm:text-right">
            <a
              href="tel:+2349046403013"
              className="inline-flex items-center gap-2 font-medium hover:text-primary sm:justify-end"
            >
              <Phone aria-hidden="true" className="size-4" /> 0904 640 3013
            </a>
            <a
              href="tel:+2347060991444"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary sm:justify-end"
            >
              <Phone aria-hidden="true" className="size-4" /> 0706 099 1444
            </a>
            <a
              href="mailto:mpearldiagnostics@gmail.com"
              className="text-muted-foreground hover:text-primary"
            >
              mpearldiagnostics@gmail.com
            </a>
          </div>
        </div>
        <div className="mx-auto mt-7 max-w-7xl border-t border-border pt-5 text-xs text-muted-foreground">
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
