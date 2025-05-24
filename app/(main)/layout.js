import { getLocale, getMessages, getTranslations } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { ViewTransitions } from "next-view-transitions";
import localFont from 'next/font/local';

import Nav from "./components/Nav";
import SmoothScroll from "./components/SmoothScroll";
import Footer from "./components/Footer";

import "../globals.css";


const diatypeVariable = localFont({
  src: '../../public/fonts/ABCDiatypeVariable-Trial.woff2',
});

export const metadata = {
  title: "Luca Denhez",
  description: "Nice to meet you.",
};

export default async function WorksLayout({ children }) {
  const locale = await getLocale();
  const messages = await getMessages();
  const navLang = await getTranslations("nav");

  const navItems = [
    {
      label: navLang("works"),
      path: "/works"
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
    <SmoothScroll>
      <header className="p-5">
        <Nav items={navItems} />
      </header>
      {children}
      <Footer />
    </SmoothScroll>
  );
}
