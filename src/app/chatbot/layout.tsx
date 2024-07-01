import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import './chatbot.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Chatbot with ChatGPT",
  description: "Chatbot with ChatGPT using Next.js and Zustand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script src="https://cdn.tailwindcss.com" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
