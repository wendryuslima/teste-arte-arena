import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";

const mulish = Mulish({
  subsets: ["latin-ext"],
  variable: "--font-mulish",
});

export const metadata: Metadata = {
  title: "Finance App - Dashboard Financeiro",
  description: "Sistema de gestão financeira pessoal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${mulish.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
