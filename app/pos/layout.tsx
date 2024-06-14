// Layout.js
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import React from "react";

const openSans = Inter({ weight: "400", subsets: ["latin"] });

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main
      className={cn(
        "h-auto min-h-screen bg-background antialiased text-tiny",
        openSans.className
      )}
    >
      {children}
    </main>
  );
};

export default Layout;
