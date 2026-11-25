import {
  ArrowRight,
  Compass,
  FlaskConical,
  HeartPulse,
  MapPin,
  ScanLine,
  ShieldCheck,
} from "lucide-react";

import labImage from "@/assets/mpearl-clinical-laboratory.jpg";
import { PackageCard } from "@/components/PackageCard";
import { SocialLinks } from "@/components/SocialLinks";
import { VisitPanel } from "@/components/VisitPanel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { healthPackages, investigations, signaturePackages } from "@/lib/mpearl-data";
import { pageFiles } from "@/lib/mpearl-pages";
import { clinic, faqs, quickLinks } from "@/lib/mpearl-site";

const featuredPackageNames = [
  "Wellness Package",
  "Pre-marital Screening Package",
  "Executive / Corporate Wellness",
];

const featuredPackages = featuredPackageNames.flatMap((name) => {
  const healthPackage = healthPackages.find((item) => item.name === name);
  return healthPackage ? [healthPackage] : [];
});

const laboratoryCount = investigations.filter((item) => item.kind === "Laboratory test").length;
const ultrasoundCount = investigations.filter((item) => item.kind === "Ultrasound scan").length;

const serviceHighlights = [
  {
    title: "Laboratory investigations",
    glance: "A wide range of diagnostic tests",
    detail: `${laboratoryCount} tests, from blood counts and infection screens to hormones, fertility and cultures.`,
    href: pageFiles.services,
    icon: FlaskConical,
  },
  {
    title: "Health screening packages",
    glance: "Screening for different life stages",
    detail: `${healthPackages.length} packages for wellness, work, couples, children and later life, plus ${signaturePackages.length} Signature packages.`,
    href: pageFiles.packages,
    icon: HeartPulse,
  },
  {
    title: "Ultrasound scans",
    glance: "Imaging for a range of needs",
    detail: `${ultrasoundCount} scans, including obstetric, pelvic, abdominal, breast, prostate and thyroid imaging.`,
    href: `${pageFiles.services}?type=ultrasound`,
    icon: ScanLine,
  },
];

const visitSteps = [
  {
    title: "Choose",
    detail: "Browse a test, a scan or a screening package. If you are unsure, the team can advise.",
  },
  {
    title: "Request",
    detail: "Send an appointment request on WhatsApp. Review the message before it goes out.",
  },
  {
    title: "Visit",
    detail: "Come to the first floor at 78 Bode Thomas Street, opposite Chicken Republic.",
  },
];

export function HomePage() {
  return (
    <>
      <section
        id="home"
        aria-labelledby="hero-heading"
        className="relative isolate flex min-h-[520px] items-center overflow-hidden bg-primary sm:min-h-[560px]"
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
              Laboratory tests, health screening packages and ultrasound scans on the first floor at
              78 Bode Thomas Street, Surulere.
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
                <MapPin aria-hidden="true" className="size-4 text-leaf" /> Opposite Chicken
                Republic, same building as Konga
              </span>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Mpearl at a glance" className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-border px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8 lg:px-12">
          {serviceHighlights.map(({ title, glance, href, icon: Icon }) => (
            <a
              key={title}
              href={href}
              className="flex items-center gap-4 py-5 hover:bg-secondary/50 sm:px-5 sm:py-6"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-md bg-secondary text-primary">
                <Icon aria-hidden="true" className="size-5" />
              </span>
              <div>
                <p className="font-semibold text-foreground">{title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{glance}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="purpose-heading"
        className="bg-background px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
      >
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-bold uppercase text-primary">Why Mpearl</p>
            <h2
              id="purpose-heading"
              className="font-display text-3xl font-bold leading-tight sm:text-4xl"
            >
              Care that stays close to the people who need it.
            </h2>
            <p className="mt-4 max-w-md leading-7 text-muted-foreground">
              Mpearl is a clinical laboratory and diagnostic service in Surulere. Tests, screening
              packages and ultrasound scans are available in one place, on Bode Thomas Street.
            </p>
            <Button asChild variant="outline" className="mt-6">
              <a href={pageFiles.about}>
                More about Mpearl <ArrowRight aria-hidden="true" />
              </a>
            </Button>
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
        aria-labelledby="visit-steps-heading"
        className="border-y border-border bg-secondary px-5 py-14 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <h2 id="visit-steps-heading" className="font-display text-2xl font-bold sm:text-3xl">
            How a visit works
          </h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-3">
            {visitSteps.map((step, index) => (
              <li key={step.title} className="bg-card p-6">
                <p className="text-sm font-bold text-primary">0{index + 1}</p>
                <h3 className="mt-2 font-display text-xl font-bold">{step.title}</h3>
                <p className="mt-2 leading-7 text-muted-foreground">{step.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        aria-labelledby="home-services-heading"
        className="bg-background px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-sm font-bold uppercase text-primary">Services</p>
              <h2
                id="home-services-heading"
                className="font-display text-3xl font-bold leading-tight sm:text-4xl"
              >
                Tests, scans and screening
              </h2>
            </div>
            <Button asChild variant="outline">
              <a href={pageFiles.services}>
                Browse the catalog <ArrowRight aria-hidden="true" />
              </a>
            </Button>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {serviceHighlights.map(({ title, detail, href, icon: Icon }) => (
              <a
                key={title}
                href={href}
                className="flex flex-col border border-border bg-card p-6 hover:border-primary"
              >
                <span className="grid size-11 place-items-center rounded-md bg-secondary text-primary">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-xl font-bold">{title}</h3>
                <p className="mt-2 flex-1 leading-7 text-muted-foreground">{detail}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  View <ArrowRight aria-hidden="true" className="size-4" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="home-packages-heading"
        className="bg-leaf px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-sm font-bold uppercase text-leaf-foreground">
                Healthcare packages
              </p>
              <h2
                id="home-packages-heading"
                className="max-w-xl font-display text-3xl font-bold leading-tight text-leaf-foreground sm:text-4xl"
              >
                Screening for the reason you are coming in.
              </h2>
            </div>
            <Button
              asChild
              variant="outline"
              className="border-leaf-foreground/30 bg-background text-leaf-foreground hover:bg-background/80"
            >
              <a href={pageFiles.packages}>
                All packages <ArrowRight aria-hidden="true" />
              </a>
            </Button>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {featuredPackages.map((healthPackage, index) => (
              <PackageCard key={healthPackage.name} healthPackage={healthPackage} index={index} />
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-6 text-leaf-foreground/80">
            Signature packages add ultrasound and a deeper executive check. Silver, Gold and
            Platinum are listed with the full package catalog.
          </p>
        </div>
      </section>

      <section
        aria-labelledby="follow-heading"
        className="border-b border-border bg-secondary px-5 py-14 sm:px-8 lg:px-12"
      >
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6">
          <div>
            <p className="mb-2 text-sm font-bold uppercase text-primary">Follow us</p>
            <h2 id="follow-heading" className="font-display text-2xl font-bold sm:text-3xl">
              Find Mpearl on social media.
            </h2>
            <p className="mt-2 max-w-xl leading-7 text-muted-foreground">
              Follow along on Instagram and TikTok for updates from the laboratory.
            </p>
          </div>
          <SocialLinks />
        </div>
      </section>

      <section
        id="visit-us"
        aria-labelledby="home-visit-heading"
        className="scroll-mt-20 bg-muted px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-sm font-bold uppercase text-primary">Visit us</p>
              <h2
                id="home-visit-heading"
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
        </div>
      </section>

      <section
        id="faqs"
        aria-labelledby="faq-heading"
        className="scroll-mt-20 bg-background px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase text-primary">FAQs</p>
            <h2
              id="faq-heading"
              className="font-display text-3xl font-bold leading-tight sm:text-4xl"
            >
              Quick answers before you come in.
            </h2>
            <nav aria-label="Quick links" className="mt-8">
              <ul className="grid gap-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary"
                    >
                      <ArrowRight aria-hidden="true" className="size-4 text-primary" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <Accordion type="single" collapsible className="border-t border-border">
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger className="text-base font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="leading-7 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
