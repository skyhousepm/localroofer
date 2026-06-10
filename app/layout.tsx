import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const BASE_URL = "https://www.localroofer.ca";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "LocalRoofer.ca — Trusted Roofing in Toronto & the GTA",
    template: "%s | LocalRoofer.ca",
  },

  description:
    "LocalRoofer.ca connects Toronto & GTA homeowners with licensed, insured local roofing contractors. Free estimates for roof repair, replacement, and inspection. Fast response, honest pricing.",

  keywords: [
    "roofing contractor Toronto",
    "roofer GTA",
    "roof repair Toronto",
    "roof replacement Toronto",
    "roof inspection GTA",
    "local roofer Ontario",
    "roofing company Mississauga",
    "roofing company Brampton",
  ],

  authors: [{ name: "LocalRoofer.ca" }],
  creator: "LocalRoofer.ca",
  publisher: "LocalRoofer.ca",

  openGraph: {
    type: "website",
    locale: "en_CA",
    url: BASE_URL,
    siteName: "LocalRoofer.ca",
    title: "LocalRoofer.ca — Trusted Roofing in Toronto & the GTA",
    description:
      "Connect with trusted, licensed local roofers across Toronto & the GTA. Free estimates for repair, replacement, and inspection.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LocalRoofer.ca — Toronto & GTA Roofing Contractors",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "LocalRoofer.ca — Trusted Roofing in Toronto & the GTA",
    description:
      "Connect with trusted, licensed local roofers across Toronto & the GTA. Free estimates for repair, replacement, and inspection.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <body className={`${inter.className} antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
