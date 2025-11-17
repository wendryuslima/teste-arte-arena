import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import { TransactionsProvider } from "./_contexts/transactions-context";
import { Toaster } from "@/app/_components/ui/sonner";
import Footer from "./_components/footer";

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
    <html lang="pt-BR" className="">
      <body className={`${mulish.variable} font-sans antialiased flex flex-col min-h-screen`}>
        <TransactionsProvider>
          <div className="flex-1">
            {children}
          </div>
          <Footer />
          <Toaster />
        </TransactionsProvider>
      </body>
    </html>
  );
}
