"use client";

import { amenities, landFacts, landSpecFields, landSpecValue, photos } from "@/content/site";
import { useI18n } from "@/components/Language";
import { PlainPhoto } from "@/components/PlainPhoto";
import { Eyebrow, Value } from "@/components/ui";

export function PropertyDetails() {
  const { t } = useI18n();
  const specs = landSpecFields.map((field) => ({
    id: field.id,
    label: t.land.specs[field.id],
    value: landSpecValue(field.id),
  }));
  const extras = landFacts.filter((fact) => fact.label.trim() && fact.value.trim());

  return (
    <section id="land" aria-labelledby="land-heading" className="bg-cream">
      <div className="mx-auto max-w-[1240px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Eyebrow tone="gold">{t.land.eyebrow}</Eyebrow>
            <h2
              id="land-heading"
              className="mt-4 font-serif text-3xl font-bold leading-tight text-olive-deep sm:text-4xl"
            >
              {t.land.heading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink sm:text-lg">{t.land.body}</p>
            <p className="mt-4 border-l-4 border-bronze bg-paper px-4 py-3 text-base text-ink">
              {t.land.empty}
            </p>
            <figure className="mt-6">
              <PlainPhoto
                src={photos.aerial.src}
                alt={photos.aerial.alt}
                sizes="(min-width: 1024px) 380px, 100vw"
                className="aspect-[4/3] min-h-[200px] w-full border-4 border-olive-deep"
              />
              <figcaption className="bg-olive-deep px-3 py-2 text-sm font-semibold text-ivory">
                {t.gallery.categories.Surroundings}
              </figcaption>
            </figure>
          </div>

          <div className="border-4 border-gold bg-paper lg:col-span-8">
            <div className="flex flex-wrap items-end justify-between gap-3 bg-olive-deep px-5 py-4 text-ivory">
              <h3 className="font-serif text-2xl font-bold">{t.land.noted}</h3>
              <p className="text-sm font-semibold text-gold">{t.intro.italicNote}</p>
            </div>
            <dl>
              {specs.map((spec, index) => (
                <div
                  key={spec.id}
                  className={`grid gap-1 px-5 py-3.5 sm:grid-cols-[14rem_1fr] sm:items-baseline sm:gap-6 ${
                    index % 2 === 0 ? "bg-paper" : "bg-ivory"
                  }`}
                >
                  <dt className="text-base font-semibold text-olive-deep">{spec.label}</dt>
                  <dd className="text-lg">
                    <Value value={spec.value} fallback={t.pending} />
                  </dd>
                </div>
              ))}
              {extras.map((fact) => (
                <div
                  key={fact.label}
                  className="grid gap-1 border-t border-line bg-mint px-5 py-3.5 sm:grid-cols-[14rem_1fr] sm:gap-6"
                >
                  <dt className="text-base font-semibold text-olive-deep">{fact.label}</dt>
                  <dd className="text-lg">{fact.value}</dd>
                </div>
              ))}
            </dl>
            {amenities.length > 0 ? (
              <ul className="space-y-2 border-t-4 border-bronze px-5 py-4">
                {amenities.map((item) => (
                  <li key={item} className="text-base">
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
