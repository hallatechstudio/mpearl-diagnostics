import { pageFiles } from "@/lib/mpearl-pages";

export const clinic = {
  name: "Mpearl Clinical Laboratory & Diagnostic Services",
  street: "78 Bode Thomas Street",
  area: "Surulere, Lagos",
  floor: "First floor",
  landmarks: ["Opposite Chicken Republic", "Same building as Konga", "First floor"],
  phones: [
    { display: "0904 640 3013", href: "tel:+2349046403013" },
    { display: "0706 099 1444", href: "tel:+2347060991444" },
  ],
  email: "mpearldiagnostics@gmail.com",
  mapsUrl: "https://maps.google.com/?q=78+Bode+Thomas+Street+Surulere+Lagos",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=78%20Bode%20Thomas%20Street%20Surulere%20Lagos&z=16&output=embed",
  vision:
    "A neighbourhood laboratory where people in Surulere can get careful diagnostic answers close to home.",
  mission:
    "To carry out laboratory tests, health screening and ultrasound scans with care, and to make booking, visiting and the next step straightforward.",
} as const;

export const socialProfiles = [
  {
    name: "Instagram",
    handle: "@mpearldiagnostics",
    href: "https://www.instagram.com/mpearldiagnostics/",
  },
  {
    name: "TikTok",
    handle: "@mpearldiagnostics",
    href: "https://www.tiktok.com/@mpearldiagnostics",
  },
] as const;

export const faqs = [
  {
    question: "Where is Mpearl?",
    answer:
      "Mpearl is at 78 Bode Thomas Street, Surulere, Lagos. The laboratory is on the first floor, opposite Chicken Republic, in the same building as Konga.",
  },
  {
    question: "How do I request an appointment?",
    answer:
      "Choose a laboratory test, ultrasound scan or health package, then send the request from the appointment page. It opens a WhatsApp message for you to review and send. The team confirms the visit with you.",
  },
  {
    question: "What if I am not sure which test I need?",
    answer:
      "You can still send a request. Choose “Not sure, please advise” on the appointment form and the team will help you pick a suitable test, scan or package.",
  },
  {
    question: "Which services can I book?",
    answer:
      "Laboratory investigations, ultrasound scans and health screening packages, including wellness, pre-marital, fertility and the Signature packages.",
  },
  {
    question: "How do I get directions?",
    answer:
      "Open Get directions for a map to 78 Bode Thomas Street. Look for Chicken Republic opposite the building, then Konga in the same building. Mpearl is on the first floor.",
  },
  {
    question: "Are fees shown on this website?",
    answer:
      "The catalog lists tests and packages without fees. Current fees are confirmed when you book, by phone or on WhatsApp.",
  },
] as const;

export const quickLinks = [
  { label: "Laboratory tests", href: pageFiles.services },
  { label: "Ultrasound scans", href: `${pageFiles.services}?type=ultrasound` },
  { label: "Health packages", href: pageFiles.packages },
  { label: "Signature packages", href: `${pageFiles.packages}#packages` },
  { label: "About Mpearl", href: pageFiles.about },
  { label: "FAQs", href: pageFiles.faqs },
  { label: "Visit us", href: pageFiles.visit },
  { label: "Request an appointment", href: pageFiles.appointments },
] as const;

export const values = [
  {
    title: "Careful with every result",
    detail:
      "Tests, scans and screenings are carried out with attention, so the answer you take away can be trusted.",
  },
  {
    title: "Close to home",
    detail:
      "Mpearl is a neighbourhood laboratory on Bode Thomas Street, so people in Surulere do not have to travel far for diagnostics.",
  },
  {
    title: "Straightforward to arrange",
    detail:
      "From choosing a service to requesting a visit, the next step is kept simple and clear.",
  },
] as const;

export const logoSrc = `${import.meta.env.BASE_URL}mpearl-logo.jpg`;
