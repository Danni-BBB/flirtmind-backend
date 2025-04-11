// Mark the file as a client component
'use client';

import { useEffect, useState } from 'react'; // Import hooks after the "use client" directive
import './globals.css'; // Other imports

export default function RootLayout({ children }) {
  // Component logic here
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
