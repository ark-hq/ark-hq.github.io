import type { Metadata } from "next";
import { Rosarivo, DM_Sans } from "next/font/google";
import "./globals.css";

const rosarivo = Rosarivo({
  variable: "--font-rosarivo",
  subsets: ["latin"],
  weight: "400"
});

const dm_sans = DM_Sans({
  variable: "--font-dm_sans-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ARK: Travel Beyond Limits",
  description: "One platform to discover and create endless memories across the globe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dm_sans.variable} ${rosarivo.variable}`}>
        {children}
      </body>
    </html>
  );
}
