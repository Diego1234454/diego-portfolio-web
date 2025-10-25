import Form from "next/form";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import {notFound, redirect} from "next/navigation";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Edit',
    description: 'Projects Edit Page of Diego Veliz Web Portfolio',
};

export default async function EditPost({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    console.log("Id es " + id);

    const post = await prisma.post.findUnique({
        where: { id: parseInt(id) },
        include: {
            author: true,
        },
    });


    if (!post) {
        notFound();
    }



    async function editPost(formData: FormData) {
        "use server";

        const title = formData.get("title") as string;
        const content = formData.get("content") as string;
        const description = formData.get("description") as string;
        const tags = formData.get("tags") as string;
        const postLink = formData.get("postlink") as string;
        const imageUrl = formData.get("imageUrl") as string;
        const postPublished = formData.get("published") as string;

        function publishedResult() {
            if (postPublished.toLowerCase() === "true") {
                return true;
            } else if (postPublished.toLowerCase() === "false") {
                return false;
            }
        }

        await prisma.post.update({
            where: { id: parseInt(id) },
            data: {
                title: title || post!.title,
                content: content || post!.content,
                description: description || post!.description,
                tags: tags || post!.tags,
                postLink: postLink || post!.postLink,
                imageUrl: imageUrl || post!.imageUrl,
                published: publishedResult()
            }

        })


        revalidatePath("/projects/edit");
        redirect("/projects/edit");
    }



    return (
        <div className="h-full p-4">
            <div>
                <h1 className="text-2xl font-bold mb-6">Update Post: {post.title}</h1>
            </div>
            <Form action={editPost} className="space-y-6">

                <div>
                    <label htmlFor="published" className="block text-lg mb-2">
                        Published ?
                    </label>
                    <select name="published" id="published">
                        <option value="true">true</option>
                        <option value="false">false</option>
                    </select>
                </div>

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
                    Edit Post
                </button>
            </Form>
        </div>
    );
}