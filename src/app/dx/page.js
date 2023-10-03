async function nothing(){
    let data = await fetch("https://dummyjson.com/users");
    data = await data.json();
    return data.users;
}



export default async function Dx(){
    let users = await nothing();
    console.log(users)
    return (
        <div>
            <h1>
                user page d
            </h1>
{/* 
            {
                users.map(item=>{
                    <h1>{item.name}</h1>
            })
            } */}
        </div>
    );
}


