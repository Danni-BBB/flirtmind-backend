'use client'; // Dòng này chỉ rõ đây là client-side component

import { useState, useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import './globals.css';

const getGeistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const getGeistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <html lang="en">
      <body className={`${isLoaded ? getGeistSans.variable : ""} ${isLoaded ? getGeistMono.variable : ""}`}>
        {children}
      </body>
    </html>
  );
}
