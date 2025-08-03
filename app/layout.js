import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "Intelicore Assignment",
  description: "Intelicore frontend Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
