import { Space_Mono } from "next/font/google";
import "./globals.css";

const mono = Space_Mono({ subsets: ["latin"], weight: '400' });

export const metadata = {
  title: "tracker",
  description: "I'm just better, today.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mono.className}>{children}</body>
    </html>
  );
}
