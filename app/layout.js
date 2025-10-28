import { getLocale, getMessages, getTranslations } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { ViewTransitions } from "next-view-transitions";
import localFont from 'next/font/local';
import { getSelectorsByUserAgent } from "react-device-detect"
import { headers } from "next/headers"

import SmoothScroll from "./(main)/components/SmoothScroll";

import "./globals.css";
import Whoops from "./(main)/whoops/page";


const diatypeVariable = localFont({
    src: '../public/fonts/ABCDiatypeVariable-Trial.woff2',
});


/*

MOBILE DETECTION

if (isMobile) {
        return (
            <ViewTransitions>
                <html lang={locale}>
                    <head>
                        <link rel="icon" href="/icons/rain_cloud.png" sizes="any" />
                    </head>
                    <body>
                        <NextIntlClientProvider locale={locale} messages={messages}>
                            <Whoops />
                        </NextIntlClientProvider>
                    </body>
                </html >
            </ViewTransitions>
        );
    } else {

*/

const helveticaVariable = localFont({
    src: [
        {
            path: '../public/fonts/helvetica_neue/helvetica-neue-bold.woff2',
            weight: '700',
            style: 'normal'
        },
        {
            path: '../public/fonts/helvetica_neue/helvetica-neue-medium.woff2',
            weight: '500',
            style: 'normal'
        },
        {
            path: '../public/fonts/helvetica_neue/helvetica-neue-roman.woff2',
            weight: '400',
            style: 'normal'
        },
        {
            path: '../public/fonts/helvetica_neue/helvetica-neue-light.woff2',
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
        <ViewTransitions>
            <html lang={locale}>
                <head>
                    <link rel="icon" href="/icons/rain_cloud.png" sizes="any" />
                </head>
                <body
                    className={`antialiased ${helveticaVariable.className}`}
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
