import { ArrowUpRight, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/SocialLinks";
import { clinic } from "@/lib/mpearl-site";

export function VisitPanel() {
  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-stretch">
      <div className="flex flex-col justify-between gap-6 border border-border bg-card p-6 sm:p-8">
        <div>
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
            <MapPin aria-hidden="true" className="size-4" />
            {clinic.area}
          </p>
          <p className="mt-3 font-display text-2xl font-bold text-foreground">{clinic.street}</p>
          <p className="mt-2 leading-7 text-muted-foreground">{clinic.landmarks.join(". ")}.</p>
          <ul className="mt-5 grid gap-2 text-sm font-medium text-foreground">
            {clinic.landmarks.map((landmark) => (
              <li key={landmark} className="flex items-center gap-2">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-primary" />
                {landmark}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-2 text-sm">
            {clinic.phones.map((phone) => (
              <a
                key={phone.href}
                href={phone.href}
                className="inline-flex items-center gap-2 font-medium hover:text-primary"
              >
                <Phone aria-hidden="true" className="size-4" /> {phone.display}
              </a>
            ))}
            <a href={`mailto:${clinic.email}`} className="text-muted-foreground hover:text-primary">
              {clinic.email}
            </a>
          </div>
          <SocialLinks />
          <Button
            asChild
            size="lg"
            className="w-full bg-accent text-accent-foreground shadow-none hover:bg-accent/90 sm:w-fit"
          >
            <a href={clinic.mapsUrl} target="_blank" rel="noreferrer">
              Get directions
              <span className="sr-only"> (opens in a new tab)</span>
              <ArrowUpRight aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
      <iframe
        title="Map of 78 Bode Thomas Street, Surulere, Lagos"
        src={clinic.mapsEmbedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="min-h-80 w-full border border-border bg-muted lg:min-h-full"
      />
    </div>
  );
}
