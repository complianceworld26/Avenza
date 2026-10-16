import { hasText } from "@/content/site";

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  tone = "green",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "green" | "saffron" | "gold" | "cream";
  className?: string;
}) {
  const tones = {
    green: "bg-olive text-white",
    saffron: "bg-bronze text-charcoal",
    gold: "bg-gold text-charcoal",
    cream: "bg-ivory text-olive-deep",
  };

  return (
    <p
      className={`inline-flex items-center px-3 py-1 text-sm font-semibold tracking-wide uppercase ${tones[tone]} ${className}`}
    >
      {children}
    </p>
  );
}

export function Value({
  value,
  fallback = "To be confirmed",
  pendingClassName = "font-semibold italic text-bronze-ink",
}: {
  value: string;
  fallback?: string;
  pendingClassName?: string;
}) {
  if (!hasText(value)) {
    return <span className={pendingClassName}>{fallback}</span>;
  }
  return <>{value.trim()}</>;
}

const buttonBase =
  "inline-flex min-h-12 items-center justify-center px-5 py-3 text-base font-semibold leading-snug transition-colors duration-200";

export function buttonClass(
  variant: "primary" | "secondary" | "secondary-light" | "ghost",
) {
  if (variant === "primary") {
    return `${buttonBase} bg-olive text-white hover:bg-[#0a6336] focus-visible:outline-gold`;
  }
  if (variant === "secondary") {
    return `${buttonBase} bg-bronze text-charcoal hover:bg-[#c45f0c] focus-visible:outline-olive-deep`;
  }
  if (variant === "secondary-light") {
    return `${buttonBase} border-2 border-ivory bg-transparent text-ivory hover:bg-ivory hover:text-olive-deep focus-visible:outline-gold`;
  }
  return `${buttonBase} border-2 border-charcoal/25 bg-paper text-charcoal hover:border-olive hover:text-olive-deep focus-visible:outline-olive`;
}
