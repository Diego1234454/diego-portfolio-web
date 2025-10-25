import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Details - Diego Veliz Web Portfolio',
    description: 'project detail page',
};


export default async function Post({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const post = await prisma.post.findUnique({
        where: { id: parseInt(id) },
        include: {
            author: true,
        },
    });

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen  flex flex-col items-center justify-center -mt-16">
            <article className="flex flex-col items-center justify-center w-full max-w-2xl space-y-4 font-[family-name:var(--font-geist-sans)] ">
                <a href={post.postLink} target="_blank" rel="noopener noreferrer" >
                    <img src={post.imageUrl} alt={post.title} className="w-md md:max-w-full shadow-2xl"/>
                </a>
                <h1 className="text-4xl text-center font-bold mb-8 text-[#333333]">{post.title}</h1>
                <p className="text-gray-600 text-center"><span className="font-bold">Tags:</span> {post.tags}</p>
                <div className="prose prose-gray mt-8 text-center">
                    {post.content || "No content available."}
                </div>
            </article>
        </div>
    );
}