"use client";

import { photos } from "@/content/site";
import { useI18n } from "@/components/Language";
import { PlainPhoto } from "@/components/PlainPhoto";
import { Eyebrow } from "@/components/ui";

const bands = ["bg-paper", "bg-mint", "bg-cream", "bg-ivory", "bg-earth"] as const;

export function WhyThisProperty() {
  const { t } = useI18n();

  return (
    <section aria-labelledby="matters-heading" className="bg-paper">
      <div className="mx-auto max-w-[1240px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Eyebrow tone="saffron">{t.matters.eyebrow}</Eyebrow>
        <h2
          id="matters-heading"
          className="mt-4 max-w-3xl font-serif text-3xl font-bold leading-tight text-olive-deep sm:text-4xl"
        >
          {t.matters.heading}
        </h2>
      </div>

      <div className="border-y-4 border-olive-deep">
        {t.matters.items.map((item, index) => (
          <article key={item.index} className={bands[index % bands.length]}>
            <div className="mx-auto grid max-w-[1240px] gap-4 px-4 py-6 sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-8 lg:px-8 lg:py-8">
              <p className="font-serif text-4xl font-bold text-bronze lg:col-span-2">{item.index}</p>
              <div className={index === 1 ? "lg:col-span-6" : "lg:col-span-10"}>
                <h3 className="font-serif text-2xl font-bold text-olive-deep">{item.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-ink sm:text-lg">{item.body}</p>
              </div>
              {index === 1 ? (
                <figure className="lg:col-span-4">
                  <PlainPhoto
                    src={photos.road.src}
                    alt={photos.road.alt}
                    sizes="(min-width: 1024px) 360px, 100vw"
                    className="aspect-[16/10] min-h-[160px] w-full border-4 border-olive"
                  />
                  <figcaption className="bg-olive px-3 py-2 text-sm font-semibold text-white">
                    {t.gallery.categories["Road / Approach"]}
                  </figcaption>
                </figure>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
