import { ArrowRight, MessageCircleQuestionMark, Phone } from "lucide-react";

import { SocialLinks } from "@/components/SocialLinks";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { pageFiles } from "@/lib/mpearl-pages";
import { clinic, faqs, quickLinks } from "@/lib/mpearl-site";

export function FaqsPage() {
  return (
    <>
      <section
        id="faqs"
        aria-labelledby="faqs-heading"
        className="scroll-mt-20 bg-background px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <div className="lg:py-4">
            <p className="mb-3 inline-flex items-center gap-2 text-sm font-bold uppercase text-primary">
              <MessageCircleQuestionMark aria-hidden="true" className="size-4" />
              FAQs
            </p>
            <h1
              id="faqs-heading"
              className="max-w-lg font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl"
            >
              Quick answers before you come in.
            </h1>
            <p className="mt-4 max-w-md leading-7 text-muted-foreground">
              A few things people often ask about booking, location and services at Mpearl.
            </p>
            <nav aria-label="Quick links" className="mt-8">
              <p className="text-sm font-bold text-foreground">Quick links</p>
              <ul className="mt-3 grid gap-2">
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

      <section
        aria-labelledby="faqs-contact-heading"
        className="border-y border-border bg-secondary px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2
              id="faqs-contact-heading"
              className="font-display text-2xl font-bold leading-tight sm:text-3xl"
            >
              Still have a question?
            </h2>
            <p className="mt-3 max-w-xl leading-7 text-muted-foreground">
              Call the team, or send an appointment request and they will help you choose.
            </p>
            <div className="mt-4 grid gap-2 text-sm">
              {clinic.phones.map((phone) => (
                <a
                  key={phone.href}
                  href={phone.href}
                  className="inline-flex items-center gap-2 font-medium text-foreground hover:text-primary"
                >
                  <Phone aria-hidden="true" className="size-4" /> {phone.display}
                </a>
              ))}
              <a
                href={`mailto:${clinic.email}`}
                className="text-muted-foreground hover:text-primary"
              >
                {clinic.email}
              </a>
            </div>
            <SocialLinks className="mt-4" />
          </div>
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground shadow-none hover:bg-accent/90 sm:shrink-0"
          >
            <a href={pageFiles.appointments}>
              Request an appointment <ArrowRight aria-hidden="true" />
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}
