"use client"
import Input from "@/app/components/Input"
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const defaultData={
    username:"",
    password:""
}


const Login=()=>{

    const [data,setData]=useState(defaultData);

    const router=useRouter();

    const onValueChange=(e)=>{
        // console.log("hello");
        setData({...data,[e.target.name]:e.target.value});
    }

    const onLogin=async (e)=>{
        e.preventDefault();

        if(!data.username || !data.password){
            alert("Please fill all mandatory fields");
            return;
        }

        //API CALL
        try{
           const response= await axios.post("api/users/login",data);
           setData(defaultData);

           if(response.status===200){
                router.push("/profile");
           }
        } catch(error){
            console.log(error);
        }
    }

    return(
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
            <div className="bg-white px-16 pt-8 pb-12 mb-4">
                <h1 className="text-3xl mb-4 text-center">Login</h1>
                <form>
                    <Input 
                        lable="Username"
                        id="username"
                        type="text"
                        value={data.username}
                        onChange={(e)=>onValueChange(e)}
                    />
                    <Input 
                        lable="Password"
                        id="password"
                        type="password"
                        value={data.password}
                        onChange={(e)=>onValueChange(e)}
                    />
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full w-full"
                        onClick={(e)=>onLogin(e)}
                    >
                        Submit
                    </button>
                    <p className="mt-4 text-center ">
                        Don't have an account?
                        <Link href="/register" className="text-blue-500 hover:">Register</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login;