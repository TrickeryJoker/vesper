import React from 'react';
import Hero from "@/components/hero";
import PerformanceImage from "/public/performance.jpg";
import {Metadata} from "next";




export const metadata: Metadata = {
    title: 'Vps',
}
function Page() {
    return (
        <div>
            <Hero imgUrl={PerformanceImage} altText={'PerformanceImage'} content={'哪吒监控'}/>
        </div>
    );
}

export default Page;