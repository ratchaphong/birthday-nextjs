// app/[locale]/layout.tsx

import { Geist, Geist_Mono, Kanit, Poppins } from "next/font/google";
import "../globals.css";
import { ConfigProvider } from "antd";
import { ReactNode } from "react";
import { hasLocale, NextIntlClientProvider } from "next-intl"; // 👈 แก้ตรงนี้
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

const poppinsSans = Poppins({
  variable: "--font-english",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const kanitSans = Kanit({
  variable: "--font-thai",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["thai"],
});

const themeConfig = {
  token: {},
  components: {
    Button: {},
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${poppinsSans.variable} ${kanitSans.variable}`}>
        <ConfigProvider theme={themeConfig}>
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </ConfigProvider>
      </body>
    </html>
  );
}
