import { socialProfiles } from "@/lib/mpearl-site";
import { cn } from "@/lib/utils";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-none stroke-current">
      <rect x="3" y="3" width="18" height="18" rx="5" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" strokeWidth="1.8" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
      <path d="M14.2 3c.4 2.6 1.8 4.4 4.3 4.8v2.5c-1.5 0-2.9-.5-4.2-1.3v6.4c0 3.4-2.6 6.1-6.1 6.1S2.1 18.8 2.1 15.4c0-3.3 2.5-6 5.8-6.1v2.6c-1.6.2-2.8 1.6-2.8 3.3 0 1.8 1.5 3.3 3.3 3.3s3.3-1.5 3.3-3.3V3h2.5Z" />
    </svg>
  );
}

export function SocialLinks({
  iconOnly = false,
  showHandle = true,
  className,
}: {
  iconOnly?: boolean;
  showHandle?: boolean;
  className?: string;
}) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-2", className)}>
      {socialProfiles.map((profile) => (
        <li key={profile.name}>
          <a
            href={profile.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`${profile.name} ${profile.handle} (opens in a new tab)`}
            className={cn(
              "inline-flex items-center gap-2 rounded-md border border-border bg-background font-medium text-foreground hover:border-primary hover:text-primary",
              iconOnly ? "size-9 justify-center" : "px-3 py-2 text-sm",
            )}
          >
            {profile.name === "Instagram" ? <InstagramIcon /> : <TikTokIcon />}
            {iconOnly ? null : (
              <span>
                {profile.name}
                {showHandle ? (
                  <span className="ml-1 hidden text-muted-foreground sm:inline">
                    {profile.handle}
                  </span>
                ) : null}
              </span>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}
