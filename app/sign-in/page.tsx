import Link from "next/link";

import { authClient } from "@/lib/auth-client";
import {redirect} from "next/navigation"; //import the auth client
import { auth } from "@/lib/auth"; // path to your Better Auth server instance
import { headers } from "next/headers";


export default async function SignInPage ()  {


    async function signUser(formData: FormData) {

        "use server"

        //const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        const { data, error } = await authClient.signIn.email({
            /**
             * The user email
             */
            email,
            /**
             * The user password
             */
            password,
            /**
             * A URL to redirect to after the user verifies their email (optional)
             */
            callbackURL: "/projects/edit",
            /**
             * remember the user session after the browser is closed.
             * @default true
             */
            rememberMe: true,

            fetchOptions: {
                onSuccess: async () => {
                    // ✅ Re-fetch session after successful sign up
                    const session = await auth.api.getSession({
                        headers: await headers(),
                    });

                    console.log("User name:", session?.user?.name);

                    // redirect after we know session exists
                    redirect("/projects/edit");
                },
                onError: () => {
                    console.error("Error creating user");
                },
            },

        }, {
            //callbacks

        })

        console.log(data)

    }


    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-300  to-purple-500">
            <form action={signUser} className="flex flex-col items-center border border-gray-600 rounded-md w-sm py-4 bg-white">
                <div className="flex flex-col w-full items-center justify-center p-8 gap-2">
                    <p className="font-bold text-4xl">Sign In</p>
                    <p className="text-sm">Don't have an account? <Link href="/sign-up" className="text-yellow-600 hover:text-yellow-700 text-sm">Sign Up</Link></p>
                </div>
                <div className="flex flex-col items-center justify-center w-full space-y-4 ">
                    <div className="w-full px-8">
                        <p className="text-md font-semibold">Email</p>
                        <input  type="email" name="email" id="email" placeholder="Your email..." className="border-b border-gray-300 rounded-md p-2 w-full"/>
                    </div>
                    <div className="w-full px-8">
                        <div className="w-full flex items-center justify-between">
                            <p className="text-md font-semibold">Password</p>
                        </div>
                        <input type="password" name="password" id="password" placeholder="password" className="border-b border-gray-300 rounded-md p-2 w-full"/>
                    </div>
                    <Link href="#" className="text-gray-800">Forgot password?</Link>
                </div>

                <button type="submit" className="my-4 bg-gradient-to-r from-blue-300  to-purple-500 px-8 py-1 text-white rounded-full hover:opacity-80 transition-colors duration-300 hover:cursor-pointer">Sign Up</button>
            </form>
        </div>
    )
}