import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nerforit — Computer Store & Service",
  description: "Computer store, accessories and technology services."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
