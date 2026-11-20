import { ChevronDown, ChevronRight, Dna, FlaskConical, HeartPulse } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { HealthPackage } from "@/lib/mpearl-data";
import { appointmentHref } from "@/lib/mpearl-pages";

export function PackageCard({
  healthPackage,
  index,
  featured = false,
}: {
  healthPackage: HealthPackage;
  index: number;
  featured?: boolean;
}) {
  return (
    <article
      className={`flex min-w-0 flex-col border p-5 ${featured ? "border-leaf-foreground/20 bg-background" : "border-border bg-card"}`}
    >
      <div className="flex items-center gap-3">
        <span
          className={`grid size-9 shrink-0 place-items-center rounded-md ${featured ? "bg-leaf text-leaf-foreground" : "bg-secondary text-primary"}`}
        >
          {featured ? (
            <Dna aria-hidden="true" className="size-4" />
          ) : index % 2 === 0 ? (
            <HeartPulse aria-hidden="true" className="size-4" />
          ) : (
            <FlaskConical aria-hidden="true" className="size-4" />
          )}
        </span>
        <p className="min-w-0 font-display font-bold text-foreground">{healthPackage.name}</p>
      </div>
      <p className="mt-4 min-h-12 text-sm leading-6 text-muted-foreground">
        {healthPackage.summary}
      </p>
      <details className="group mt-3">
        <summary className="flex cursor-pointer list-none items-center gap-1 py-2 text-sm font-medium text-primary [&::-webkit-details-marker]:hidden">
          What’s included{" "}
          <ChevronDown
            aria-hidden="true"
            className="size-4 transition-transform group-open:rotate-180"
          />
        </summary>
        <ul className="grid gap-2 border-l border-border py-2 pl-3 text-sm leading-5 text-muted-foreground">
          {healthPackage.includes.map((test) => (
            <li key={test}>{test}</li>
          ))}
        </ul>
      </details>
      <div className="mt-auto border-t border-border pt-3">
        <Button asChild variant="link" className="h-auto px-0 py-2">
          <a
            href={appointmentHref(healthPackage.name)}
            aria-label={`Request ${healthPackage.name}`}
          >
            Request this package <ChevronRight aria-hidden="true" />
          </a>
        </Button>
      </div>
    </article>
  );
}
