import { VisitPanel } from "@/components/VisitPanel";
import { pageFiles } from "@/lib/mpearl-pages";

export function VisitPage() {
  return (
    <section
      id="visit"
      aria-labelledby="visit-heading"
      className="scroll-mt-20 bg-background px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-bold uppercase text-primary">Visit us</p>
        <h1
          id="visit-heading"
          className="max-w-2xl font-display text-3xl font-bold leading-tight sm:text-4xl"
        >
          Visit Mpearl in Surulere
        </h1>
        <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
          78 Bode Thomas Street, opposite Chicken Republic. Mpearl is in the same building as Konga,
          on the first floor. Call ahead or request an appointment if you would like the team to
          expect you.
        </p>
        <div className="mt-8">
          <VisitPanel />
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Questions about a test or package? See the{" "}
          <a href={`${pageFiles.home}#faqs`} className="font-medium text-primary hover:underline">
            FAQs
          </a>{" "}
          or{" "}
          <a href={pageFiles.services} className="font-medium text-primary hover:underline">
            browse services
          </a>
          .
        </p>
      </div>
    </section>
  );
}
