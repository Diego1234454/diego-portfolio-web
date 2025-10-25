"use client";
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

const ContactForm = () => {

    const [result, setResult] = React.useState("");


    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult("Sending....");

        const formData = new FormData(event.currentTarget);

        formData.append("access_key", "7fb6d6fd-e371-48e2-ab09-87600a2e19c0");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult("");
            toast.success("Message sent! I'll get back to you soon.");
            event.currentTarget.reset();
        } else {
            console.log("Error", data);
            toast.error(data.message);
            setResult(data.message);
        }
    };

    return (
        <form onSubmit={onSubmit} className="space-y-4 sm:w-auto md:w-60 lg:w-80 mt-4 flex flex-col items-center justify-center">

            <div className="space-y-4 w-full">
                <h3 className="text-gray-800 text-lg">Name</h3>
                <input type="text" name="name" id="name" placeholder="Your name..." className="bg-gray-200 rounded p-1 w-full border-b " required/>

                <h3 className="text-gray-800 text-lg">Email</h3>
                <input type="email" name="email" id="email" placeholder="Your email..." className="bg-gray-200 rounded p-1 w-full border-b" required/>

                <h3 className="text-gray-800 text-lg">Message</h3>
                <textarea className="bg-gray-200 rounded p-1 w-full " name="Message" placeholder="Leave a message..." required></textarea>
            </div>

            <button className="bg-gradient-to-br from-blue-400 via-purple-600 to-purple-800 font-semibold text-white py-2 px-12  rounded hover:cursor-pointer hover:opacity-80 transition-all duration-300">
                {result ? result : "Send Message"}</button>
            <ToastContainer />
        </form>
    )
}
export default ContactForm
