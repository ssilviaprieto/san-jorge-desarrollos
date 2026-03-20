type SiteIconName =
  | "leaf"
  | "sun"
  | "layout"
  | "recycle"
  | "blueprint"
  | "handshake"
  | "home"
  | "check"
  | "drop"
  | "road"
  | "shield"
  | "star"
  | "community"
  | "arrow";

type SiteIconProps = {
  name: SiteIconName;
  className?: string;
};

export function SiteIcon({ name, className = "h-5 w-5" }: SiteIconProps) {
  const commonProps = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "leaf":
      return (
        <svg {...commonProps}>
          <path d="M6 13c0-5 4-8 11-8 0 7-3 11-8 11-2 0-3-1-3-3Z" />
          <path d="M8 16c2-2 4-4 8-6" />
        </svg>
      );
    case "sun":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2.5M12 19.5V22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M2 12h2.5M19.5 12H22M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" />
        </svg>
      );
    case "layout":
      return (
        <svg {...commonProps}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M9 4v16M9 10h12" />
        </svg>
      );
    case "recycle":
      return (
        <svg {...commonProps}>
          <path d="M9 4 6 8h4" />
          <path d="M6.5 8c.9-2.5 2.8-4 5.5-4 2 0 3.8.9 4.9 2.5" />
          <path d="m18 9 3 4h-4" />
          <path d="M20.4 13c-.8 3.1-3 5-6.4 5-1.9 0-3.5-.6-4.8-2" />
          <path d="m9 20-3-4h4" />
          <path d="M3.6 11C4.3 7.8 6.6 6 10 6" />
        </svg>
      );
    case "blueprint":
      return (
        <svg {...commonProps}>
          <path d="M5 20V4h10l4 4v12Z" />
          <path d="M15 4v4h4M8 12h8M8 16h5M8 8h3" />
        </svg>
      );
    case "handshake":
      return (
        <svg {...commonProps}>
          <path d="m7 12 3 3c1 1 2.5 1 3.5 0l3.5-3.5c1-1 1-2.6 0-3.6L15 6c-1-1-2.6-1-3.6 0L10 7.4 8.6 6A2.5 2.5 0 0 0 5 6l-2 2" />
          <path d="m2 10 3 3M19 7l3 3" />
        </svg>
      );
    case "home":
      return (
        <svg {...commonProps}>
          <path d="M4 10.5 12 4l8 6.5" />
          <path d="M6 9.5V20h12V9.5" />
          <path d="M10 20v-5h4v5" />
        </svg>
      );
    case "check":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="9" />
          <path d="m8.5 12 2.2 2.2 4.8-4.8" />
        </svg>
      );
    case "drop":
      return (
        <svg {...commonProps}>
          <path d="M12 3c3 4 5 6.7 5 10a5 5 0 0 1-10 0c0-3.3 2-6 5-10Z" />
        </svg>
      );
    case "road":
      return (
        <svg {...commonProps}>
          <path d="M8 3 5 21M16 3l3 18M10 7h4M9 12h6M8 17h8" />
        </svg>
      );
    case "shield":
      return (
        <svg {...commonProps}>
          <path d="M12 3c2.8 1.9 5.8 2.8 8 3v5c0 5.2-3.2 8.6-8 10-4.8-1.4-8-4.8-8-10V6c2.2-.2 5.2-1.1 8-3Z" />
        </svg>
      );
    case "star":
      return (
        <svg {...commonProps}>
          <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.8 1-6.1-4.4-4.3 6.1-.9Z" />
        </svg>
      );
    case "community":
      return (
        <svg {...commonProps}>
          <path d="M8 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6ZM16.5 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
          <path d="M4 19c0-2.7 2.4-4.5 5.5-4.5S15 16.3 15 19M14 19c0-2 1.8-3.5 4-3.5S22 17 22 19" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...commonProps}>
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      );
    default:
      return null;
  }
}
