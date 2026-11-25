import {
  ArrowRight,
  Check,
  Compass,
  FlaskConical,
  HeartPulse,
  MapPin,
  ScanLine,
  ShieldCheck,
} from "lucide-react";

import labImage from "@/assets/mpearl-clinical-laboratory.jpg";
import { SocialLinks } from "@/components/SocialLinks";
import { VisitPanel } from "@/components/VisitPanel";
import { Button } from "@/components/ui/button";
import { healthPackages, investigations, signaturePackages } from "@/lib/mpearl-data";
import { pageFiles } from "@/lib/mpearl-pages";
import { clinic, values } from "@/lib/mpearl-site";

const laboratoryCount = investigations.filter((item) => item.kind === "Laboratory test").length;
const ultrasoundCount = investigations.filter((item) => item.kind === "Ultrasound scan").length;

const serviceHighlights = [
  {
    title: "Laboratory investigations",
    detail: `${laboratoryCount} tests, from blood counts and infection screens to hormones, fertility and cultures.`,
    href: pageFiles.services,
    icon: FlaskConical,
  },
  {
    title: "Health screening packages",
    detail: `${healthPackages.length} packages for wellness, work, couples, children and later life, plus ${signaturePackages.length} Signature packages.`,
    href: pageFiles.packages,
    icon: HeartPulse,
  },
  {
    title: "Ultrasound scans",
    detail: `${ultrasoundCount} scans, including obstetric, pelvic, abdominal, breast, prostate and thyroid imaging.`,
    href: pageFiles.services,
    icon: ScanLine,
  },
];

export function AboutPage() {
  return (
    <>
      <section
        id="about"
        aria-labelledby="about-heading"
        className="scroll-mt-20 bg-background px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase text-primary">About Mpearl</p>
            <h1
              id="about-heading"
              className="max-w-2xl font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl"
            >
              A neighbourhood laboratory in the heart of Surulere.
            </h1>
            <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
              Mpearl Clinical Laboratory &amp; Diagnostic Services carries out laboratory tests,
              health screening packages and ultrasound scans. Everything happens under one roof on
              Bode Thomas Street, close to the people who need it.
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
              <Button asChild variant="outline">
                <a href={pageFiles.services}>Browse services</a>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-foreground">
              <span className="inline-flex items-center gap-2">
                <MapPin aria-hidden="true" className="size-4 text-primary" /> {clinic.street},{" "}
                {clinic.area}
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck aria-hidden="true" className="size-4 text-primary" /> {clinic.floor},
                same building as Konga
              </span>
            </div>
          </div>
          <img
            src={labImage}
            alt="Scientist in a laboratory coat reviewing a blood sample beside a microscope"
            className="h-72 w-full border border-border object-cover sm:h-96"
          />
        </div>
      </section>

      <section
        aria-labelledby="about-purpose-heading"
        className="border-y border-border bg-secondary px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
      >
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-bold uppercase text-primary">What guides us</p>
            <h2
              id="about-purpose-heading"
              className="font-display text-3xl font-bold leading-tight sm:text-4xl"
            >
              Careful, local and easy to reach.
            </h2>
            <p className="mt-4 max-w-md leading-7 text-muted-foreground">
              Our vision and mission shape how every test, scan and screening package is handled.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <article className="border border-border bg-card p-6">
              <Compass aria-hidden="true" className="size-5 text-primary" />
              <h3 className="mt-4 font-display text-xl font-bold">Vision</h3>
              <p className="mt-3 leading-7 text-muted-foreground">{clinic.vision}</p>
            </article>
            <article className="border border-primary bg-primary p-6 text-primary-foreground">
              <ShieldCheck aria-hidden="true" className="size-5 text-leaf" />
              <h3 className="mt-4 font-display text-xl font-bold">Mission</h3>
              <p className="mt-3 leading-7 text-primary-foreground/85">{clinic.mission}</p>
            </article>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="about-values-heading"
        className="bg-background px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-bold uppercase text-primary">Our values</p>
          <h2
            id="about-values-heading"
            className="max-w-2xl font-display text-3xl font-bold leading-tight sm:text-4xl"
          >
            The things we hold to on every visit.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {values.map((value) => (
              <article key={value.title} className="border border-border bg-card p-6">
                <span className="grid size-9 place-items-center rounded-md bg-secondary text-primary">
                  <Check aria-hidden="true" className="size-4" />
                </span>
                <h3 className="mt-4 font-display text-xl font-bold">{value.title}</h3>
                <p className="mt-2 leading-7 text-muted-foreground">{value.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="about-services-heading"
        className="bg-leaf px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-bold uppercase text-leaf-foreground">What we do</p>
          <h2
            id="about-services-heading"
            className="max-w-2xl font-display text-3xl font-bold leading-tight text-leaf-foreground sm:text-4xl"
          >
            Diagnostics in one place.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {serviceHighlights.map(({ title, detail, href, icon: Icon }) => (
              <a
                key={title}
                href={href}
                className="flex flex-col border border-leaf-foreground/20 bg-background p-6 hover:border-leaf-foreground"
              >
                <span className="grid size-11 place-items-center rounded-md bg-secondary text-primary">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-foreground">{title}</h3>
                <p className="mt-2 flex-1 leading-7 text-muted-foreground">{detail}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Explore <ArrowRight aria-hidden="true" className="size-4" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="about-visit-heading"
        className="bg-muted px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-sm font-bold uppercase text-primary">Come in</p>
              <h2
                id="about-visit-heading"
                className="font-display text-3xl font-bold leading-tight sm:text-4xl"
              >
                Easy to find on Bode Thomas.
              </h2>
            </div>
            <Button asChild variant="outline" className="bg-background">
              <a href={pageFiles.visit}>
                Visit page <ArrowRight aria-hidden="true" />
              </a>
            </Button>
          </div>
          <VisitPanel />
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
            <p className="text-sm font-bold text-foreground">Follow Mpearl</p>
            <SocialLinks />
          </div>
        </div>
      </section>
    </>
  );
}
