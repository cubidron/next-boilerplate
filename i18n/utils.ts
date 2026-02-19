"use server";
import { Locale } from "next-intl";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function setUserLocale(locale: Locale) {
  const cookieStore = await cookies();
  cookieStore.set("NEXT_LOCALE", locale);
  revalidatePath("/");
}

export async function getUserLocale(): Promise<Locale | undefined> {
  const cookieStore = await cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value;
  if (locale) {
    return locale as Locale;
  }
  return undefined;
}
