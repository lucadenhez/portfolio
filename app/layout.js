import { getLocale, getMessages, getTranslations } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { ViewTransitions } from "next-view-transitions";
import localFont from 'next/font/local';

import SmoothScroll from "./(main)/components/SmoothScroll";

import "./globals.css";


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

    return (
        <ViewTransitions>
            <html lang={locale}>
                <body
                    className={`antialiased ${diatypeVariable.className}`}
                >
                    <NextIntlClientProvider locale={locale} messages={messages}>
                        <SmoothScroll>
                            {children}
                        </SmoothScroll>
                    </NextIntlClientProvider>
                </body>
            </html >
        </ViewTransitions>
    );
}
