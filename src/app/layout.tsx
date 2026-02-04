import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";

import { Header } from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mundo da Informática",
  description: "Venda de Peças de Computador e Manutenção",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} theme-dark`}
      >
        <Header />
        <main className="container">{children}</main>
        <footer className="footer">
          <p>© {new Date().getFullYear()} Mundo da Informática</p>
        </footer>
      </body>
    </html>
  );
}
