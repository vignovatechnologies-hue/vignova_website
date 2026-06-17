import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vignova Technologies — Intelligent Software for People & Businesses",
  description:
    "Vignova Technologies builds innovative software products and services that help individuals and businesses simplify operations, improve productivity, and accelerate digital transformation.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ backgroundColor: "white" }}>
      <body style={{ backgroundColor: "white", width: "100%", minHeight: "100vh" }}>
        {children}
      </body>
    </html>
  );
}