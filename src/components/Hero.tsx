"use client";

import { company, hasText, property, propertyGallery } from "@/content/site";
import { useI18n } from "@/components/Language";
import { PlainPhoto } from "@/components/PlainPhoto";
import { Value, buttonClass } from "@/components/ui";

export function Hero() {
  const { t } = useI18n();
  const named = hasText(property.name);
  const price =
    !property.price.trim() || property.price.trim() === "Price on request"
      ? t.priceOnRequest
      : property.price;
  const facts = [
    { label: t.hero.location, value: property.location },
    { label: t.hero.landArea, value: property.landArea },
    { label: t.hero.propertyType, value: property.propertyType },
    { label: t.hero.price, value: price },
  ];
  const companions = propertyGallery.slice(1);

  return (
    <section id="top" className="bg-ivory text-charcoal">
      <div className="relative h-[72vw] min-h-[260px] max-h-[420px] bg-olive-deep sm:h-[480px] sm:max-h-none lg:h-[100svh]">
        <PlainPhoto
          src={property.heroImage.src}
          alt={property.heroImage.alt}
          priority
          sizes="100vw"
          imageClassName="object-[center_62%]"
          className="absolute inset-0 h-full w-full"
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-olive-deep/75 to-transparent" />
        <div className="absolute inset-x-4 bottom-4 hidden grid-cols-4 gap-2 sm:inset-x-auto sm:right-6 sm:w-[22rem] lg:right-8 lg:bottom-8 lg:grid lg:w-[26rem]">
          {companions.map((photo) => (
            <a key={photo.src} href="#gallery" aria-label={photo.alt} className="group block">
              <PlainPhoto
                src={photo.src}
                alt=""
                sizes="160px"
                className="aspect-[4/3] w-full ring-2 ring-white/90 transition duration-200 group-hover:ring-gold"
              />
            </a>
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto -mt-10 max-w-[1240px] px-4 sm:-mt-16 sm:px-6 lg:-mt-80 lg:px-8">
        <div className="max-w-xl bg-ivory px-5 py-6 sm:px-7 sm:py-7 lg:shadow-[0_18px_50px_rgba(12,59,44,0.22)]">
          <p className="text-sm font-semibold tracking-[0.16em] text-bronze-ink uppercase">
            {company.shortName}
          </p>
          <h1 className="mt-3 font-serif text-[2.15rem] font-bold leading-[1.12] text-olive-deep sm:text-5xl">
            {named ? property.name.trim() : t.hero.tagline}
          </h1>
          {named ? (
            <p className="mt-3 text-xl font-semibold leading-snug text-charcoal">{t.hero.tagline}</p>
          ) : (
            <p className="mt-3 inline-flex bg-bronze px-3 py-1 text-sm font-semibold text-charcoal">
              {t.hero.toBeAnnounced}
            </p>
          )}
          <p className="mt-4 text-base leading-relaxed text-ink sm:text-lg">{t.hero.lead}</p>

          <dl className="mt-5 grid grid-cols-2 gap-px bg-line">
            {facts.map((fact) => (
              <div key={fact.label} className="bg-paper px-3 py-2.5">
                <dt className="text-sm font-semibold text-bronze-ink">{fact.label}</dt>
                <dd className="mt-0.5 text-base font-semibold text-olive-deep">
                  <Value value={fact.value} fallback={t.pending} />
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className={buttonClass("secondary")}>
              {t.hero.schedule}
            </a>
            <a href="#property" className={buttonClass("ghost")}>
              {t.hero.viewDetails}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-4 grid max-w-[1240px] grid-cols-4 gap-2 px-4 sm:px-6 lg:hidden">
        {companions.map((photo) => (
          <a key={photo.src} href="#gallery" aria-label={photo.alt} className="block">
            <PlainPhoto src={photo.src} alt="" sizes="25vw" className="aspect-[4/3] w-full" />
          </a>
        ))}
      </div>

      <p className="mx-auto max-w-[1240px] px-4 py-3 text-sm font-semibold text-olive-deep sm:px-6 lg:px-8">
        {t.hero.photoCaption}
        <span className="mt-0.5 block font-medium text-muted">{t.hero.photoNote}</span>
      </p>
    </section>
  );
}
