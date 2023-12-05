"use client"
import SigninForm from "@/_auth/forms/SigninForm";
import { useRouter } from "next/navigation";


const page = () => {
  const isAuthenticated = false;
  const router = useRouter()
  return (
    <>
    {
      isAuthenticated?(
        router.push('/')

      ):(
         <section className="flex flex-1 justify-center items-center flex-col py-10">
            <SigninForm/>
         </section>
      )
    }
    </>
  )
}

export default page