import { getLocale, getMessages, getTranslations } from "next-intl/server";
import Nav from "./components/Nav";
import SmoothScroll from "./components/SmoothScroll";
import "./globals.css";

import localFont from 'next/font/local';
import { NextIntlClientProvider, useTranslations } from "next-intl";
import Footer from "./components/Footer";


const diatypeVariable = localFont({
  src: '../public/fonts/ABCDiatypeVariable-Trial.woff2',
});

export const metadata = {
  title: "Luca Denhez",
  description: "Nice to meet you.",
};

export default async function RootLayout({ children }) {
  const locale = await getLocale();
  const messages = await getMessages();
  const navLang = await getTranslations("nav");

  const navItems = [
    {
      label: navLang("works"),
      path: "/ui#works"
    },
    {
      label: navLang("resume"),
      path: "https://drive.google.com/file/d/1NkNNd8anpsazWsdjcZxsyFWvMHu63pOJ/view?usp=sharing",
      outside: true,
    },
    {
      label: navLang("about"),
      path: "/about"
    },
  ];

  return (
    <html lang={locale}>
      <body
        className={`antialiased ${diatypeVariable.className}`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <SmoothScroll>
            <header className="p-5">
              <Nav items={navItems} />
            </header>
            {children}
            <Footer />
          </SmoothScroll>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
