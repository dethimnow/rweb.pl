import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "rweb.pl — strony, aplikacje i wdrożenia AI dla MŚP",
  description:
    "Pomagamy małym i średnim firmom skalować biznes: strony www, aplikacje webowe oraz automatyzacja i sztuczna inteligencja, która oszczędza czas.",
  metadataBase: new URL("https://rweb.pl"),
  openGraph: {
    title: "rweb.pl — strony, aplikacje i inteligentna automatyzacja AI",
    description:
      "Software house i wdrożenia AI dla MŚP. Konkretne narzędzia, mierzalne efekty.",
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
