"use client"
import SignupForm from "@/_auth/forms/SignupForm";
import { QueryClientProvider } from "@tanstack/react-query";
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
            <SignupForm/>
         </section>
      )
    }
    </>
  )
}

export default page