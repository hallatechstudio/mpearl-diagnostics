import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PackageCard } from "@/components/PackageCard";
import { healthPackages, signaturePackages } from "@/lib/mpearl-data";
import { pageFiles } from "@/lib/mpearl-pages";

export function PackagesPage() {
  return (
    <>
      <section
        aria-labelledby="packages-heading"
        className="bg-background px-5 py-16 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <h1 id="packages-heading" className="font-display text-3xl font-bold sm:text-4xl">
            Health screening packages
          </h1>
          <p className="mt-3 max-w-xl leading-7 text-muted-foreground">
            Compare the tests included in each package and choose one to request an appointment.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {healthPackages.map((healthPackage, index) => (
              <PackageCard key={healthPackage.name} healthPackage={healthPackage} index={index} />
            ))}
          </div>
        </div>
      </section>
      <section
        id="packages"
        aria-labelledby="signature-heading"
        className="scroll-mt-20 bg-leaf px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-7 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase text-leaf-foreground">
                A little more peace of mind
              </p>
              <h2
                id="signature-heading"
                className="max-w-lg font-display text-3xl font-bold leading-tight text-leaf-foreground sm:text-4xl"
              >
                Meet the Mpearl Signature packages.
              </h2>
            </div>
            <p className="max-w-xl leading-7 text-leaf-foreground/80">
              More than a check-up. Choose a deeper look at your health, with your choice of
              specialised investigations and appropriate ultrasound scans.
            </p>
          </div>
          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {signaturePackages.map((healthPackage, index) => (
              <PackageCard
                key={healthPackage.name}
                healthPackage={healthPackage}
                index={index}
                featured
              />
            ))}
          </div>
          <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-leaf-foreground/20 pt-6">
            <p className="max-w-2xl text-sm leading-6 text-leaf-foreground/80">
              Not sure which package is right for you? Our team can help you choose.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-leaf-foreground/30 bg-background text-leaf-foreground hover:bg-leaf-foreground/10"
            >
              <a href={pageFiles.appointments}>
                Ask about a package <ArrowRight aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
