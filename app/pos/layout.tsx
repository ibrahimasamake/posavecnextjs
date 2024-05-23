// Layout.js
import React from 'react';
import {Headerstock} from "@/components/stock/Headerstock";
import {Header} from "@/components/Header";

const Layout = ({children,}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <main className={'h-auto min-h-screen bg-background'}>
            {children}
        </main>
    );
};

export default Layout;
