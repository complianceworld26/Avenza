"use client";

import { company } from "@/content/site";
import { useI18n } from "@/components/Language";
import { Reveal } from "@/components/Reveal";
import { Container, Eyebrow } from "@/components/ui";

export function AboutCompany() {
  const { t } = useI18n();
  const record = [
    { label: t.facts.legalName, value: company.legalName },
    { label: t.facts.cin, value: company.cin },
    { label: t.facts.incorporated, value: t.facts.date },
    { label: t.facts.office, value: t.facts.cityLine },
  ];

  return (
    <section id="about" className="pt-24 md:pt-32 lg:pt-40">
      <Container>
        <Reveal>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Eyebrow>{t.about.eyebrow}</Eyebrow>
              <dl className="mt-8 border-t border-line">
                {record.map((item) => (
                  <div key={item.label} className="border-b border-line py-4">
                    <dt className="text-[0.72rem] uppercase tracking-[0.16em] text-muted">
                      {item.label}
                    </dt>
                    <dd className="mt-1.5">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <h2 className="font-serif text-5xl font-medium leading-[1.02] tracking-[-0.02em] sm:text-6xl">
                {t.about.heading}
              </h2>
              <div className="mt-8 space-y-5 text-ink/85">
                {t.about.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <p className="mt-8 text-sm text-muted">{t.about.sourceNote}</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
