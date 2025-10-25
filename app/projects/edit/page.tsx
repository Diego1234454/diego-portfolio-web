import {Metadata} from "next";
import prisma from "@/lib/prisma";
import Link from "next/link";
import Image from "next/image";
import {headers} from "next/headers";
import {redirect} from "next/navigation";

export const metadata: Metadata = {
    title: 'Projects Edit Page - Diego Veliz Web Portfolio',
    description: 'Projects Edit Page of Diego Veliz Web Portfolio',
};



export default async function EditProjects() {



    const projects = await prisma.post.findMany({})
    //console.log(projects);

    // console.log(projects.map(project => project.imageUrl))

    return <div className="flex flex-col items-center min-h-screen pt-16 space-y-24">
        <h1 className="text-2xl text-black font-semibold capitalize flex flex-col text-center gap-2">Edit Page<Link href="/projects/new" className="border border-md rounded-full p-1 text-sm font-semibold bg-gradient-to-r from-yellow-400 to-purple-400 hover:opacity-85 transition-colors duration-300">Create New</Link> </h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center px-6">
            {projects.map((project) => (
                <div key={project.id} className="scale-[0.9] origin-top-left">
                    <div className="bg-gray-600 rounded p-1  hover:bg-gray-800 transition-transform duration-300 max-w-xl mx-auto">
                        {/* ✅ Aspect ratio wrapper */}
                        <div className="aspect-[16/9]">
                            <img
                                className="h-full w-full object-cover rounded"
                                src={project.imageUrl}
                                alt="ProjectImage"
                            />
                        </div>
                        <div className="my-2">
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 text-xs border text-gray-100 border-black bg-white/40 font-medium rounded-full">{project.tags}</span>
                                <span className="px-2 py-1 text-xs border text-gray-100 border-black bg-white/40 font-medium rounded-full">{project.published ? "published" : "not published"}</span>
                            </div>
                        </div>
                        <div className="text-center mb-4 space-y-4">
                            <p className="text-white/70 font-bold ">{project.title}</p>
                            <Link href={`/projects/edit/${project.id}`} className="bg-gray-50 hover:bg-gray-200 px-4 py-2 rounded-full hover:cursor-pointer font-semibold transition-colors duration-300">Edit</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    </div>
}