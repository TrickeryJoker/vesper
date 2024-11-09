import React from 'react';
import ImageHome from "/public/home.jpg";
import Hero from "@/components/hero";
import {Metadata} from "next";




export const metadata: Metadata = {
    title: 'Home',
}


export default function Page() {
    return (
        <Hero  imgUrl={ImageHome} altText={'Home'} content={'This is my home page'}/>
    );
}