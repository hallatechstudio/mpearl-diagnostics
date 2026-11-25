import { logoSrc } from "@/lib/mpearl-site";
import { cn } from "@/lib/utils";

export function BrandLogo({ className }: { className?: string }) {
  return (
    <img
      src={logoSrc}
      alt="Mpearl Clinical Laboratory & Diagnostic Services"
      className={cn("h-16 w-auto bg-white object-contain", className)}
    />
  );
}
