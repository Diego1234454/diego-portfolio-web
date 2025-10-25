import {Metadata} from "next";
import prisma from "@/lib/prisma";
import Link from "next/link";
import Image from "next/image";
import {headers} from "next/headers";
import {redirect} from "next/navigation";

export const metadata: Metadata = {
    title: 'Projects Page - Diego Veliz Web Portfolio',
    description: 'Projects Page of Diego Veliz Web Portfolio',
};

export default async function Projects() {


    const projects = await prisma.post.findMany({
        where: {
            published: true,
        }
    })

    // console.log(projects.map(project => project.imageUrl))

    return <div className="flex flex-col items-center min-h-screen pt-16 space-y-24">
        <h1 className="text-2xl text-black font-semibold capitalize">Here are my latest projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center px-6">
            {projects.map((project) => (
                <div key={project.id} className="scale-[0.9] origin-top-left">
                    <div className="bg-gray-600 rounded p-1 hover:scale-110 hover:bg-gray-800 transition-transform duration-300 max-w-xl mx-auto">
                        <Link href={`/projects/${project.id}`}>
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
                                </div>
                            </div>
                            <div className="text-center mb-2">
                                <p className="text-white/70 font-bold ">{project.title}</p>
                            </div>
                        </Link>
                    </div>
                </div>
            ))}
        </div>

    </div>
}