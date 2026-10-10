"use client";

import { property } from "@/content/site";
import { useI18n } from "@/components/Language";
import { Reveal } from "@/components/Reveal";
import { Container, Eyebrow, Value, buttonClass } from "@/components/ui";

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
    <section id="property" className="py-24 md:py-32 lg:py-40">
      <Container>
        <Reveal>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <Eyebrow>{t.intro.eyebrow}</Eyebrow>
              <h2 className="mt-4 max-w-[12ch] font-serif text-5xl font-medium leading-[1.02] tracking-[-0.02em] sm:text-6xl">
                {t.intro.heading}
              </h2>
              <p className="mt-8 max-w-xl text-ink/85">{t.intro.body}</p>
              <a href="#contact" className={`${buttonClass("primary")} mt-10 w-full sm:w-auto`}>
                {t.intro.cta}
              </a>
            </div>

            <div className="lg:col-span-6 lg:pt-10">
              <dl>
                {rows.map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-1 gap-1 border-t border-line py-4 sm:grid-cols-[11rem_1fr] sm:gap-6 sm:py-5"
                  >
                    <dt className="text-[0.72rem] uppercase tracking-[0.16em] text-muted">
                      {row.label}
                    </dt>
                    <dd className="text-lg text-charcoal">
                      <Value value={row.value} fallback={t.pending} />
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-sm text-muted">{t.intro.italicNote}</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
