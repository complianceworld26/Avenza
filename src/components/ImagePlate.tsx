"use client";

import Image from "next/image";
import { useI18n } from "@/components/Language";

function CropMarks({ light = false }: { light?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute inset-3 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] ${light ? "text-ivory/35" : "text-charcoal/25"}`}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path d="M0 8 V0 H8" fill="none" stroke="currentColor" strokeWidth="0.6" />
      <path d="M92 0 H100 V8" fill="none" stroke="currentColor" strokeWidth="0.6" />
      <path d="M0 92 V100 H8" fill="none" stroke="currentColor" strokeWidth="0.6" />
      <path d="M92 100 H100 V92" fill="none" stroke="currentColor" strokeWidth="0.6" />
    </svg>
  );
}

export function ImagePlate({
  title,
  note,
  src,
  alt,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  fit = "cover",
  display = "frame",
  surface = "stone",
  className = "",
}: {
  title: string;
  note?: string;
  src?: string;
  alt?: string;
  priority?: boolean;
  sizes?: string;
  fit?: "cover" | "contain";
  display?: "frame" | "hero";
  surface?: "stone" | "dark";
  className?: string;
}) {
  const { t } = useI18n();
  const hasImage = Boolean(src);
  const surfaceClass = surface === "dark" || display === "hero" ? "bg-[#26241f]" : "bg-stone";

  return (
    <div
      className={`relative overflow-hidden ${surfaceClass} ${display === "hero" ? "border border-ivory/15" : "border border-charcoal/10"} ${className}`}
    >
      {hasImage ? (
        <Image
          src={src as string}
          alt={alt || title}
          fill
          priority={priority}
          sizes={sizes}
          className={`image-zoom ${fit === "contain" ? "object-contain" : "object-cover"} ${fit === "cover" ? "transition-transform duration-700 ease-out group-hover:scale-[1.03]" : ""}`}
        />
      ) : (
        <>
          <CropMarks light={display === "hero" || surface === "dark"} />
          <div
            className={`relative z-10 flex h-full flex-col justify-end ${display === "hero" ? "p-6 text-ivory sm:p-8" : "p-5 text-charcoal sm:p-6"}`}
          >
            <p
              className={`text-[0.68rem] uppercase tracking-[0.22em] ${display === "hero" ? "text-ivory/55" : "text-muted"}`}
            >
              {title}
            </p>
            <p
              className={`mt-3 max-w-[16ch] font-serif font-medium leading-[1.05] ${display === "hero" ? "text-4xl sm:text-5xl" : "text-2xl"}`}
            >
              {note ?? t.gallery.toAdd}
            </p>
            {display === "hero" ? (
              <p className="mt-4 text-sm text-ivory/55">{t.hero.notAPhoto}</p>
            ) : null}
          </div>
        </>
      )}
    </div>
  );
}
