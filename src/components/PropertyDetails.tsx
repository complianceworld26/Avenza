"use client";

import { amenities, landFacts } from "@/content/site";
import { useI18n } from "@/components/Language";
import { Reveal } from "@/components/Reveal";
import { Container, Eyebrow } from "@/components/ui";

export function PropertyDetails() {
  const { t } = useI18n();
  const facts = landFacts.filter((fact) => fact.value.trim());

  return (
    <section id="land" aria-labelledby="land-heading" className="border-t border-line py-24 md:py-32">
      <Container>
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow>{t.land.eyebrow}</Eyebrow>
              <h2
                id="land-heading"
                className="mt-4 font-serif text-5xl font-medium leading-[1.02] tracking-[-0.02em] sm:text-6xl"
              >
                {t.land.heading}
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="max-w-xl text-ink/85">{t.land.body}</p>
              {facts.length > 0 ? (
                <dl className="mt-10">
                  {facts.map((fact) => (
                    <div key={fact.label} className="border-t border-line py-6">
                      <dt className="text-[0.72rem] uppercase tracking-[0.16em] text-muted">
                        {fact.label}
                      </dt>
                      <dd className="mt-2 font-serif text-2xl leading-snug text-charcoal sm:text-3xl">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              ) : (
                <p className="mt-8 border-t border-line pt-6 text-muted">{t.land.empty}</p>
              )}
              {amenities.length > 0 ? (
                <div className="mt-10 border-t border-line pt-6">
                  <h3 className="text-[0.72rem] uppercase tracking-[0.16em] text-muted">
                    {t.land.noted}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {amenities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
