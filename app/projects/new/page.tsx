import Form from "next/form";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import ImageUploadForm from "@/components/imagePicker";
import {headers} from "next/headers";

import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Create New Project',
};


export default async function NewPost() {

    // const header = await headers()
    // const ip = (header.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0]
    //
    // console.log(ip)

    async function createPost(formData: FormData) {
        "use server";

        const title = formData.get("title") as string;
        const content = formData.get("content") as string;
        const description = formData.get("description") as string;
        const tags = formData.get("tags") as string;
        const postLink = formData.get("postlink") as string;
        const imageUrl = formData.get("imageUrl") as string;

        await prisma.post.create({
            data: {
                title,
                description,
                content,
                tags,
                postLink,
                imageUrl,
                authorId: "1",
                published: true,
            },
        });

        revalidatePath("/projects");
        redirect("/projects");
    }

    return (
        <div className="h-full p-4">
            <h1 className="text-2xl font-bold mb-6">Create New Post</h1>
            <Form action={createPost} className="space-y-6">
                <div>
                    <label htmlFor="title" className="block text-lg mb-2">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter your post title"
                        className="w-full px-4 py-2 border rounded-lg"
                    />
                </div>

                <div>
                    <label htmlFor="description" className="block text-lg mb-2">
                        Description
                    </label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        placeholder="Enter your post description"
                        className="w-full px-4 py-2 border rounded-lg"
                    />
                </div>

                <div>
                    <label htmlFor="tags" className="block text-lg mb-2">
                        Tags
                    </label>
                    <input
                        type="text"
                        id="tags"
                        name="tags"
                        placeholder="Enter your post tags"
                        className="w-full px-4 py-2 border rounded-lg"
                    />
                </div>

                <div>
                    <label htmlFor="postlink" className="block text-lg mb-2">
                        URL / Link
                    </label>
                    <input
                        type="text"
                        id="postlink"
                        name="postlink"
                        placeholder="Enter your post url"
                        className="w-full px-4 py-2 border rounded-lg"
                    />
                </div>

                <div>
                    <label htmlFor="imageUrl" className="block text-lg mb-2">
                        Image Url
                    </label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Enter your post image url"
                        className="w-full px-4 py-2 border rounded-lg"
                    />
                </div>

                <div>
                    <label htmlFor="content" className="block text-lg mb-2">
                        Content
                    </label>
                    <textarea
                        id="content"
                        name="content"
                        placeholder="Write your post content here..."
                        rows={6}
                        className="w-full px-4 py-2 border rounded-lg"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
                >
                    Create Post
                </button>
            </Form>
        </div>
    );
}

