import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { ViewTransitions } from "next-view-transitions";
import localFont from 'next/font/local';
import { ThemeProvider } from "next-themes";

import "../globals.css";

import Nav from "../(works)/components/nav/Nav";
import SmoothScroll from "../(works)/components/universal/SmoothScroll";

const helveticaVariable = localFont({
  src: [
    {
      path: '../../public/fonts/helvetica_neue/helvetica-neue-bold.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../public/fonts/helvetica_neue/helvetica-neue-medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../public/fonts/helvetica_neue/helvetica-neue-roman.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/helvetica_neue/helvetica-neue-light.woff2',
      weight: '300',
      style: 'normal'
    }
  ]
});

export const metadata = {
  title: "Luca Denhez",
  description: "Nice to meet you.",
};

export default async function RootLayout({ children }) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icons/rain_cloud.png" sizes="any" />
      </head>
      <body className={`antialiased ${helveticaVariable.className}`} suppressHydrationWarning>
        <div className="bg-white dark:bg-black dark:text-white">
          <ThemeProvider
            attribute="class"
            forcedTheme="light"
            enableSystem={false}
            disableTransitionOnChange
            enableColorScheme
          >
            <NextIntlClientProvider locale={locale} messages={messages}>
              <ViewTransitions>
                <SmoothScroll>
                  <header className="px-15 py-10">
                    <Nav />
                  </header>
                  {children}
                </SmoothScroll>
              </ViewTransitions>
            </NextIntlClientProvider>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
