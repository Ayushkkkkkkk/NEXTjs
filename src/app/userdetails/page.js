"use client"

import Script from "next/script";

export default function PageJS(){
    return (
        <div>
            <h1>
                <Script src="/location.js" onLoad={()=>{
                    console.log("loaded");
                }}/>
                Get user location
            </h1>
        </div>
    )
}