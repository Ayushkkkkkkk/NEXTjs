import { user } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(req , res){
    console.log(res);
    const data = user;
    const userData = data.filter((item)=>item.age==res.params.id)
    return NextResponse.json({userData},{status:200})
}
