import Link from "next/link";
import { SiteFrame } from "@/components/SiteFrame";

export function LegalPage({
  title,
  lede,
  children,
}: {
  title: string;
  lede: string;
  children: React.ReactNode;
}) {
  return (
    <SiteFrame>
      <main className="pb-24">
        <div className="bg-olive-deep px-4 pb-10 pt-28 text-ivory sm:px-6 md:pt-32">
          <article className="mx-auto max-w-3xl">
            <p className="text-base">
              <Link href="/" className="font-semibold text-gold hover:text-white">
                Avenza Realtech
              </Link>
            </p>
            <h1 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl">{title}</h1>
            <p className="mt-4 text-lg leading-relaxed text-ivory/95">{lede}</p>
          </article>
        </div>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
          <div className="space-y-5 border-l-4 border-bronze pl-5 text-lg leading-relaxed text-ink">{children}</div>
        </div>
      </main>
    </SiteFrame>
  );
}
