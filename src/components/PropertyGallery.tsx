"use client";

import { useRef, useState } from "react";
import { propertyGallery } from "@/content/site";
import { useI18n } from "@/components/Language";
import { PlainPhoto } from "@/components/PlainPhoto";
import { Eyebrow } from "@/components/ui";

export function PropertyGallery() {
  const { t } = useI18n();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);
  const current = propertyGallery[index];

  function openAt(next: number) {
    setIndex(next);
    dialogRef.current?.showModal();
  }

  function step(direction: -1 | 1) {
    setIndex((value) => (value + direction + propertyGallery.length) % propertyGallery.length);
  }

  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="bg-mint">
      <div className="mx-auto max-w-[1240px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Eyebrow tone="saffron">{t.gallery.eyebrow}</Eyebrow>
        <h2
          id="gallery-heading"
          className="mt-4 max-w-3xl font-serif text-3xl font-bold leading-tight text-olive-deep sm:text-4xl"
        >
          {t.gallery.heading}
        </h2>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-ink sm:text-lg">{t.gallery.body}</p>

        <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {propertyGallery.map((photo, photoIndex) => (
            <figure
              key={photo.src}
              className={photoIndex === 0 ? "col-span-2 lg:row-span-2" : undefined}
            >
              <button
                type="button"
                className="relative block h-full w-full text-left"
                onClick={() => openAt(photoIndex)}
              >
                <PlainPhoto
                  src={photo.src}
                  alt={photo.alt}
                  sizes={photoIndex === 0 ? "(min-width: 1024px) 620px, 100vw" : "(min-width: 1024px) 300px, 50vw"}
                  imageClassName={photoIndex === 0 ? "object-[center_45%]" : undefined}
                  className={
                    photoIndex === 0
                      ? "aspect-[4/3] min-h-[240px] w-full lg:aspect-auto lg:h-full lg:min-h-[460px]"
                      : "aspect-[4/3] min-h-[140px] w-full"
                  }
                />
                <span className="absolute inset-x-0 bottom-0 bg-olive-deep/90 px-3 py-2 text-sm font-semibold text-ivory">
                  {t.gallery.categories[photo.caption] ?? photo.caption}
                  <span className="mt-0.5 block font-medium text-gold">
                    {t.gallery.open} {t.gallery.imageWord}
                  </span>
                </span>
              </button>
            </figure>
          ))}
        </div>
      </div>

      <dialog ref={dialogRef} className="viewer" aria-label={t.gallery.viewer}>
        {current ? (
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between gap-3 px-4 py-3">
              <p className="text-base font-semibold">
                {t.gallery.categories[current.caption] ?? current.caption}
                <span className="ml-2 text-gold">
                  {index + 1} {t.gallery.of} {propertyGallery.length}
                </span>
              </p>
              <button
                type="button"
                className="min-h-11 px-3 text-base font-semibold text-gold"
                onClick={() => dialogRef.current?.close()}
              >
                {t.gallery.close}
              </button>
            </div>
            <div className="relative min-h-0 flex-1">
              <PlainPhoto
                src={current.src}
                alt={current.alt}
                sizes="100vw"
                className="absolute inset-0 h-full w-full"
              />
            </div>
            <div className="flex justify-between gap-3 px-4 py-3">
              <button type="button" className="min-h-11 px-3 text-base font-semibold" onClick={() => step(-1)}>
                {t.gallery.previous}
              </button>
              <button type="button" className="min-h-11 px-3 text-base font-semibold" onClick={() => step(1)}>
                {t.gallery.next}
              </button>
            </div>
          </div>
        ) : null}
      </dialog>
    </section>
  );
}
