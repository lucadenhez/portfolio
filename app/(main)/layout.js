import { getLocale, getMessages, getTranslations } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { ViewTransitions } from "next-view-transitions";
import localFont from 'next/font/local';
import { isMobile } from 'react-device-detect';

import Nav from "./components/nav/Nav";
import SmoothScroll from "./components/SmoothScroll";
import Footer from "./components/Footer";

import "../globals.css";

export const metadata = {
  title: "Luca Denhez",
  description: "Nice to meet you.",
};

export default async function WorksLayout({ children }) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <SmoothScroll>
      <header className="px-15 py-10">
        <Nav />
      </header>
      {children}
      <Footer />
    </SmoothScroll>
  );
}
