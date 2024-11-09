import Header from "@/components/headers";
import React from "react";


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
        <Header/>
        {children}
        </>
    );
}
