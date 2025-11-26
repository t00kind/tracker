import { Space_Mono } from "next/font/google";
import "./globals.css";
import type { PropsWithChildren } from 'react';

import { TelegramProvider } from "./useTg";
import { AuthProvider } from "./components/AuthProvider";
import Script from "next/script";

const mono = Space_Mono({ subsets: ["latin"], weight: '400' });

export const metadata = {
  title: "tracker",
  description: "I'm just better, today."
}

export default function RootLayout({ children}: PropsWithChildren) {
  return (
    <html lang="ru" suppressHydrationWarning>
    <body className={mono.className} suppressHydrationWarning>
    <Script
        src="https://telegram.org/js/telegram-web-app.js"
        strategy="beforeInteractive"
    />
        <div>
            <TelegramProvider>
               <AuthProvider>
                  {children}
               </AuthProvider>
            </TelegramProvider>
        </div>
      </body>
    </html>
  );
}

