import type { Metadata } from "next";
import "./globals.css";
import OrientationWarning from "@/components/OrientationWarning";

export const metadata: Metadata = {
  title: "Barrancas Premium",
  description: "Viajes Premium - Eleva tu vida",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <OrientationWarning />
        {children}
      </body>
    </html>
  );
}


