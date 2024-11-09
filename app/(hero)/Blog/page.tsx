import React from 'react';
import Hero from "@/components/hero";
import ReliabilityImage from "/public/reliability.jpg";
import {Metadata} from "next";




export const metadata: Metadata = {
    title: 'Blog',
}

function Page() {
    return (
        <div>
            <Hero imgUrl={ReliabilityImage} altText={'ReliabilityImage'} content={'博客主页'}/>
        </div>
    );
}

export default Page;