export default async function API(){
    const result = await fetch("https://dummyjson.com/users");
    return result.json();
}