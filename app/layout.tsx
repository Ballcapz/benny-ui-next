import type { Metadata } from "next";
import { Jura } from "next/font/google";
import "./globals.css";

const jura = Jura({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Benny Finance",
  description: "Your data when you want it",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jura.className}>{children}</body>
    </html>
  );
}
