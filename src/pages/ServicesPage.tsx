import {
  ChevronDown,
  ChevronRight,
  FlaskConical,
  Microscope,
  ScanLine,
  Search,
} from "lucide-react";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  healthPackages,
  investigations,
  signaturePackages,
  type Investigation,
} from "@/lib/mpearl-data";
import { appointmentHref } from "@/lib/mpearl-pages";
import { PackageCard } from "@/components/PackageCard";

type ServiceFilter = "All services" | "Health packages" | "Laboratory tests" | "Ultrasound scans";

export function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState<ServiceFilter>(() =>
    new URLSearchParams(window.location.search).get("type") === "ultrasound"
      ? "Ultrasound scans"
      : "All services",
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [showAllPackages, setShowAllPackages] = useState(false);
  const [showAllInvestigations, setShowAllInvestigations] = useState(false);
  const filteredInvestigations = useMemo(() => {
    const search = searchQuery.trim().toLocaleLowerCase();
    return investigations.filter((investigation) => {
      const isVisibleType =
        activeFilter === "All services" ||
        (activeFilter === "Laboratory tests" && investigation.kind === "Laboratory test") ||
        (activeFilter === "Ultrasound scans" && investigation.kind === "Ultrasound scan");
      return (
        isVisibleType &&
        (!search ||
          investigation.name.toLocaleLowerCase().includes(search) ||
          investigation.category.toLocaleLowerCase().includes(search))
      );
    });
  }, [activeFilter, searchQuery]);

  const filteredHealthPackages = useMemo(() => {
    const search = searchQuery.trim().toLocaleLowerCase();
    if (activeFilter === "Laboratory tests" || activeFilter === "Ultrasound scans") return [];
    return healthPackages.filter(
      ({ name, summary }) =>
        !search ||
        name.toLocaleLowerCase().includes(search) ||
        summary.toLocaleLowerCase().includes(search),
    );
  }, [activeFilter, searchQuery]);

  const filteredSignaturePackages = useMemo(() => {
    const search = searchQuery.trim().toLocaleLowerCase();
    if (activeFilter === "Laboratory tests" || activeFilter === "Ultrasound scans") return [];
    return signaturePackages.filter(
      ({ name, summary }) =>
        !search ||
        name.toLocaleLowerCase().includes(search) ||
        summary.toLocaleLowerCase().includes(search),
    );
  }, [activeFilter, searchQuery]);

  const matchingPackages = [...filteredHealthPackages, ...filteredSignaturePackages];

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="scroll-mt-20 bg-background px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,420px)] md:items-end">
          <div>
            <p className="mb-3 text-sm font-bold uppercase text-primary">
              The right test, made easy
            </p>
            <h1
              id="services-heading"
              className="max-w-2xl font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl"
            >
              Laboratory tests and scans
            </h1>
            <p className="mt-3 max-w-xl leading-7 text-muted-foreground">
              Search the full catalog for laboratory tests, ultrasound scans and health screening
              packages.
            </p>
          </div>
          <label className="relative block w-full">
            <span className="sr-only">Search tests and packages</span>
            <Search
              aria-hidden="true"
              className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search tests or packages"
              className="h-12 pl-10"
            />
          </label>
        </div>

        <div role="group" aria-label="Filter services" className="mt-8 flex flex-wrap gap-2">
          {(
            ["All services", "Health packages", "Laboratory tests", "Ultrasound scans"] as const
          ).map((filter) => (
            <Button
              key={filter}
              type="button"
              size="sm"
              variant={activeFilter === filter ? "default" : "outline"}
              aria-pressed={activeFilter === filter}
              onClick={() => {
                setActiveFilter(filter);
                setShowAllPackages(false);
                setShowAllInvestigations(false);
              }}
              className="h-9 px-4"
            >
              {filter}
            </Button>
          ))}
        </div>

        {matchingPackages.length > 0 && (
          <div className="mt-9">
            <div className="mb-4 flex items-center justify-between gap-3">
              <h2 className="font-display text-xl font-bold text-foreground">Health packages</h2>
              <span className="text-sm text-muted-foreground">
                {matchingPackages.length} packages
              </span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {matchingPackages
                .slice(0, showAllPackages ? undefined : 6)
                .map((healthPackage, index) => (
                  <PackageCard
                    key={healthPackage.name}
                    healthPackage={healthPackage}
                    index={index}
                  />
                ))}
            </div>
            {matchingPackages.length > 6 && (
              <Button
                type="button"
                variant="outline"
                className="mt-4 w-full sm:w-auto"
                onClick={() => setShowAllPackages((showAll) => !showAll)}
              >
                {showAllPackages
                  ? "Show fewer packages"
                  : `Show all ${matchingPackages.length} packages`}
                <ChevronDown aria-hidden="true" className={showAllPackages ? "rotate-180" : ""} />
              </Button>
            )}
          </div>
        )}

        {filteredInvestigations.length > 0 && (
          <div className="mt-10">
            <div className="mb-4 flex items-center justify-between gap-3">
              <h2 className="font-display text-xl font-bold text-foreground">
                Individual investigations &amp; scans
              </h2>
              <span className="text-sm text-muted-foreground">
                {filteredInvestigations.length} services
              </span>
            </div>
            <div className="divide-y divide-border border-y border-border">
              {filteredInvestigations
                .slice(0, showAllInvestigations ? undefined : 8)
                .map((investigation) => (
                  <InvestigationRow key={investigation.name} investigation={investigation} />
                ))}
            </div>
            {filteredInvestigations.length > 8 && (
              <Button
                type="button"
                variant="outline"
                className="mt-4 w-full sm:w-auto"
                onClick={() => setShowAllInvestigations((showAll) => !showAll)}
              >
                {showAllInvestigations
                  ? "Show fewer services"
                  : `Show all ${filteredInvestigations.length} services`}
                <ChevronDown
                  aria-hidden="true"
                  className={showAllInvestigations ? "rotate-180" : ""}
                />
              </Button>
            )}
          </div>
        )}

        {matchingPackages.length === 0 && filteredInvestigations.length === 0 && (
          <div className="mt-8 border-y border-border py-12 text-center">
            <Microscope aria-hidden="true" className="mx-auto size-8 text-primary" />
            <p className="mt-3 font-semibold text-foreground">No matching services found</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Try another search, or get in touch for guidance.
            </p>
            <Button
              type="button"
              variant="link"
              onClick={() => {
                setSearchQuery("");
                setActiveFilter("All services");
              }}
            >
              Clear your search
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

function InvestigationRow({ investigation }: { investigation: Investigation }) {
  const Icon = investigation.kind === "Ultrasound scan" ? ScanLine : FlaskConical;
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 py-3.5 sm:gap-5">
      <div className="flex min-w-0 items-center gap-3">
        <span className="grid size-9 shrink-0 place-items-center rounded-md bg-secondary text-primary">
          <Icon aria-hidden="true" className="size-4" />
        </span>
        <span className="min-w-0">
          <span className="block font-medium text-foreground">{investigation.name}</span>
          <span className="mt-0.5 block text-xs text-muted-foreground">
            {investigation.category}
          </span>
        </span>
      </div>
      <Button asChild variant="outline" size="sm" className="shrink-0">
        <a href={appointmentHref(investigation.name)} aria-label={`Request ${investigation.name}`}>
          Request <ChevronRight aria-hidden="true" />
        </a>
      </Button>
    </div>
  );
}
