"use client"
import Input from "@/app/components/Input"
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";


const Profile=()=>{

    const router=useRouter();

    const onLogout=async (e)=>{
        e.preventDefault();

        const response=await axios.get('/api/users/logout');
        if(response.status===200){
            router.push('/login');
        }
    }

    return(
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
            <div className="bg-white px-16 pt-8 pb-12 mb-4">
                <h1 className="text-3xl mb-4 text-center">Welcome to Home Page</h1>
                    <button
                        className="bg-red-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full w-full"
                        onClick={(e)=>onLogout(e)}
                    >
                        Logout
                    </button>
            </div>
        </div>
    )
}

export default Profile;