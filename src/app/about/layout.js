'use client'
import { usePathname } from "next/navigation"

export default function Layout({children}) {
    const pathName = usePathname();
    console.log(pathName);
    return (
        <div>
            {pathName !="/about/aboutCollage"?<h1>common layout for about page</h1>:null}
            {
                children
            }
        </div>
    )
}