import { ArrowUpRight, Check, FlaskConical } from "lucide-react";
import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createAppointmentMessage } from "@/lib/mpearl-booking";
import { appointmentKinds, serviceCatalog } from "@/lib/mpearl-data";

const whatsappNumber = "2349046403013";
const undecidedService = "Not sure, please advise";

export function AppointmentsPage() {
  const [selectedService, setSelectedService] = useState(() => {
    const service = new URLSearchParams(window.location.search).get("service");
    return serviceCatalog.find(({ name }) => name === service)?.name ?? "";
  });
  const [requestSent, setRequestSent] = useState(false);

  const handleAppointmentRequest = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const serviceName = String(form.get("service") ?? "");
    if (
      serviceName !== undecidedService &&
      !serviceCatalog.some(({ name }) => name === serviceName)
    ) {
      document.getElementById("appointment-service")?.focus();
      return;
    }

    const message = createAppointmentMessage({
      name: String(form.get("name") ?? ""),
      phone: String(form.get("phone") ?? ""),
      service: serviceName,
      preferredDate: String(form.get("date") ?? ""),
      notes: String(form.get("notes") ?? ""),
    });
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setRequestSent(true);
  };

  return (
    <section
      id="book"
      aria-labelledby="booking-heading"
      className="scroll-mt-20 bg-background px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        <div className="lg:py-7">
          <p className="mb-3 text-sm font-bold uppercase text-primary">Your next step</p>
          <h1
            id="booking-heading"
            className="max-w-lg font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl"
          >
            Request an appointment
          </h1>
          <p className="mt-4 max-w-lg leading-7 text-muted-foreground">
            Share the service you are interested in and a day that suits you. We will help confirm
            the details directly with you.
          </p>
          <ul className="mt-7 grid gap-4 text-sm text-foreground">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                <Check aria-hidden="true" className="size-4" />
              </span>
              <span>Choose from laboratory tests, screening packages or scans.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                <Check aria-hidden="true" className="size-4" />
              </span>
              <span>Your request opens a WhatsApp message for you to review and send.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                <Check aria-hidden="true" className="size-4" />
              </span>
              <span>No online payment or account is needed to make a request.</span>
            </li>
          </ul>
        </div>

        <form
          onSubmit={handleAppointmentRequest}
          className="border-y border-border py-6 sm:border sm:px-7 sm:py-7"
        >
          <div className="mb-6 flex items-start gap-3">
            <span className="grid size-11 shrink-0 place-items-center rounded-md bg-secondary text-primary">
              <FlaskConical aria-hidden="true" className="size-5" />
            </span>
            <div className="min-w-0">
              <h2 className="font-display text-lg font-bold text-foreground">
                Tell us what you need
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">We’ll take it from there.</p>
            </div>
          </div>
          <div className="grid gap-x-4 gap-y-5 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="appointment-name">Your name</Label>
              <Input
                id="appointment-name"
                name="name"
                autoComplete="name"
                placeholder="Full name"
                className="h-11"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="appointment-phone">Phone number</Label>
              <Input
                id="appointment-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="e.g. 080 1234 5678"
                className="h-11"
                required
              />
            </div>
            <div className="grid gap-2 sm:col-span-2">
              <Label htmlFor="appointment-service">Test, scan or package</Label>
              <select
                id="appointment-service"
                name="service"
                required
                value={selectedService}
                onChange={(event) => {
                  setSelectedService(event.target.value);
                  setRequestSent(false);
                }}
                className="h-11 w-full min-w-0 rounded-md border border-input bg-background px-3 text-base text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:text-sm"
              >
                <option value="" disabled>
                  Select a service
                </option>
                {appointmentKinds.map((kind) => (
                  <optgroup key={kind} label={kind}>
                    {serviceCatalog
                      .filter((service) =>
                        kind === "Health package"
                          ? service.category === "Health packages"
                          : service.kind === kind && service.category !== "Health packages",
                      )
                      .map(({ name }) => (
                        <option key={name} value={name}>
                          {name}
                        </option>
                      ))}
                  </optgroup>
                ))}
                <option value={undecidedService}>{undecidedService}</option>
              </select>
            </div>
            <div className="grid gap-2 sm:col-span-2">
              <Label htmlFor="appointment-date">
                Preferred date <span className="font-normal text-muted-foreground">(optional)</span>
              </Label>
              <Input id="appointment-date" name="date" type="date" className="h-11 min-w-0" />
            </div>
            <div className="grid gap-2 sm:col-span-2">
              <Label htmlFor="appointment-notes">
                Anything else? <span className="font-normal text-muted-foreground">(optional)</span>
              </Label>
              <Textarea
                id="appointment-notes"
                name="notes"
                rows={3}
                placeholder="A note for the Mpearl team"
                className="resize-y"
              />
            </div>
            <div className="sm:col-span-2">
              <Button type="submit" size="lg" className="w-full">
                Continue to WhatsApp <ArrowUpRight aria-hidden="true" />
              </Button>
              {requestSent && (
                <p role="status" className="mt-3 text-center text-sm font-medium text-primary">
                  Your WhatsApp request is ready. Please send the message to contact the Mpearl
                  team.
                </p>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
