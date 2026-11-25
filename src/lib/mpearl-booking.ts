export interface AppointmentRequest {
  name: string;
  phone: string;
  service: string;
  preferredDate?: string;
  notes?: string;
}

export function createAppointmentMessage(request: AppointmentRequest): string {
  const preferredDate = request.preferredDate
    ? new Intl.DateTimeFormat("en-NG", { dateStyle: "long" }).format(
        new Date(`${request.preferredDate}T00:00:00`),
      )
    : "Flexible";

  return [
    "Hello Mpearl, I’d like to request an appointment.",
    "",
    `Name: ${request.name.trim()}`,
    `Phone: ${request.phone.trim()}`,
    `Requested service: ${request.service}`,
    `Preferred date: ${preferredDate}`,
    ...(request.notes?.trim() ? [`Notes: ${request.notes.trim()}`] : []),
  ].join("\n");
}
