'use client';

import { useEffect, useState } from 'react';
import './globals.css';

export default function RootLayout({ children }) {
  useEffect(() => {
    // Logic of useEffect can be added here
  }, []);
  
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
s