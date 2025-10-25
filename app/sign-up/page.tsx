import Link from "next/link";

import { authClient } from "@/lib/auth-client";
import {redirect} from "next/navigation"; //import the auth client


export default function SignUpPage ()  {

async function createUser(formData: FormData) {

    "use server"

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const { data, error } = await authClient.signUp.email({
        email, // user email address
        password, // user password -> min 8 characters by default
        name, // user display name
        // image, // User image URL (optional)
        // callbackURL: "/dashboard" // A URL to redirect to after the user verifies their email (optional)
    }, {
        onRequest: (ctx) => {
            //show loading
        },
        onSuccess: (ctx) => {
            //redirect to the dashboard or sign in page
            redirect("/projects/edit");
        },
        onError: (ctx) => {
            // display the error message
            // window.alert("error creating user");
        },
    });

}


    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-300  to-purple-500">
            <form action={createUser} className="flex flex-col items-center border border-gray-600 rounded-md w-sm py-4 bg-white">
                <div className="flex flex-col w-full items-center justify-center p-8 gap-2">
                    <p className="font-bold text-4xl">Sign Up</p>
                    <p className="text-sm">Already have an account? <Link href="/SignIn" className="text-yellow-600 hover:text-yellow-700 text-sm">Sign In</Link></p>
                </div>
                <div className="flex flex-col items-center justify-center w-full space-y-4 ">
                    <div className="w-full px-8">
                        <p className="text-md font-semibold">Name</p>
                        <input  type="text" name="name" id="name" placeholder="Your name..." className="border-b border-gray-300 rounded-md p-2 w-full"/>
                    </div>
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