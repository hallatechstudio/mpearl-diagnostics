import { ArrowRight, FlaskConical, HeartPulse, MapPin, ScanLine, ShieldCheck } from "lucide-react";

import labImage from "@/assets/mpearl-clinical-laboratory.jpg";
import { Button } from "@/components/ui/button";
import { pageFiles } from "@/lib/mpearl-pages";

export function HomePage() {
  return (
    <>
      <section
        id="home"
        aria-labelledby="hero-heading"
        className="relative isolate flex min-h-[430px] items-center overflow-hidden bg-primary sm:min-h-[450px] lg:min-h-[485px]"
      >
        <img
          src={labImage}
          alt=""
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover hero-image-shift"
        />
        <div aria-hidden="true" className="hero-scrim absolute inset-0 -z-10" />
        <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
          <div className="mpearl-reveal max-w-2xl">
            <p className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-leaf sm:text-base">
              <span className="h-px w-7 bg-leaf" />
              CAREFULLY DONE. CLOSE TO HOME.
            </p>
            <h1
              id="hero-heading"
              className="max-w-xl font-display text-4xl font-bold leading-[1.08] text-primary-foreground sm:text-5xl lg:text-6xl"
            >
              Clear answers begin with good care.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-primary-foreground/90 sm:text-lg sm:leading-8">
              Laboratory tests, health screening packages and ultrasound scans in Surulere, Lagos.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground shadow-none hover:bg-accent/90"
              >
                <a href={pageFiles.appointments}>
                  Request an appointment <ArrowRight aria-hidden="true" />
                </a>
              </Button>
              <Button
                asChild
                variant="link"
                className="h-11 text-primary-foreground hover:text-leaf"
              >
                <a href={pageFiles.services}>
                  Explore our services <ArrowRight aria-hidden="true" />
                </a>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-primary-foreground/90">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck aria-hidden="true" className="size-4 text-leaf" /> Professional
                laboratory care
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin aria-hidden="true" className="size-4 text-leaf" /> Easy-to-find Surulere
                location
              </span>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Mpearl at a glance" className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-border px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8 lg:px-12">
          <a
            href={pageFiles.services}
            className="flex items-center gap-4 py-5 hover:bg-secondary/50 sm:justify-center sm:py-6"
          >
            <span className="grid size-11 shrink-0 place-items-center rounded-md bg-secondary text-primary">
              <FlaskConical aria-hidden="true" className="size-5" />
            </span>
            <div>
              <p className="font-semibold text-foreground">Laboratory investigations</p>
              <p className="mt-1 text-sm text-muted-foreground">A wide range of diagnostic tests</p>
            </div>
          </a>
          <a
            href={pageFiles.packages}
            className="flex items-center gap-4 py-5 hover:bg-secondary/50 sm:justify-center sm:py-6 sm:pl-5"
          >
            <span className="grid size-11 shrink-0 place-items-center rounded-md bg-accent text-accent-foreground">
              <HeartPulse aria-hidden="true" className="size-5" />
            </span>
            <div>
              <p className="font-semibold text-foreground">Health screening packages</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Screening for different life stages
              </p>
            </div>
          </a>
          <a
            href={`${pageFiles.services}?type=ultrasound`}
            className="flex items-center gap-4 py-5 hover:bg-secondary/50 sm:justify-center sm:py-6 sm:pl-5"
          >
            <span className="grid size-11 shrink-0 place-items-center rounded-md bg-leaf text-leaf-foreground">
              <ScanLine aria-hidden="true" className="size-5" />
            </span>
            <div>
              <p className="font-semibold text-foreground">Ultrasound scans</p>
              <p className="mt-1 text-sm text-muted-foreground">Imaging for a range of needs</p>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
