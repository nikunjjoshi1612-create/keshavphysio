import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://keshavphysio.com"),
  title: "Keshav Advanced Physiotherapy Center | Center & Home Physiotherapy | Ahmedabad",
  description: "One Place • Infinite Physiotherapy Solutions. Evidence-based center & home physiotherapy in Ghodasar, Ahmedabad led by Dr. Nikunj Joshi and Dr. Priyanshi Vani.",
  keywords: [
    "Physiotherapy Ahmedabad",
    "Keshav Physiotherapy Clinic Ghodasar",
    "Physiotherapy at Home Ahmedabad",
    "Sports Physiotherapy Ahmedabad",
    "Knee Replacement Rehabilitation Ahmedabad",
    "Stroke Rehabilitation Ghodasar",
    "Back Pain Treatment Ahmedabad",
    "Dr Nikunj Joshi Physiotherapist"
  ],
  authors: [{ name: "Dr. Nikunj Arvindkumar Joshi" }, { name: "Dr. Priyanshi D. Vani" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/images/keshav_logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-teal-100 selection:text-teal-900" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
