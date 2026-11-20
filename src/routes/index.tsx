import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronRight,
  Clock3,
  Dna,
  FlaskConical,
  HeartPulse,
  MapPin,
  Menu,
  Microscope,
  Phone,
  ScanLine,
  Search,
  ShieldCheck,
  X,
} from "lucide-react";
import { useMemo, useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createAppointmentMessage } from "@/lib/mpearl-booking";
import {
  appointmentKinds,
  healthPackages,
  investigations,
  serviceCatalog,
  signaturePackages,
  type HealthPackage,
  type Investigation,
} from "@/lib/mpearl-data";
import mpearlLogo from "@/assets/mpearl-clinical-laboratory-logo.jpeg.asset.json";
import labImage from "@/assets/mpearl-clinical-laboratory.jpg";

const whatsappNumber = "2349046403013";

type ServiceFilter = "All services" | "Health packages" | "Laboratory tests" | "Ultrasound scans";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mpearl Clinical Laboratory & Diagnostics | Surulere, Lagos" },
      {
        name: "description",
        content:
          "Request an appointment for a laboratory test, health screening package or ultrasound scan at Mpearl Clinical Laboratory, 78 Bode Thomas Street, Surulere, Lagos.",
      },
      { property: "og:title", content: "Mpearl Clinical Laboratory & Diagnostics" },
      {
        property: "og:description",
        content:
          "Request laboratory tests, health screening packages and ultrasound scans at Mpearl in Surulere, Lagos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MpearlHome,
});

function MpearlHome() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<ServiceFilter>("All services");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAllServices, setShowAllServices] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [requestSent, setRequestSent] = useState(false);

  const filteredInvestigations = useMemo(() => {
    const search = searchQuery.trim().toLocaleLowerCase();
    return investigations.filter((investigation) => {
      const isVisibleType =
        activeFilter === "All services" ||
        (activeFilter === "Laboratory tests" && investigation.kind === "Laboratory test") ||
        (activeFilter === "Ultrasound scans" && investigation.kind === "Ultrasound scan");
      return isVisibleType && (!search || investigation.name.toLocaleLowerCase().includes(search) || investigation.category.toLocaleLowerCase().includes(search));
    });
  }, [activeFilter, searchQuery]);

  const filteredHealthPackages = useMemo(() => {
    const search = searchQuery.trim().toLocaleLowerCase();
    if (activeFilter === "Laboratory tests" || activeFilter === "Ultrasound scans") return [];
    return healthPackages.filter(({ name, summary }) =>
      !search || name.toLocaleLowerCase().includes(search) || summary.toLocaleLowerCase().includes(search),
    );
  }, [activeFilter, searchQuery]);

  const filteredSignaturePackages = useMemo(() => {
    const search = searchQuery.trim().toLocaleLowerCase();
    if (activeFilter === "Laboratory tests" || activeFilter === "Ultrasound scans") return [];
    return signaturePackages.filter(({ name, summary }) =>
      !search || name.toLocaleLowerCase().includes(search) || summary.toLocaleLowerCase().includes(search),
    );
  }, [activeFilter, searchQuery]);

  const handleAppointmentRequest = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const serviceName = String(form.get("service") ?? "");
    const service = serviceCatalog.find((item) => item.name === serviceName);

    if (!serviceName || !service) {
      document.getElementById("appointment-service")?.focus();
      return;
    }

    const message = createAppointmentMessage({
      name: String(form.get("name") ?? ""),
      phone: String(form.get("phone") ?? ""),
      service: service.name,
      preferredDate: String(form.get("date") ?? ""),
      notes: String(form.get("notes") ?? ""),
    });
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setRequestSent(true);
  };

  const chooseService = (serviceName: string) => {
    setSelectedService(serviceName);
    document.getElementById("appointment-service")?.scrollIntoView({ behavior: "smooth", block: "center" });
    window.setTimeout(() => document.getElementById("appointment-service")?.focus(), 350);
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="bg-primary px-4 py-2.5 text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 text-center text-xs font-medium sm:text-sm">
          <MapPin aria-hidden="true" className="size-4 shrink-0 text-leaf" />
          <span>78 Bode Thomas Street, Surulere, Lagos</span>
          <span className="hidden sm:inline">· Opposite Chicken Republic, same building as Konga</span>
        </div>
      </div>

      <header className="relative z-20 border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-6 lg:flex lg:justify-between lg:px-8">
          <a href="#home" aria-label="Mpearl home" className="flex min-w-0 items-center gap-3">
            <img className="h-12 w-12 shrink-0 rounded-full object-cover" src={mpearlLogo.url} alt="" />
            <span className="min-w-0">
              <span className="block truncate font-display text-xl font-black leading-none text-primary sm:text-2xl">MPEARL</span>
              <span className="mt-1 block text-[9px] font-bold uppercase leading-tight text-muted-foreground sm:text-[10px]">
                Clinical Laboratory<br className="sm:hidden" /> &amp; Diagnostics
              </span>
            </span>
          </a>

          <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
            <a className="text-sm font-medium text-foreground transition-colors hover:text-primary" href="#services">Our services</a>
            <a className="text-sm font-medium text-foreground transition-colors hover:text-primary" href="#packages">Health packages</a>
            <a className="text-sm font-medium text-foreground transition-colors hover:text-primary" href="#visit">Visit us</a>
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="hidden px-5 sm:inline-flex">
              <a href="#book">Request an appointment <ArrowRight aria-hidden="true" /></a>
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((current) => !current)}
              className="lg:hidden"
            >
              {mobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </Button>
          </div>
        </div>
        {mobileMenuOpen && (
          <nav aria-label="Mobile navigation" className="grid gap-1 border-t border-border bg-background px-4 py-3 shadow-md lg:hidden">
            <a onClick={closeMobileMenu} className="rounded-md px-3 py-3 text-sm font-medium hover:bg-secondary" href="#services">Our services</a>
            <a onClick={closeMobileMenu} className="rounded-md px-3 py-3 text-sm font-medium hover:bg-secondary" href="#packages">Health packages</a>
            <a onClick={closeMobileMenu} className="rounded-md px-3 py-3 text-sm font-medium hover:bg-secondary" href="#visit">Visit us</a>
            <Button asChild className="mt-1">
              <a onClick={closeMobileMenu} href="#book">Request an appointment <ArrowRight aria-hidden="true" /></a>
            </Button>
          </nav>
        )}
      </header>

      <section id="home" aria-labelledby="hero-heading" className="relative isolate flex min-h-[430px] items-center overflow-hidden bg-primary sm:min-h-[450px] lg:min-h-[485px]">
        <img src={labImage} alt="A Mpearl laboratory scientist carefully examines a blood sample" className="absolute inset-0 -z-20 h-full w-full object-cover hero-image-shift" />
        <div aria-hidden="true" className="hero-scrim absolute inset-0 -z-10" />
        <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
          <div className="mpearl-reveal max-w-2xl">
            <p className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-leaf sm:text-base">
              <span className="h-px w-7 bg-leaf" />
              CAREFULLY DONE. CLOSE TO HOME.
            </p>
            <h1 id="hero-heading" className="max-w-xl font-display text-4xl font-bold leading-[1.08] text-primary-foreground sm:text-5xl lg:text-6xl">
              Clear answers begin with good care.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-primary-foreground/90 sm:text-lg sm:leading-8">
              Laboratory investigations, thoughtful health packages and ultrasound scans — all in one welcoming place in Surulere.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="bg-accent text-accent-foreground shadow-none hover:bg-accent/90">
                <a href="#book">Request an appointment <ArrowRight aria-hidden="true" /></a>
              </Button>
              <Button asChild variant="link" className="h-11 text-primary-foreground hover:text-leaf">
                <a href="#services">Explore our services <ArrowDown aria-hidden="true" /></a>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-primary-foreground/90">
              <span className="inline-flex items-center gap-2"><ShieldCheck aria-hidden="true" className="size-4 text-leaf" /> Professional laboratory care</span>
              <span className="inline-flex items-center gap-2"><MapPin aria-hidden="true" className="size-4 text-leaf" /> Easy-to-find Surulere location</span>
            </div>
          </div>
        </div>
        <a aria-label="Explore Mpearl services" href="#services" className="absolute bottom-6 right-6 hidden size-11 items-center justify-center rounded-full border border-primary-foreground/30 text-primary-foreground transition-colors hover:bg-primary-foreground/10 sm:flex">
          <ArrowDown aria-hidden="true" className="size-5" />
        </a>
      </section>

      <section aria-label="Mpearl at a glance" className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-border px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8 lg:px-12">
          <div className="flex items-center gap-4 py-5 sm:justify-center sm:py-6">
            <span className="grid size-11 shrink-0 place-items-center rounded-md bg-secondary text-primary"><FlaskConical aria-hidden="true" className="size-5" /></span>
            <div><p className="font-semibold text-foreground">Laboratory investigations</p><p className="mt-1 text-sm text-muted-foreground">A wide range of diagnostic tests</p></div>
          </div>
          <div className="flex items-center gap-4 py-5 sm:justify-center sm:py-6 sm:pl-5">
            <span className="grid size-11 shrink-0 place-items-center rounded-md bg-accent text-accent-foreground"><HeartPulse aria-hidden="true" className="size-5" /></span>
            <div><p className="font-semibold text-foreground">Health screening packages</p><p className="mt-1 text-sm text-muted-foreground">Screening for different life stages</p></div>
          </div>
          <div className="flex items-center gap-4 py-5 sm:justify-center sm:py-6 sm:pl-5">
            <span className="grid size-11 shrink-0 place-items-center rounded-md bg-leaf text-leaf-foreground"><ScanLine aria-hidden="true" className="size-5" /></span>
            <div><p className="font-semibold text-foreground">Ultrasound scans</p><p className="mt-1 text-sm text-muted-foreground">Imaging for a range of needs</p></div>
          </div>
        </div>
      </section>

      <section id="services" aria-labelledby="services-heading" className="scroll-mt-20 bg-background px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,420px)] md:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase text-primary">The right test, made easy</p>
              <h2 id="services-heading" className="max-w-2xl font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">Find a service that works for you.</h2>
              <p className="mt-3 max-w-xl leading-7 text-muted-foreground">From individual laboratory investigations to full health screenings and scans.</p>
            </div>
            <label className="relative block w-full">
              <span className="sr-only">Search tests and packages</span>
              <Search aria-hidden="true" className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} placeholder="Search tests or packages" className="h-12 pl-10" />
            </label>
          </div>

          <div role="group" aria-label="Filter services" className="mt-8 flex flex-wrap gap-2">
            {(["All services", "Health packages", "Laboratory tests", "Ultrasound scans"] as const).map((filter) => (
              <Button key={filter} type="button" size="sm" variant={activeFilter === filter ? "default" : "outline"} aria-pressed={activeFilter === filter} onClick={() => { setActiveFilter(filter); setShowAllServices(false); }} className="h-9 px-4">{filter}</Button>
            ))}
          </div>

          {filteredHealthPackages.length > 0 && (
            <div className="mt-9">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h3 className="font-display text-xl font-bold text-foreground">Health packages</h3>
                <span className="text-sm text-muted-foreground">{filteredHealthPackages.length + filteredSignaturePackages.length} packages</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[...filteredHealthPackages, ...filteredSignaturePackages].slice(0, showAllServices ? undefined : 6).map((healthPackage, index) => (
                  <PackageCard key={healthPackage.name} healthPackage={healthPackage} index={index} onBook={chooseService} />
                ))}
              </div>
              {[...filteredHealthPackages, ...filteredSignaturePackages].length > 6 && (
                <Button type="button" variant="outline" className="mt-4 w-full sm:w-auto" onClick={() => setShowAllServices((showAll) => !showAll)}>
                  {showAllServices ? "Show fewer packages" : `Show all ${filteredHealthPackages.length + filteredSignaturePackages.length} packages`}
                  <ChevronDown aria-hidden="true" className={showAllServices ? "rotate-180" : ""} />
                </Button>
              )}
            </div>
          )}

          {filteredInvestigations.length > 0 && (
            <div className="mt-10">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h3 className="font-display text-xl font-bold text-foreground">Individual investigations &amp; scans</h3>
                <span className="text-sm text-muted-foreground">{filteredInvestigations.length} services</span>
              </div>
              <div className="divide-y divide-border border-y border-border">
                {filteredInvestigations.slice(0, showAllServices ? undefined : 8).map((investigation) => (
                  <InvestigationRow key={investigation.name} investigation={investigation} onBook={chooseService} />
                ))}
              </div>
              {filteredInvestigations.length > 8 && (
                <Button type="button" variant="outline" className="mt-4 w-full sm:w-auto" onClick={() => setShowAllServices((showAll) => !showAll)}>
                  {showAllServices ? "Show fewer services" : `Show all ${filteredInvestigations.length} services`}
                  <ChevronDown aria-hidden="true" className={showAllServices ? "rotate-180" : ""} />
                </Button>
              )}
            </div>
          )}

          {filteredHealthPackages.length === 0 && filteredSignaturePackages.length === 0 && filteredInvestigations.length === 0 && (
            <div className="mt-8 border-y border-border py-12 text-center">
              <Microscope aria-hidden="true" className="mx-auto size-8 text-primary" />
              <p className="mt-3 font-semibold text-foreground">No matching services found</p>
              <p className="mt-1 text-sm text-muted-foreground">Try another search, or get in touch for guidance.</p>
              <Button type="button" variant="link" onClick={() => { setSearchQuery(""); setActiveFilter("All services"); }}>Clear your search</Button>
            </div>
          )}
        </div>
      </section>

      <section id="packages" aria-labelledby="signature-heading" className="scroll-mt-20 bg-leaf px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-7 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase text-leaf-foreground">A little more peace of mind</p>
              <h2 id="signature-heading" className="max-w-lg font-display text-3xl font-bold leading-tight text-leaf-foreground sm:text-4xl">Meet the Mpearl Signature packages.</h2>
            </div>
            <p className="max-w-xl leading-7 text-leaf-foreground/80">More than a check-up. Choose a deeper look at your health, with your choice of specialised investigations and appropriate ultrasound scans.</p>
          </div>
          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {signaturePackages.map((healthPackage, index) => (
              <PackageCard key={healthPackage.name} healthPackage={healthPackage} index={index} featured onBook={chooseService} />
            ))}
          </div>
          <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-leaf-foreground/20 pt-6">
            <p className="max-w-2xl text-sm leading-6 text-leaf-foreground/80">Not sure which package is right for you? Our team can help you choose.</p>
            <Button asChild variant="outline" className="border-leaf-foreground/30 bg-background text-leaf-foreground hover:bg-leaf-foreground/10">
              <a href="#book">Ask about a package <ArrowRight aria-hidden="true" /></a>
            </Button>
          </div>
        </div>
      </section>

      <section id="book" aria-labelledby="booking-heading" className="scroll-mt-20 bg-background px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <div className="lg:py-7">
            <p className="mb-3 text-sm font-bold uppercase text-primary">Your next step</p>
            <h2 id="booking-heading" className="max-w-lg font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">Request an appointment.</h2>
            <p className="mt-4 max-w-lg leading-7 text-muted-foreground">Share the service you are interested in and a day that suits you. We will help confirm the details directly with you.</p>
            <ul className="mt-7 grid gap-4 text-sm text-foreground">
              <li className="flex items-start gap-3"><span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-secondary text-primary"><Check aria-hidden="true" className="size-4" /></span><span>Choose from laboratory tests, screening packages or scans.</span></li>
              <li className="flex items-start gap-3"><span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-secondary text-primary"><Check aria-hidden="true" className="size-4" /></span><span>Your request opens a WhatsApp message for you to review and send.</span></li>
              <li className="flex items-start gap-3"><span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-secondary text-primary"><Check aria-hidden="true" className="size-4" /></span><span>No online payment or account is needed to make a request.</span></li>
            </ul>
            <p className="mt-7 border-l-2 border-primary pl-4 text-sm leading-6 text-muted-foreground">Your details are sent only when you choose to send the WhatsApp message.</p>
          </div>

          <form onSubmit={handleAppointmentRequest} className="border-y border-border py-6 sm:border sm:px-7 sm:py-7">
            <div className="mb-6 flex items-start gap-3">
              <span className="grid size-11 shrink-0 place-items-center rounded-md bg-secondary text-primary"><FlaskConical aria-hidden="true" className="size-5" /></span>
              <div className="min-w-0"><h3 className="font-display text-lg font-bold text-foreground">Tell us what you need</h3><p className="mt-1 text-sm text-muted-foreground">We’ll take it from there.</p></div>
            </div>
            <div className="grid gap-x-4 gap-y-5 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="appointment-name">Your name</Label>
                <Input id="appointment-name" name="name" autoComplete="name" placeholder="Full name" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="appointment-phone">Phone number</Label>
                <Input id="appointment-phone" name="phone" type="tel" autoComplete="tel" placeholder="e.g. 080 1234 5678" required />
              </div>
              <div className="grid gap-2 sm:col-span-2">
                <Label htmlFor="appointment-service">Test, scan or package</Label>
                <select id="appointment-service" name="service" required value={selectedService} onChange={(event) => { setSelectedService(event.target.value); setRequestSent(false); }} className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  <option value="" disabled>Select a service</option>
                  {appointmentKinds.map((kind) => (
                    <optgroup key={kind} label={kind}>
                      {serviceCatalog.filter((service) =>
                        kind === "Health package" ? service.category === "Health packages" : service.kind === kind,
                      ).map(({ name }) => <option key={name} value={name}>{name}</option>)}
                    </optgroup>
                  ))}
                  <option value="Not sure — please advise">Not sure — please advise</option>
                </select>
              </div>
              <div className="grid gap-2 sm:col-span-2">
                <Label htmlFor="appointment-date">Preferred date <span className="font-normal text-muted-foreground">(optional)</span></Label>
                <Input id="appointment-date" name="date" type="date" />
              </div>
              <div className="grid gap-2 sm:col-span-2">
                <Label htmlFor="appointment-notes">Anything else? <span className="font-normal text-muted-foreground">(optional)</span></Label>
                <Textarea id="appointment-notes" name="notes" rows={3} placeholder="A note for the Mpearl team" className="resize-y" />
              </div>
              <div className="sm:col-span-2">
                <Button type="submit" size="lg" className="w-full">
                  Continue to WhatsApp <ArrowUpRight aria-hidden="true" />
                </Button>
                {requestSent && <p role="status" className="mt-3 text-center text-sm font-medium text-primary">Your WhatsApp request is ready. Please send the message to contact the Mpearl team.</p>}
              </div>
            </div>
          </form>
        </div>
      </section>

      <section id="visit" aria-labelledby="visit-heading" className="scroll-mt-20 bg-primary px-5 py-14 text-primary-foreground sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase text-leaf">Find us in Surulere</p>
            <h2 id="visit-heading" className="max-w-2xl font-display text-2xl font-bold leading-tight sm:text-3xl">A friendly team, right where you need us.</h2>
            <p className="mt-3 max-w-xl leading-7 text-primary-foreground/80">78 Bode Thomas Street, Surulere, Lagos. Opposite Chicken Republic, in the same building as Konga, on the first floor.</p>
          </div>
          <Button asChild size="lg" className="bg-accent text-accent-foreground shadow-none hover:bg-accent/90">
            <a href="https://maps.google.com/?q=78+Bode+Thomas+Street+Surulere+Lagos" target="_blank" rel="noreferrer">Get directions <ArrowUpRight aria-hidden="true" /></a>
          </Button>
        </div>
      </section>

      <footer className="bg-background px-5 py-9 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <a href="#home" className="flex items-center gap-3" aria-label="Mpearl home">
            <img src={mpearlLogo.url} alt="" className="size-10 rounded-full object-cover" />
            <span><span className="block font-display font-black leading-none text-primary">MPEARL</span><span className="mt-1 block text-[10px] text-muted-foreground">Clinical Laboratory &amp; Diagnostics</span></span>
          </a>
          <div className="grid gap-2 text-sm sm:text-right">
            <a href="tel:+2349046403013" className="inline-flex items-center gap-2 font-medium hover:text-primary sm:justify-end"><Phone aria-hidden="true" className="size-4" /> 0904 640 3013</a>
            <a href="tel:+2347060991444" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary sm:justify-end"><Phone aria-hidden="true" className="size-4" /> 0706 099 1444</a>
            <a href="mailto:mpearldiagnostics@gmail.com" className="text-muted-foreground hover:text-primary">mpearldiagnostics@gmail.com</a>
          </div>
        </div>
        <div className="mx-auto mt-7 max-w-7xl border-t border-border pt-5 text-xs text-muted-foreground">© {new Date().getFullYear()} Mpearl Clinical Laboratory &amp; Diagnostics Services. All rights reserved.</div>
      </footer>

      <Button asChild size="icon" aria-label="Call Mpearl" className="fixed bottom-5 right-5 z-30 size-12 rounded-full shadow-lg sm:hidden">
        <a href="tel:+2349046403013"><Phone aria-hidden="true" className="size-5" /></a>
      </Button>
    </main>
  );
}

function PackageCard({ healthPackage, index, onBook, featured = false }: { healthPackage: HealthPackage; index: number; onBook: (name: string) => void; featured?: boolean }) {
  return (
    <article className={`flex min-w-0 flex-col border p-5 ${featured ? "border-leaf-foreground/20 bg-background" : "border-border bg-card"}`}>
      <div className="flex items-center gap-3">
        <span className={`grid size-9 shrink-0 place-items-center rounded-md ${featured ? "bg-leaf text-leaf-foreground" : "bg-secondary text-primary"}`}>
          {featured ? <Dna aria-hidden="true" className="size-4" /> : index % 2 === 0 ? <HeartPulse aria-hidden="true" className="size-4" /> : <FlaskConical aria-hidden="true" className="size-4" />}
        </span>
        <p className="min-w-0 font-display font-bold text-foreground">{healthPackage.name}</p>
      </div>
      <p className="mt-4 min-h-12 text-sm leading-6 text-muted-foreground">{healthPackage.summary}</p>
      <details className="group mt-3">
        <summary className="flex cursor-pointer list-none items-center gap-1 py-2 text-sm font-medium text-primary [&::-webkit-details-marker]:hidden">
          What’s included <ChevronDown aria-hidden="true" className="size-4 transition-transform group-open:rotate-180" />
        </summary>
        <ul className="grid gap-2 border-l border-border py-2 pl-3 text-sm leading-5 text-muted-foreground">
          {healthPackage.includes.map((test) => <li key={test}>{test}</li>)}
        </ul>
      </details>
      <div className="mt-auto border-t border-border pt-3">
        <Button type="button" variant="link" className="h-auto px-0 py-2" onClick={() => onBook(healthPackage.name)}>
          Request this package <ChevronRight aria-hidden="true" />
        </Button>
      </div>
    </article>
  );
}

function InvestigationRow({ investigation, onBook }: { investigation: Investigation; onBook: (name: string) => void }) {
  const Icon = investigation.kind === "Ultrasound scan" ? ScanLine : FlaskConical;
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 py-3.5 sm:gap-5">
      <div className="flex min-w-0 items-center gap-3">
        <span className="grid size-9 shrink-0 place-items-center rounded-md bg-secondary text-primary"><Icon aria-hidden="true" className="size-4" /></span>
        <span className="min-w-0">
          <span className="block font-medium text-foreground">{investigation.name}</span>
          <span className="mt-0.5 block text-xs text-muted-foreground">{investigation.category}</span>
        </span>
      </div>
      <Button type="button" variant="outline" size="sm" className="shrink-0" onClick={() => onBook(investigation.name)}>
        <span className="hidden sm:inline">Request test</span><span className="sm:hidden">Request</span><ChevronRight aria-hidden="true" />
      </Button>
    </div>
  );
}