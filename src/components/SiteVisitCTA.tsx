"use client";

import { photos } from "@/content/site";
import { useI18n } from "@/components/Language";
import { PlainPhoto } from "@/components/PlainPhoto";
import { buttonClass } from "@/components/ui";

export function SiteVisitCTA() {
  const { t } = useI18n();

  return (
    <section id="visit" className="bg-olive text-ivory">
      <div className="mx-auto grid max-w-[1240px] items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-14">
        <PlainPhoto
          src={photos.road.src}
          alt={photos.road.alt}
          className="aspect-[4/3] min-h-[220px] w-full border-4 border-gold"
          sizes="(min-width: 1024px) 560px, 100vw"
        />
        <div>
          <h2 className="font-serif text-3xl font-bold leading-tight sm:text-4xl">{t.visit.heading}</h2>
          <p className="mt-4 text-lg leading-relaxed text-ivory/95">{t.visit.body}</p>
          <a href="#contact" className={`${buttonClass("secondary")} mt-6`}>
            {t.visit.schedule}
          </a>
        </div>
      </div>
    </section>
  );
}
