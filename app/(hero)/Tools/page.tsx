import React from 'react';
import Hero from "@/components/hero";
import ScaleImage from "/public/scale.jpg";
import {Metadata} from "next";





export const metadata: Metadata = {
    title: 'Scale',
}
function Page() {
    return (
        <div>
            <Hero imgUrl={ScaleImage} altText={'ScaleImage'} content={'工具箱'}/>
        </div>
    );
}

export default Page;