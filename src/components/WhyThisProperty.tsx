"use client";

import { useI18n } from "@/components/Language";
import { Reveal } from "@/components/Reveal";
import { Container, Eyebrow } from "@/components/ui";

export function WhyThisProperty() {
  const { t } = useI18n();

  return (
    <section aria-labelledby="matters-heading" className="border-t border-line py-24 md:py-32">
      <Container>
        <Reveal>
          <Eyebrow>{t.matters.eyebrow}</Eyebrow>
          <h2
            id="matters-heading"
            className="mt-4 max-w-[16ch] font-serif text-5xl font-medium leading-[1.02] tracking-[-0.02em] sm:text-6xl"
          >
            {t.matters.heading}
          </h2>
          <ol className="mt-14 border-b border-line">
            {t.matters.items.map((item) => (
              <li
                key={item.index}
                className="grid gap-4 border-t border-line py-8 md:grid-cols-12 md:gap-8 md:py-10"
              >
                <p className="font-serif text-3xl text-olive md:col-span-2">{item.index}</p>
                <h3 className="font-serif text-3xl font-medium md:col-span-3">{item.title}</h3>
                <p className="text-ink/85 md:col-span-7">{item.body}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}
