export default function Dx(){
    return (
        <div>
            <h1>
                user page
            </h1>
        </div>
    )
}


export function generateMetadata({params}){
    return {
        title:"user page title",
        description:"user page desc"
    }
}