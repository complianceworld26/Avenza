"use client";

import { photos } from "@/content/site";
import { useI18n } from "@/components/Language";
import { PlainPhoto } from "@/components/PlainPhoto";

export function ApproachBand() {
  const { t } = useI18n();

  return (
    <figure className="bg-mint">
      <div className="mx-auto max-w-[1240px] px-4 py-10 sm:px-6 lg:px-8">
        <PlainPhoto
          src={photos.road.src}
          alt={photos.road.alt}
          className="aspect-[16/7] min-h-[180px] w-full border-4 border-olive"
          sizes="(min-width: 1024px) 1200px, 100vw"
        />
        <figcaption className="mt-3 text-base font-semibold text-olive-deep">
          {t.gallery.categories["Road / Approach"]}
        </figcaption>
      </div>
    </figure>
  );
}
