"use client"
import { useRouter } from "next/navigation";

const Home=()=>{

  const router=useRouter();

  return (
    <div>
        {router.push('/login')};
    </div>
  )
}

export default Home;