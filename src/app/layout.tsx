// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Orion Carbon | Verifiable Trust on the Blockchain",
  description: "Global industrial leader bridging physical, low-carbon materials with immutable digital traceability for the Net-Zero economy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-gray-900 text-white p-4 shadow-lg sticky top-0 z-50">
            <nav className="container mx-auto flex justify-between items-center">
                <a href="/" className="text-2xl font-bold">Orion Carbon</a>
                <div className="space-x-6 text-sm font-medium">
                    <a href="/solutions" className="hover:text-green-400 transition-colors">Industrial Solutions</a>
                    <a href="/blockchain" className="hover:text-green-400 transition-colors">Digital Integrity</a>
                    <a href="/impact" className="hover:text-green-400 transition-colors">Community & Impact</a>
                    <a href="/contact" className="hover:text-green-400 transition-colors">Contact</a>
                </div>
            </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-100 p-8 mt-16 text-center text-sm text-gray-600">
            <p>© {new Date().getFullYear()} Orion Carbon. All rights reserved. | <a href="/impact/investor-data" className="hover:text-gray-900">ESG Investor Data</a> | Developed on Next.js.</p>
        </footer>
      </body>
    </html>
  );
}
