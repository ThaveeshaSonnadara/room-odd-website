import React from 'react';
import { AuthProvider } from '@/components/auth/AuthProvider';
import '@/styles/globals.css'; // ensure Tailwind imports

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <head />
      <body className="h-full bg-bg text-primary">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
