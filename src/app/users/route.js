import { NextResponse } from "next/server";

export async function GET(request,response){
    return NextResponse.json({name:"land" ,age:28 , isActive:true},{status:404})
}