"use client";

import { FormEvent, useMemo, useState } from "react";
import { company, contact, hasText, photos, whatsappHref } from "@/content/site";
import { useI18n } from "@/components/Language";
import { PlainPhoto } from "@/components/PlainPhoto";
import { buttonClass } from "@/components/ui";
import type { Messages } from "@/content/messages";

type Fields = {
  name: string;
  phone: string;
  email: string;
  date: string;
  message: string;
  companyWebsite: string;
};

type ErrorKey = "name" | "phone" | "email" | "date" | "message";
type Errors = Partial<Record<ErrorKey, ErrorKey>>;

const empty: Fields = {
  name: "",
  phone: "",
  email: "",
  date: "",
  message: "",
  companyWebsite: "",
};

function validate(fields: Fields): Errors {
  const errors: Errors = {};
  if (fields.name.trim().length < 2) errors.name = "name";
  const digits = fields.phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 13) {
    errors.phone = "phone";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
    errors.email = "email";
  }
  if (fields.date) {
    const chosen = new Date(`${fields.date}T00:00:00`);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (Number.isNaN(chosen.getTime()) || chosen < today) {
      errors.date = "date";
    }
  }
  if (fields.message.length > 1000) errors.message = "message";
  return errors;
}

function summaryOf(fields: Fields, copy: Messages["enquiry"]) {
  return [
    copy.summaryTitle,
    `${copy.summaryName}: ${fields.name.trim()}`,
    `${copy.summaryPhone}: ${fields.phone.trim()}`,
    `${copy.summaryEmail}: ${fields.email.trim()}`,
    `${copy.summaryDate}: ${fields.date || copy.notSpecified}`,
    `${copy.summaryMessage}: ${fields.message.trim() || copy.none}`,
  ].join("\n");
}

export function EnquiryForm() {
  const { t } = useI18n();
  const copy = t.enquiry;
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "unsent" | "error">("idle");
  const [copied, setCopied] = useState(false);
  const whatsapp = whatsappHref(copy.whatsappText);

  const delivery = useMemo(() => {
    if (hasText(contact.enquiryEndpoint)) return "endpoint" as const;
    if (hasText(contact.email)) return "email" as const;
    return "none" as const;
  }, []);

  function update(key: keyof Fields, value: string) {
    setFields((current) => ({ ...current, [key]: value }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(fields);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    if (fields.companyWebsite.trim()) {
      setStatus("sent");
      return;
    }

    const payload = {
      name: fields.name.trim(),
      phone: fields.phone.trim(),
      email: fields.email.trim(),
      preferredVisitDate: fields.date,
      message: fields.message.trim(),
      company: company.legalName,
    };

    if (delivery === "endpoint") {
      setStatus("sending");
      try {
        const response = await fetch(contact.enquiryEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!response.ok) throw new Error("Request failed");
        setStatus("sent");
      } catch {
        setStatus("error");
      }
      return;
    }

    if (delivery === "email") {
      const subject = encodeURIComponent(copy.mailSubject);
      const body = encodeURIComponent(summaryOf(fields, copy));
      window.location.href = `mailto:${contact.email.trim()}?subject=${subject}&body=${body}`;
      setStatus("sent");
      return;
    }

    setStatus("unsent");
  }

  async function copySummary() {
    try {
      await navigator.clipboard.writeText(summaryOf(fields, copy));
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  const errorText: Record<ErrorKey, string> = {
    name: copy.errName,
    phone: copy.errPhone,
    email: copy.errEmail,
    date: copy.errDate,
    message: copy.errMessage,
  };

  const inputClass =
    "mt-2 w-full border-2 border-line bg-ivory px-3 py-3 text-base text-charcoal outline-none transition-colors focus:border-olive";

  return (
    <section id="contact" className="scroll-mt-24 bg-cream">
      <div className="mx-auto grid max-w-[1240px] lg:grid-cols-12">
        <div className="bg-olive-deep lg:col-span-5">
          <PlainPhoto
            src={photos.road.src}
            alt={photos.road.alt}
            sizes="(min-width: 1024px) 520px, 100vw"
            imageClassName="object-[center_72%]"
            className="aspect-[16/10] w-full"
          />
          <div className="bg-olive-deep px-5 py-5 text-ivory sm:px-8 lg:px-10 lg:py-8">
            <p className="text-sm font-semibold tracking-wide text-gold uppercase">{copy.office}</p>
            <p className="mt-2 max-w-sm text-lg font-semibold leading-snug">{t.facts.registeredOffice}</p>
            {hasText(contact.phone) ? (
              <p className="mt-4">
                <a className="underline decoration-white/40 underline-offset-4" href={`tel:${contact.phone.replace(/\s/g, "")}`}>
                  {contact.phone}
                </a>
              </p>
            ) : null}
            {hasText(contact.email) ? (
              <p className="mt-2">
                <a className="underline decoration-white/40 underline-offset-4" href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
              </p>
            ) : null}
            {whatsapp ? (
              <a href={whatsapp} className={`${buttonClass("secondary")} mt-6 w-fit`} target="_blank" rel="noopener noreferrer">
                {copy.whatsapp}
              </a>
            ) : null}
          </div>
        </div>

        <div className="px-4 py-10 sm:px-6 lg:col-span-7 lg:px-10 lg:py-14">
          <p className="inline-flex bg-bronze px-3 py-1 text-sm font-semibold tracking-wide text-charcoal uppercase">
            {t.visit.schedule}
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-olive-deep sm:text-4xl">{t.visit.heading}</h2>
          <p className="mt-3 text-lg font-semibold leading-snug text-charcoal">{copy.heading}</p>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-ink sm:text-lg">{t.visit.body}</p>
          <p className="mt-2 max-w-xl text-base leading-relaxed text-muted">{copy.body}</p>

          <div className="mt-6">
          {status === "sent" || status === "unsent" ? (
            <div className="border border-line border-t-8 border-t-bronze bg-paper p-6 text-charcoal sm:p-8" role="status">
              <h3 className="font-serif text-3xl font-bold leading-tight text-olive-deep">
                {status === "sent" ? copy.received : copy.notSent}
              </h3>
              <p className="mt-4 text-ink/85">
                {status === "sent" && delivery === "endpoint"
                  ? copy.sentEndpoint
                  : status === "sent"
                    ? copy.sentEmail
                    : copy.unsent}
              </p>
              {status === "unsent" ? (
                <button type="button" className={`${buttonClass("secondary")} mt-8`} onClick={copySummary}>
                  {copied ? copy.copied : copy.copy}
                </button>
              ) : null}
              <button
                type="button"
                className="mt-6 block text-sm text-muted underline decoration-line underline-offset-4"
                onClick={() => {
                  setStatus("idle");
                  setFields(empty);
                  setCopied(false);
                }}
              >
                {copy.another}
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="relative border border-line border-t-8 border-t-bronze bg-paper p-5 text-charcoal sm:p-7">
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="companyWebsite">{copy.office}</label>
                <input
                  id="companyWebsite"
                  name="companyWebsite"
                  tabIndex={-1}
                  autoComplete="off"
                  value={fields.companyWebsite}
                  onChange={(event) => update("companyWebsite", event.target.value)}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label={copy.name} htmlFor="full-name" error={errors.name ? errorText.name : undefined} className="sm:col-span-2" optionalLabel={t.optional}>
                  <input
                    id="full-name"
                    name="name"
                    autoComplete="name"
                    required
                    value={fields.name}
                    onChange={(event) => update("name", event.target.value)}
                    className={inputClass}
                  />
                </Field>
                <Field label={copy.phone} htmlFor="phone" error={errors.phone ? errorText.phone : undefined} optionalLabel={t.optional}>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    required
                    value={fields.phone}
                    onChange={(event) => update("phone", event.target.value)}
                    className={inputClass}
                  />
                </Field>
                <Field label={copy.email} htmlFor="email" error={errors.email ? errorText.email : undefined} optionalLabel={t.optional}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={fields.email}
                    onChange={(event) => update("email", event.target.value)}
                    className={inputClass}
                  />
                </Field>
                <Field label={copy.date} htmlFor="visit-date" error={errors.date ? errorText.date : undefined} optional optionalLabel={t.optional}>
                  <input
                    id="visit-date"
                    name="date"
                    type="date"
                    value={fields.date}
                    onChange={(event) => update("date", event.target.value)}
                    className={inputClass}
                  />
                </Field>
                <Field label={copy.message} htmlFor="message" error={errors.message ? errorText.message : undefined} optional optionalLabel={t.optional} className="sm:col-span-2">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={fields.message}
                    onChange={(event) => update("message", event.target.value)}
                    className={inputClass}
                  />
                </Field>
              </div>

              {status === "error" ? (
                <p className="mt-4 text-sm text-danger" role="alert">
                  {copy.error}
                </p>
              ) : null}

              <button type="submit" className={`${buttonClass("primary")} mt-6 w-full sm:w-auto`} disabled={status === "sending"}>
                {status === "sending" ? copy.sending : copy.submit}
              </button>
            </form>
          )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  error,
  optional = false,
  optionalLabel = "Optional",
  className = "",
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  optional?: boolean;
  optionalLabel?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="text-base font-semibold text-charcoal">
        {label}
        {optional ? <span className="ml-2 normal-case tracking-normal">{optionalLabel}</span> : null}
      </label>
      {children}
      {error ? (
        <p className="mt-1.5 text-sm text-danger" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
