import { Space_Mono } from "next/font/google";
import "./globals.css";
import type { PropsWithChildren } from 'react';


import { TelegramProvider } from "./useTg";
import Script from "next/script";

const mono = Space_Mono({ subsets: ["latin"], weight: '400' });

export const metadata = {
  title: "tracker",
  description: "I'm just better, today."
}
export default async function RootLayout({ children}: PropsWithChildren) {
  return (
    <html>
    <body className={mono.className}>
    <Script
        src="https://telegram.org/js/telegram-web-app.js"
        strategy="beforeInteractive"
    />
        <div>
            <TelegramProvider>
               {children}
            </TelegramProvider>
        </div>
      </body>
    </html>
  );
}

