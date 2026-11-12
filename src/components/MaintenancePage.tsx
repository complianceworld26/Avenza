import { company, whatsappHref } from "@/content/site";

export function MaintenancePage() {
  const whatsapp = whatsappHref(
    `Hello, I would like to enquire about the land listed by ${company.legalName}.`,
  );

  return (
    <main className="relative flex min-h-svh flex-col overflow-hidden bg-olive-deep text-ivory">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,213,106,0.18),_transparent_55%),linear-gradient(160deg,_#0c3b2c_0%,_#0a2f23_48%,_#163a2c_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/25 to-transparent"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[720px] flex-1 flex-col justify-center px-5 py-16 sm:px-8">
        <p className="w-fit bg-bronze px-3 py-1 text-sm font-semibold tracking-[0.16em] text-charcoal uppercase">
          Under maintenance
        </p>
        <h1 className="mt-6 font-serif text-4xl font-bold leading-tight sm:text-5xl">
          {company.shortName}
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-ivory/90 sm:text-xl">
          This website is being prepared and is not open for viewing yet. Please
          check back soon.
        </p>

        {whatsapp ? (
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-12 w-fit items-center justify-center bg-bronze px-5 py-3 text-base font-semibold text-charcoal transition-colors hover:bg-[#c45f0c]"
          >
            Message on WhatsApp
          </a>
        ) : null}

        <p className="mt-10 border-t border-ivory/20 pt-5 text-sm text-ivory/75">
          {company.legalName}
          <span className="mt-1 block">{company.cityLine}</span>
        </p>
      </div>
    </main>
  );
}
