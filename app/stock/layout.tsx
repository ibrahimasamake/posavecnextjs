// Layout.js
import { Header } from "@/components/Header";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ weight: "400", subsets: ["latin"] });

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main
      className={cn(
        "h-auto  min-h-screen bg-background antialiased text-tiny",
        inter.className
      )}
    >
      {children}
    </main>
  );
};

export default Layout;
