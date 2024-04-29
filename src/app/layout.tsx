import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';
import {NextIntlClientProvider, useMessages} from 'next-intl';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
          {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
