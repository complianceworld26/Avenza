"use client";

import { hasText, locationInfo, mapEmbedUrl } from "@/content/site";
import { useI18n } from "@/components/Language";
import { Eyebrow, Value } from "@/components/ui";

export function LocationSection() {
  const { t } = useI18n();
  const map = mapEmbedUrl();
  const address = locationInfo.address.trim();
  const nearby = locationInfo.nearby.filter((item) => item.name.trim() && item.detail.trim());
  const connectivity = locationInfo.connectivity.filter(
    (item) => item.name.trim() && item.detail.trim(),
  );
  const known = hasText(address) || Boolean(map);

  return (
    <section id="location" className="bg-earth">
      <div className="mx-auto grid max-w-[1240px] gap-6 px-4 py-12 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-16">
        <div className="bg-paper p-5 sm:p-7 lg:col-span-5">
          <Eyebrow>{t.location.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-olive-deep sm:text-4xl">
            {t.location.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink sm:text-lg">
            {known ? t.location.known : t.location.pending}
          </p>

          <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-bronze">
            {t.location.propertyLocation}
          </p>
          <p className="mt-1 font-serif text-2xl font-bold leading-snug text-charcoal">
            <Value value={address} fallback={t.pending} />
          </p>

          <div className="mt-6 border-t-4 border-olive">
            <h3 className="bg-olive px-4 py-2 text-base font-semibold text-white">{t.location.nearby}</h3>
            {nearby.length > 0 ? (
              <ul>
                {nearby.map((item) => (
                  <li
                    key={`${item.name}-${item.detail}`}
                    className="flex flex-col gap-1 border-b border-line px-4 py-3 sm:flex-row sm:justify-between"
                  >
                    <span className="font-semibold">{item.name}</span>
                    <span className="text-ink">{item.detail}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="px-4 py-4 text-lg font-semibold italic text-bronze-ink">{t.pending}</p>
            )}

            <h3 className="bg-bronze px-4 py-2 text-base font-semibold text-charcoal">
              {t.location.connectivity}
            </h3>
            {connectivity.length > 0 ? (
              <ul>
                {connectivity.map((item) => (
                  <li
                    key={`${item.name}-${item.detail}`}
                    className="flex flex-col gap-1 border-b border-line px-4 py-3 sm:flex-row sm:justify-between"
                  >
                    <span className="font-semibold">{item.name}</span>
                    <span className="text-ink">{item.detail}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="px-4 py-4 text-lg font-semibold italic text-bronze-ink">{t.pending}</p>
            )}
          </div>
        </div>

        <div className="min-h-[420px] border-4 border-olive-deep bg-olive-deep lg:col-span-7">
          {map ? (
            <iframe
              title={t.location.mapFrame}
              src={map}
              className="h-full min-h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <div className="flex h-full min-h-[420px] flex-col justify-between px-6 py-8 text-ivory sm:px-8">
              <p className="w-fit bg-bronze px-3 py-1 text-sm font-semibold text-charcoal">{t.location.map}</p>
              <div>
                <h3 className="max-w-xl font-serif text-3xl font-bold leading-tight sm:text-4xl">
                  {t.location.mapTitle}
                </h3>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-ivory/95">{t.location.mapNote}</p>
              </div>
              <p className="border-t border-gold/60 pt-4 text-base text-ivory/90">{t.location.propertyLocation}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
