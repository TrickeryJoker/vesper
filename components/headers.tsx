"use client"
import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";


const linkData = [
    {title: "Performance", href: "/Performance"},
    {title: "Reliability", href: "/Reliability"},
    {title: "Scale", href: "/Scale"},
]


function Header() {
    const pathname = usePathname()
    return (
        <div className={"absolute w-full z-10"}>
            <div className="flex justify-between container mx-auto text-white p-8 items-center">
                <Link className={"text-3xl font-bold"} href="/">Home</Link>
                <div className={"text-xl space-x-4"}>
                    {linkData.map((link) => (
                        <Link key={link.title} href={link.href} className={`cursor-pointer ${pathname === link.href ? "text-purple-500" : ""}`}>{link.title}</Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Header;