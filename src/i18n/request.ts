import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const messages = {
    ...(await import(`../../messages/${locale}/login.json`)).default,
    ...(await import(`../../messages/${locale}/homepage.json`)).default,
    // เพิ่มหน้าอื่นๆ ได้ที่นี่
  };
  return {
    locale,
    // messages: (await import(`../../messages/${locale}.json`)).default,
    messages,
  };
});
