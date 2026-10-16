"use client";

import {
  amenities,
  displayPropertyValue,
  landFacts,
  landSpecFields,
  landSpecValue,
  photos,
} from "@/content/site";
import { useI18n } from "@/components/Language";
import { PlainPhoto } from "@/components/PlainPhoto";
import { Eyebrow } from "@/components/ui";

const tileAccents = ["border-olive", "border-bronze", "border-gold", "border-olive-deep"];

export function PropertyDetails() {
  const { t } = useI18n();
  const labels = { revealingSoon: t.revealingSoon, plot: t.plot };
  const specs = landSpecFields
    .map((field) => ({
      id: field.id,
      label: t.land.specs[field.id],
      value: displayPropertyValue(landSpecValue(field.id), labels),
    }))
    .filter((spec) => spec.value.trim());
  const extras = landFacts.filter((fact) => fact.label.trim() && fact.value.trim());
  const notes = [
    ...specs.map((spec) => ({ key: spec.id, label: spec.label, value: spec.value })),
    ...extras.map((fact) => ({ key: fact.label, label: fact.label, value: fact.value })),
  ];

  return (
    <section id="land" aria-labelledby="land-heading" className="bg-cream">
      <div className="mx-auto grid max-w-[1240px] items-stretch gap-6 px-4 py-12 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:py-16">
        <div className="flex flex-col lg:col-span-5">
          <Eyebrow tone="gold">{t.land.eyebrow}</Eyebrow>
          <h2
            id="land-heading"
            className="mt-4 font-serif text-3xl font-bold leading-tight text-olive-deep sm:text-4xl"
          >
            {t.land.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink sm:text-lg">{t.land.body}</p>

          {notes.length > 0 ? (
            <dl className="mt-6 grid flex-1 content-start gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {notes.map((note, index) => (
                <div
                  key={note.key}
                  className={`border-l-4 bg-paper px-4 py-4 ${tileAccents[index % tileAccents.length]}`}
                >
                  <dt className="text-sm font-semibold tracking-wide text-bronze-ink uppercase">
                    {note.label}
                  </dt>
                  <dd className="mt-1 font-serif text-2xl font-bold leading-tight text-olive-deep">
                    {note.value}
                  </dd>
                </div>
              ))}
            </dl>
          ) : null}

          {amenities.length > 0 ? (
            <ul className="mt-4 space-y-2 border-t-4 border-bronze bg-paper px-4 py-4">
              {amenities.map((item) => (
                <li key={item} className="text-base font-semibold text-charcoal">
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <figure className="flex h-full min-h-[320px] flex-col lg:col-span-7">
          <PlainPhoto
            src={photos.aerial.src}
            alt={photos.aerial.alt}
            sizes="(min-width: 1024px) 720px, 100vw"
            className="min-h-[280px] w-full flex-1 border-4 border-olive-deep"
          />
          <figcaption className="bg-olive-deep px-3 py-2 text-sm font-semibold text-ivory">
            {t.gallery.categories.Surroundings}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
