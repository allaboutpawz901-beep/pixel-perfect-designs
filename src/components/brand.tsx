import pawImg from "@/assets/paw.png";

export function Paw({ className = "" }: { className?: string }) {
  return (
    <img src={pawImg} alt="" aria-hidden="true" className={className} loading="lazy" />
  );
}

/** Circular "ALL ABOUT PAWZ" gold badge, drawn as SVG for crisp type. */
export function PawBadge({ size = 120 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      aria-hidden="true"
      className="shrink-0"
    >
      <defs>
        <path id="badgeTop" d="M100,100 m-72,0 a72,72 0 1,1 144,0" fill="none" />
        <path id="badgeBottom" d="M100,100 m-58,0 a58,58 0 1,0 116,0" fill="none" />
      </defs>
      <circle cx="100" cy="100" r="96" fill="oklch(0.17 0.006 60)" />
      <circle
        cx="100"
        cy="100"
        r="90"
        fill="none"
        stroke="oklch(0.68 0.098 68)"
        strokeWidth="1.5"
      />
      <circle
        cx="100"
        cy="100"
        r="78"
        fill="none"
        stroke="oklch(0.68 0.098 68)"
        strokeWidth="1"
      />
      <text
        fill="oklch(0.68 0.098 68)"
        fontFamily="'Playfair Display', serif"
        fontSize="19"
        letterSpacing="3.4"
      >
        <textPath href="#badgeTop" startOffset="50%" textAnchor="middle">
          ALL ABOUT
        </textPath>
      </text>
      <text
        fill="oklch(0.68 0.098 68)"
        fontFamily="'Playfair Display', serif"
        fontSize="19"
        letterSpacing="3.4"
      >
        <textPath href="#badgeBottom" startOffset="50%" textAnchor="middle">
          PAWZ
        </textPath>
      </text>
      <g transform="translate(100 98) scale(0.95)" fill="oklch(0.68 0.098 68)">
        <ellipse cx="-16" cy="-14" rx="7" ry="10" transform="rotate(-18 -16 -14)" />
        <ellipse cx="-4" cy="-21" rx="7" ry="10.5" transform="rotate(-6 -4 -21)" />
        <ellipse cx="10" cy="-20" rx="7" ry="10.5" transform="rotate(8 10 -20)" />
        <ellipse cx="21" cy="-11" rx="6.5" ry="9.5" transform="rotate(20 21 -11)" />
        <path d="M0,-6 C13,-6 24,4 24,14 C24,24 14,27 4,24 C1,23 -3,23 -6,24 C-16,27 -25,24 -25,14 C-25,4 -13,-6 0,-6 Z" />
      </g>
    </svg>
  );
}

export function PawGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="-32 -32 64 64" className={className} aria-hidden="true" fill="currentColor">
      <ellipse cx="-16" cy="-14" rx="7" ry="10" transform="rotate(-18 -16 -14)" />
      <ellipse cx="-4" cy="-21" rx="7" ry="10.5" transform="rotate(-6 -4 -21)" />
      <ellipse cx="10" cy="-20" rx="7" ry="10.5" transform="rotate(8 10 -20)" />
      <ellipse cx="21" cy="-11" rx="6.5" ry="9.5" transform="rotate(20 21 -11)" />
      <path d="M0,-6 C13,-6 24,4 24,14 C24,24 14,27 4,24 C1,23 -3,23 -6,24 C-16,27 -25,24 -25,14 C-25,4 -13,-6 0,-6 Z" />
    </svg>
  );
}

export function Divider() {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-24 bg-gold/50" />
      <PawGlyph className="h-3.5 w-3.5 text-gold-deep" />
      <span className="h-px w-24 bg-gold/50" />
    </div>
  );
}

/* ------------------------------------------------------------------
 * Custom hand-drawn line icons (no icon library) — thin gold linework
 * matched to the illustrated brand.
 * ------------------------------------------------------------------ */
type IconProps = { className?: string };

const base = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.1,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

/** Faceted gem with sparkles — "Luxury Experience". */
export function IconLuxury({ className = "" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M16 15h16l6 8-14 17L8 23l8-8Z" />
      <path d="M8 23h30M16 15l6 8-6 17M32 15l-6 8 6 17" />
      <path d="M40 10.5v5M37.5 13h5M10 8.5v3.5M8.2 10.2h3.6" />
    </svg>
  );
}

/** Dog head profile — "All Breeds Welcome". */
export function IconBreeds({ className = "" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M15 14c-3.5-2.5-6-2-6.5 1.5C8 19 9.5 23 11 25.5c-.6 5.5 2.5 11 8 13.2 3.5 1.4 7.5 1.4 11 0 5.5-2.2 8.6-7.7 8-13.2 1.5-2.5 3-6.5 2.5-10-.5-3.5-3-4-6.5-1.5" />
      <path d="M15 14c5.5-3.5 12.5-3.5 18 0" />
      <path d="M20 26.5h.02M28 26.5h.02" />
      <path d="M24 31c-1.6 0-2.8-1-2.8-2.2h5.6C26.8 30 25.6 31 24 31Zm0 0v2.6" />
    </svg>
  );
}

/** Shield with a paw — "Safety & Comfort". */
export function IconSafety({ className = "" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M24 6.5 39 12v13c0 9-6.4 14.7-15 17.5C15.4 39.7 9 34 9 25V12l15-5.5Z" />
      <g fill="currentColor" stroke="none">
        <ellipse cx="18.6" cy="20.4" rx="1.9" ry="2.7" transform="rotate(-16 18.6 20.4)" />
        <ellipse cx="22.4" cy="18.2" rx="1.9" ry="2.8" />
        <ellipse cx="26.4" cy="18.6" rx="1.9" ry="2.8" transform="rotate(10 26.4 18.6)" />
        <ellipse cx="29.7" cy="21.2" rx="1.8" ry="2.6" transform="rotate(20 29.7 21.2)" />
        <path d="M24 23.4c3.6 0 6.7 2.8 6.7 5.6 0 2.8-2.8 3.7-5.6 2.9-.8-.3-1.4-.3-2.2 0-2.8.8-5.6-.1-5.6-2.9 0-2.8 3.1-5.6 6.7-5.6Z" />
      </g>
    </svg>
  );
}

/** Heart with a wagging tail — "Happy Pups". */
export function IconHappy({ className = "" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M24 40S8 30.4 8 19.8C8 14.4 12.1 10.5 17 10.5c3 0 5.6 1.6 7 4 1.4-2.4 4-4 7-4 4.9 0 9 3.9 9 9.3C40 30.4 24 40 24 40Z" />
      <path d="M31 30.5c3.5 1 6 3.5 6.5 7" />
      <path d="M17.5 19.5c0-2.2 1.8-4 4-4" />
    </svg>
  );
}

/** Grooming shears — "Grooming Services". */
export function IconShears({ className = "" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="13" cy="37" r="5" />
      <circle cx="35" cy="37" r="5" />
      <path d="M16.6 33.4 37 8M31.4 33.4 11 8M24 24.5l-4.5 5.6M24 24.5l4.5 5.6" />
    </svg>
  );
}

/** Bath tub with bubbles — "Bath & Spa". */
export function IconBath({ className = "" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6 25h36v3.5c0 5.2-4.2 9.5-9.5 9.5h-17C10.2 38 6 33.7 6 28.5V25Z" />
      <path d="M11 25V12.5A4.5 4.5 0 0 1 15.5 8c2 0 3.7 1.3 4.3 3.1" />
      <path d="M17.5 13.5h5.5M12 38l-2 4M36 38l2 4" />
      <circle cx="30" cy="14" r="2.6" />
      <circle cx="37" cy="18.5" r="1.8" />
      <circle cx="35.5" cy="9.5" r="1.4" />
    </svg>
  );
}

/** Droplet with sparkle — "Add-On Services". */
export function IconDroplet({ className = "" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M24 7c6 7.5 11 13.4 11 19.5A11 11 0 0 1 13 26.5C13 20.4 18 14.5 24 7Z" />
      <path d="M19 26.8c0 3 2.2 5.4 5 5.7" />
      <path d="M39 33.5v4M37 35.5h4" />
    </svg>
  );
}
