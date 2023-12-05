"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SigninValidation } from "@/lib/validation";
import SignupForm from "./SignupForm";
import Image from "next/image";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";
import { useUserContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import {
  useCreateUserAccount,
  useSigninAccount,
} from "@/lib/react-query/queriesAndMutations";

const SigninForm = () => {
  const { toast } = useToast();
  const { checkAuthUser, isPending: isUserLoading } = useUserContext();
  const navigate = useRouter();

  const { mutateAsync: createUserAccount, isPending } = useCreateUserAccount();

  const { mutateAsync: signInAccount, isPending: isSigningInUser } =
    useSigninAccount();
  const form = useForm<z.infer<typeof SigninValidation>>({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof SigninValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const session = await signInAccount({
      email: values.email,
      password: values.password,
    });

    if (!session) {
      return toast({ title: "Sign in failed. please try again" });
    }

    const isLoggedIn = await checkAuthUser();

    if (isLoggedIn) {
      form.reset();

      navigate.push("/");
    } else {
      return toast({ title: "Sign up failed. Please try again " });
    }
  }
  return (
    <Form {...form}>
      <div className="sm:w-420 flex-center flex-col">
        <Image
          src="/assets/images/logo.png"
          alt="logo"
          width={75}
          height={75}
          className="object-contain"
        />
        <p className="nav-logo">
          Sign<span className="text-primary ">In</span>
        </p>

        <h2 className="small-text pt-5 sm:pt-12">
         Please Enter your Details
        </h2>

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" flex flex-col gap-5 w-full mt-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="small-text">Email</FormLabel>
                <FormControl>
                  <Input type="email" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="small-text text-black">
                  Password
                </FormLabel>
                <FormControl>
                  <Input type="password" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="shad-button_primary text-[20px] hover:cursor-pointer transition: ease-in-out"
          >
            {isUserLoading ? (
              <div className="flex-center gap-2"> Loading</div>
            ) : (
              "Login"
            )}
          </Button>

          <p className="flex justify-center text-[18px] items-center gap-5">
            Do not have an Account?{" "}
            <span className="small-text">
              <Link href="/Signup">SingUp</Link>
            </span>
          </p>
        </form>
      </div>
    </Form>
  );
};

export default SigninForm;
