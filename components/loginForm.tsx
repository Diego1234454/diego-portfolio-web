import React from 'react'
import prisma from "@/lib/prisma";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";

export default async function LoginForm () {


    const users = await prisma.user.findMany({
        where: {
            email: "medinadiego607@gmail.com"
        }
    })

     async function verifyAdmin(formData: FormData) {
        "use server"

        const name = formData.get("name") as string;
        const password = formData.get("password") as string;

        let userPassword = users.map(user => user.password) as any;


        if (userPassword === password) {
            revalidatePath("/projects");
            redirect("/projects");
        }

    }

    console.log(users.map(user => user.password));


    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <form action={verifyAdmin} className="flex flex-col items-center justify-center gap-2 bg-black mx-auto p-5 rounded-md text-white font-semibold">
                <h1 className="text-xl ">Admin</h1>
                <div>
                    <p>Name:</p>
                    <input type="text" id="name" name="name" required className="border-b border-gray-300" />
                </div>
                <div>
                    <p>Password:</p>
                    <input type="password" id="password" name="password" required className="border-b border-gray-300" />
                </div>
                <button type="submit">Click</button>
            </form>
        </div>
    )
}