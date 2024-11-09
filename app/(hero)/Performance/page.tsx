import React from 'react';
import Hero from "@/components/hero";
import PerformanceImage from "/public/performance.jpg";
import {Metadata} from "next";




export const metadata: Metadata = {
    title: 'Performance',
}
function Page() {
    return (
        <div>
            <Hero imgUrl={PerformanceImage} altText={'PerformanceImage'} content={'Performance'}/>
        </div>
    );
}

export default Page;