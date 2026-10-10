"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { company, navigation } from "@/content/site";
import { LanguageButton, useI18n } from "@/components/Language";
import { buttonClass } from "@/components/ui";

export function Navbar({ overlay = false }: { overlay?: boolean }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hideEnquire, setHideEnquire] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);

  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const content = document.getElementById("content");
    const footer = document.querySelector("footer");
    if (content instanceof HTMLElement) content.inert = open;
    if (footer instanceof HTMLElement) footer.inert = open;
    return () => {
      document.body.style.overflow = "";
      if (content instanceof HTMLElement) content.inert = false;
      if (footer instanceof HTMLElement) footer.inert = false;
    };
  }, [open]);

  useEffect(() => {
    const target = document.getElementById("contact");
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHideEnquire(Boolean(entry?.isIntersecting)),
      { threshold: 0, rootMargin: "-15% 0px -30% 0px" },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [pathname]);

  const { t } = useI18n();
  const navLabels = [
    t.nav.property,
    t.nav.location,
    t.nav.about,
    t.nav.documents,
    t.nav.contact,
  ];
  const solid = !overlay || scrolled || open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          solid
            ? "border-b border-line bg-ivory text-charcoal"
            : "border-b border-transparent bg-transparent text-ivory"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1360px] items-center justify-between gap-4 px-5 sm:h-[4.5rem] sm:px-8">
          <Link
            href="/#top"
            className="min-w-0 leading-none"
            aria-label={`${company.legalName}, ${t.nav.home}`}
            onClick={() => setOpen(false)}
          >
            <span className="block font-serif text-[1.35rem] tracking-[0.12em]">
              AVENZA
            </span>
            <span className="mt-1 block text-[0.62rem] uppercase tracking-[0.28em]">
              Realtech
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label={t.nav.primary}>
            {navigation.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[0.95rem] text-current/80 transition-colors hover:text-current"
              >
                {navLabels[index]}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageButton />
            <div className="hidden sm:block">
              <Link href="/#contact" className={buttonClass("primary")}>
                {t.nav.enquireNow}
              </Link>
            </div>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="sr-only">{open ? t.nav.closeMenu : t.nav.openMenu}</span>
              <span className="relative block h-3 w-5" aria-hidden="true">
                <span
                  className={`absolute left-0 h-px w-5 bg-current transition-transform ${open ? "top-1.5 rotate-45" : "top-0"}`}
                />
                <span
                  className={`absolute left-0 top-1.5 h-px w-5 bg-current ${open ? "opacity-0" : ""}`}
                />
                <span
                  className={`absolute left-0 h-px w-5 bg-current transition-transform ${open ? "top-1.5 -rotate-45" : "top-3"}`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-navigation"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-16 z-40 bg-ivory text-charcoal lg:hidden"
      >
        <nav className="flex h-full flex-col px-6 py-8" aria-label={t.nav.mobile}>
          {navigation.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b border-line py-4 font-serif text-4xl"
              onClick={() => setOpen(false)}
            >
              {navLabels[index]}
            </Link>
          ))}
          <Link
            href="/#contact"
            className={`${buttonClass("primary")} mt-8`}
            onClick={() => setOpen(false)}
          >
            {t.nav.enquireNow}
          </Link>
        </nav>
      </div>

      <div
        className={`fixed inset-x-0 bottom-0 z-30 border-t border-line bg-ivory p-3 sm:hidden ${
          open || hideEnquire ? "hidden" : ""
        }`}
      >
        <Link href="/#contact" className={`${buttonClass("primary")} w-full`}>
          {t.nav.enquire}
        </Link>
      </div>
    </>
  );
}
