import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "../components/theme-provider";

import NavBar from "../components/navbar";
import Footer from "../components/footer";

import { Toaster } from "@/components/ui/toaster";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gramapheniers",
  description: "Generado por Gramaphenia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={urbanist.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          {children}
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
