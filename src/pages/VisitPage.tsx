import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function VisitPage() {
  return (
    <section
      id="visit"
      aria-labelledby="visit-heading"
      className="scroll-mt-20 bg-primary px-5 py-14 text-primary-foreground sm:px-8 sm:py-16 lg:px-12"
    >
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
        <div>
          <h1
            id="visit-heading"
            className="max-w-2xl font-display text-2xl font-bold leading-tight sm:text-3xl"
          >
            Visit Mpearl in Surulere
          </h1>
          <p className="mt-3 max-w-xl leading-7 text-primary-foreground/80">
            78 Bode Thomas Street, Surulere, Lagos. Opposite Chicken Republic, in the same building
            as Konga, on the first floor.
          </p>
        </div>
        <Button
          asChild
          size="lg"
          className="bg-accent text-accent-foreground shadow-none hover:bg-accent/90"
        >
          <a
            href="https://maps.google.com/?q=78+Bode+Thomas+Street+Surulere+Lagos"
            target="_blank"
            rel="noreferrer"
          >
            Get directions <ArrowUpRight aria-hidden="true" />
          </a>
        </Button>
      </div>
    </section>
  );
}
