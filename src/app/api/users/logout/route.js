import User from "@/models/user";
import bcryptjs from 'bcryptjs';
import Connection from "@/database/config";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

Connection();

export const GET=async (NextRequest)=>{
    try{
       
        const response=NextResponse.json({message:'logout successfull',success:true});

        // console.log("end");
        response.cookies.set('token',"",{httpOnly:true,expires:new Date(0)});
        return response;

    }catch(error){
        console.log(error);
        return new Response("Something went wrong",{status:500})
    }
}