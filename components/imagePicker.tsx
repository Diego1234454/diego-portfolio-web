// components/ImageUploadForm.tsx
"use client";

import { useState } from "react";

export default function ImageUploadForm() {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (file) {
            console.log("File ready to upload:", file);
            // You can now upload it to your backend or an API route here
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="border rounded p-2 cursor-pointer"
            />

            {file && (
                <p className="text-sm text-gray-600">
                    Selected file: {file.name}
                </p>
            )}

            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Upload
            </button>
        </form>
    );
}
