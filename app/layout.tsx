import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ weight: "400", subsets: ["latin"] });
const anekTelugu = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        draggable={true}
        className={cn(inter.className, "antialiased", "h-lvh")}
      >
        {children}
      </body>
    </html>
  );
}
