import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';
import dynamic from 'next/dynamic'

const CrispWithNoSSR = dynamic(
  () => import('@/components/Crisp'),
  { ssr: false }
)
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
      <CrispWithNoSSR />
      <body className={inter.className}>
          {children}
          <Analytics />
          <SpeedInsights />
      </body>
    </html>
  );
}
