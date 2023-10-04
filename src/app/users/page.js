import getUsers from "../../../service/getUsers"

export default async function Page(){
    const getUserList = getUsers();
    const land = await getUserList;
    console.log(land)
    return (
        <div>
          
        </div>
    )
}