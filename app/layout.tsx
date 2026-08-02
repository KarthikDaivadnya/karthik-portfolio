import type { Metadata } from "next";
import { Space_Grotesk, Poppins, Inter, JetBrains_Mono } from "next/font/google";

import "./globals.css";

const grotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400","500","600","700"], variable: "--font-grotesk" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400","500","600","700"], variable: "--font-poppins" });
const inter = Inter({ subsets: ["latin"], weight: ["400","500","600"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400","500"], variable: "--font-mono" });

const siteUrl = "https://karthik-portfolio-opal-two.vercel.app"; // TODO: replace with your real domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Karthik — AI/ML Engineer & Software Developer",
  description:
    "Portfolio of Karthik, a 2026 CSE graduate building predictive maintenance systems, RAG pipelines, and full-stack ML products.",
  keywords: ["Karthik", "AI Engineer", "Machine Learning Engineer", "Software Developer", "Portfolio", "RAG", "FastAPI", "React"],
  openGraph: {
    title: "Karthik — AI/ML Engineer & Software Developer",
    description: "Predictive maintenance ML, RAG pipelines, and full-stack products — built and shipped end-to-end.",
    url: siteUrl,
    siteName: "Karthik's Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karthik — AI/ML Engineer & Software Developer",
    description: "Predictive maintenance ML, RAG pipelines, and full-stack products.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${grotesk.variable} ${poppins.variable} ${inter.variable} ${mono.variable}`}>
      <body className="font-inter antialiased">
        {/* JSON-LD structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Karthik",
              jobTitle: "AI/ML Engineer & Software Developer",
              alumniOf: "Bapuji Institute of Engineering and Technology, Bangalore",
              url: siteUrl,
              sameAs: ["https://github.com/KarthikDaivadnya"],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
