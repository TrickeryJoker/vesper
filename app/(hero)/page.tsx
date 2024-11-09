import React from 'react';
import ImageHome from "/public/home.jpg";
import Hero from "@/components/hero";
import {Metadata} from "next";

import { Zhi_Mang_Xing } from "next/font/google";



const inter = Zhi_Mang_Xing ({weight:'400',subsets:['latin']})


export const metadata: Metadata = {
    title: 'Home',
}


export default function Page() {
    return (
        <div className={inter.className}>
            <Hero  imgUrl={ImageHome} altText={'Home'} content={'不要温和地走入那个良夜'}/>
        </div>
    );
}