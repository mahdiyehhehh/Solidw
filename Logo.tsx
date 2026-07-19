import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={cn("h-8 w-8", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="solidw-mark" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6D5EF5" />
          <stop offset="55%" stopColor="#9D6BFF" />
          <stop offset="100%" stopColor="#33E1D6" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9" fill="url(#solidw-mark)" />
      <path
        d="M9 12.5C9 10.567 10.567 9 12.5 9h7C21.433 9 23 10.567 23 12.5v4c0 1.933-1.567 3.5-3.5 3.5h-5.06l-3.19 2.55a.6.6 0 0 1-.97-.47V19.9A3.5 3.5 0 0 1 9 16.5v-4Z"
        fill="white"
        fillOpacity="0.96"
      />
      <path
        d="M12.7 15.1l1.6 1.6 3-3.2"
        stroke="#6D5EF5"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="font-display text-lg font-semibold tracking-tight text-foreground">
        solidw
      </span>
    </span>
  );
}
