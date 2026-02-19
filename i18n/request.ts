"use server";
import { getRequestConfig } from "next-intl/server";
import { locales } from "./config";
import { getUserLocale } from "./utils";

export default getRequestConfig(async () => {
  let locale = await getUserLocale();
  if (!locale || !locales.includes(locale)) {
    locale = "en"; // default locale
  }

  return {
    locale,
    locales: locales,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
