'use client'
import { getCurrentUser } from "@/lib/appwrite/api";
import { IContextType, IUser } from "@/types/utils"
import { createContext, useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation";

export const INITIAL_USER = {
    id: "",
    name:"",
    username: "",
    email:"",
    imageUrl: "",
}

const INITIAL_STATE ={
    user: INITIAL_USER,
    isPending: false,
    isAuthenticated: false,
    setUser: () =>{},
    setIsAuthenticated: ()=>{},
    checkAuthUser: async () => false as boolean,
}

const AuthContext = createContext<IContextType>(INITIAL_STATE);
const AuthProvider = ({ children }: { children: React.ReactNode }) =>  {

const [user, setUser] = useState<IUser>(INITIAL_USER)
const [isPending, setIsPending] = useState(false);
const [isAuthenticated, setIsAuthenticated] = useState(false);

const navigate = useRouter();

const checkAuthUser = async()=>{
   try {
     const currentAccount = await getCurrentUser();

     if(currentAccount){
        setUser({
            id: currentAccount.$id,
            name:currentAccount.name,
            username: currentAccount.username,
            email: currentAccount.email,
            imageUrl: currentAccount.imageUrl,
        })

        setIsAuthenticated(true);
        return true;
     }

     return false
   } catch (error) {
    console.log(error)
    return false
    
   } finally{
    setIsPending(false)
   }
};
useEffect(()=>{
   if(
    localStorage.getItem('cookieFallback') === '[]' ||
    localStorage.getItem('coolieFallback')===null)
    navigate.push('/Signin')
    
    checkAuthUser();
},[]);

const value = {
    user,
    setUser,
    isPending,
    isAuthenticated,
    setIsAuthenticated,
    checkAuthUser,
}

  return (
    <AuthContext.Provider value={value}>
    {children}
   </AuthContext.Provider>
  )
}

export default AuthProvider;

export const useUserContext = () => useContext(AuthContext);