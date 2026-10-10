"use client";

import { directors } from "@/content/site";
import { useI18n } from "@/components/Language";
import { Container } from "@/components/ui";

export function Directors() {
  const { t } = useI18n();
  const people = directors.filter((person) => person.name.trim() && person.designation.trim());

  return (
    <section id="directors" aria-labelledby="directors-heading" className="pb-24 md:pb-32">
      <Container>
        <div className="grid lg:grid-cols-12">
          <div className="lg:col-span-7 lg:col-start-6">
            <h2 id="directors-heading" className="font-serif text-3xl font-medium">
              {t.directors.heading}
            </h2>
            {people.length > 0 ? (
              <ul className="mt-6 border-y border-line">
                {people.map((person) => (
                  <li
                    key={`${person.name}-${person.designation}`}
                    className="flex flex-col gap-1 border-b border-line py-5 last:border-b-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                  >
                    <span className="font-serif text-2xl">{person.name}</span>
                    <span className="text-sm text-muted">{person.designation}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 max-w-xl text-muted">{t.directors.empty}</p>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
