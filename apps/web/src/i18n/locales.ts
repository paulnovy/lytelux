export const locales = ["pl", "en"] as const;
export type Locale = typeof locales[number];
export const defaultLocale: Locale = "pl";

export function isLocale(v: string | null | undefined): v is Locale {
  return typeof v === "string" && (locales as readonly string[]).includes(v);
}

