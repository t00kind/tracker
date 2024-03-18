import { Space_Mono } from "next/font/google";
import "./globals.css";
import type { PropsWithChildren } from 'react';

import { TelegramProvider } from "./useTg";

const mono = Space_Mono({ subsets: ["latin"], weight: '400' });

export const metadata = {
  title: "tracker",
  description: "I'm just better, today.",
};
export default async function RootLayout({ children}: PropsWithChildren) {
  return (
    <html>
      <body className={mono.className}>
        <div>
        <TelegramProvider>
        {children}
        </TelegramProvider>
        </div>
      </body>
    </html>
  );
}

