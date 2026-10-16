"use client";

import { createContext, useContext, useEffect, useSyncExternalStore } from "react";
import { messages, type Lang } from "@/content/messages";

type LanguageValue = {
  lang: Lang;
  t: (typeof messages)["en"];
  toggle: () => void;
};

const LanguageContext = createContext<LanguageValue | null>(null);

const listeners = new Set<() => void>();

let lang: Lang = "en";

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return lang;
}

function getServerSnapshot(): Lang {
  return "en";
}

function writeLang(next: Lang) {
  lang = next;
  window.localStorage.setItem("avenza-lang", next);
  listeners.forEach((listener) => listener());
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const current = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    const saved = window.localStorage.getItem("avenza-lang");
    if ((saved === "hi" || saved === "en") && saved !== lang) {
      lang = saved;
      listeners.forEach((listener) => listener());
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = current === "hi" ? "hi" : "en-IN";
    document.documentElement.dataset.lang = current;
  }, [current]);

  return (
    <LanguageContext.Provider
      value={{
        lang: current,
        t: messages[current],
        toggle: () => writeLang(current === "en" ? "hi" : "en"),
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useI18n() {
  const value = useContext(LanguageContext);
  if (!value) {
    throw new Error("useI18n must be used within LanguageProvider");
  }
  return value;
}

export function LanguageButton({ className = "" }: { className?: string }) {
  const { lang: current, toggle, t } = useI18n();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={current === "hi"}
      aria-label={t.langAria}
      className={`inline-flex items-center justify-center border border-current/25 px-2.5 py-1.5 text-sm leading-none transition-colors hover:border-current ${className}`}
    >
      {t.langLabel}
    </button>
  );
}
