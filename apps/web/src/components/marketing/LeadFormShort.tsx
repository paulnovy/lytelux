"use client";
import { useEffect, useId, useState } from "react";

export function LeadFormShort() {
  const id = useId();
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");

  useEffect(() => {
    // Prime CSRF cookie
    fetch("/api/lead", { method: "GET", credentials: "same-origin" }).catch(() => {});
  }, []);

  return (
    <form
      id="contact"
      className="mt-16 grid gap-4 rounded-lg border p-6 bg-card"
      onSubmit={async (e) => {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement;
        const fd = new FormData(form);
        try {
          const res = await fetch("/api/lead", {
            method: "POST",
            headers: {
              "x-csrf-token": getCSRFCookie() ?? "",
            },
            body: fd,
          });
          setStatus(res.ok ? "ok" : "error");
        } catch {
          setStatus("error");
        }
      }}
    >
      <div>
        <label htmlFor={`${id}-name`} className="block text-sm font-medium">Imię i nazwisko</label>
        <input id={`${id}-name`} name="name" required className="mt-1 w-full rounded-md border px-3 py-2" />
      </div>
      <div>
        <label htmlFor={`${id}-email`} className="block text-sm font-medium">E-mail</label>
        <input id={`${id}-email`} name="email" type="email" required className="mt-1 w-full rounded-md border px-3 py-2" />
      </div>
      <div>
        <label htmlFor={`${id}-msg`} className="block text-sm font-medium">Wiadomość</label>
        <textarea id={`${id}-msg`} name="message" rows={4} className="mt-1 w-full rounded-md border px-3 py-2" />
      </div>
      {/* hCaptcha token placeholder, filled by client-side widget if used */}
      <input type="hidden" name="h-captcha-response" />
      <button className="btn-primary mt-2" type="submit">Wyślij</button>
      {status === "ok" && <p role="status" className="text-green-600">Dziękujemy! Skontaktujemy się wkrótce.</p>}
      {status === "error" && <p role="alert" className="text-red-600">Błąd wysyłki. Spróbuj ponownie.</p>}
    </form>
  );
}

function getCSRFCookie(): string | null {
  const m = document.cookie.match(/(?:^|; )csrfToken=([^;]+)/);
  return m ? decodeURIComponent(m[1]) : null;
}
