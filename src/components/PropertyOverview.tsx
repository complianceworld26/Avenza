"use client";

import { photos, property } from "@/content/site";
import { useI18n } from "@/components/Language";
import { PlainPhoto } from "@/components/PlainPhoto";
import { Eyebrow, Value, buttonClass } from "@/components/ui";

const accents = [
  "border-olive",
  "border-bronze",
  "border-gold",
  "border-olive-deep",
  "border-bronze",
  "border-olive",
];

export function PropertyOverview() {
  const { t } = useI18n();
  const price =
    !property.price.trim() || property.price.trim() === "Price on request"
      ? t.priceOnRequest
      : property.price;
  const rows = [
    { label: t.intro.location, value: property.location },
    { label: t.intro.landArea, value: property.landArea },
    { label: t.intro.propertyType, value: property.propertyType },
    { label: t.intro.plotSize, value: property.plotSize },
    { label: t.intro.status, value: property.availability },
    { label: t.intro.price, value: price },
  ];

  return (
    <section id="property" className="bg-ivory">
      <div className="mx-auto grid max-w-[1240px] gap-8 px-4 py-12 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8 lg:py-16">
        <div className="lg:col-span-5">
          <Eyebrow>{t.intro.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-olive-deep sm:text-4xl">
            {t.intro.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink sm:text-lg">{t.intro.body}</p>
          <div className="relative mt-6">
            <PlainPhoto
              src={photos.openPlot.src}
              alt={photos.openPlot.alt}
              sizes="(min-width: 1024px) 480px, 100vw"
              className="aspect-[4/3] min-h-[220px] w-full border-4 border-olive"
            />
            <p className="bg-olive px-3 py-2 text-sm font-semibold text-white">
              {t.gallery.categories["Open plot"]}
              <span className="mt-0.5 block font-medium text-gold">{t.hero.photoCaption}</span>
            </p>
          </div>
        </div>

        <div className="border-4 border-olive-deep bg-paper p-5 sm:p-7 lg:col-span-7">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b-4 border-gold pb-4">
            <h3 className="font-serif text-2xl font-bold text-olive-deep">{t.intro.eyebrow}</h3>
            <p className="bg-cream px-3 py-1 text-sm font-semibold text-charcoal">{t.intro.italicNote}</p>
          </div>
          <dl className="mt-4">
            {rows.map((row, index) => (
              <div
                key={row.label}
                className={`grid gap-1 border-b border-line py-3.5 sm:grid-cols-[11rem_1fr] sm:items-baseline sm:gap-4 border-l-4 pl-4 ${accents[index]}`}
              >
                <dt className="text-base font-semibold text-muted">{row.label}</dt>
                <dd className="text-lg font-semibold text-charcoal">
                  <Value value={row.value} fallback={t.pending} />
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className={buttonClass("primary")}>
              {t.hero.schedule}
            </a>
            <a href="#contact" className={buttonClass("secondary")}>
              {t.intro.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
