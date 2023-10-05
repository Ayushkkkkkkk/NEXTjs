import {redirect} from "next/navigation"

export default function Page(){
    redirect("/");
    return (
        
        <div>
            <h1>Admin page</h1>
            <h2>Heding 2 in user page</h2>
        </div>
    )
}