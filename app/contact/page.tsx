import React from "react";
import ContactForm from "@/components/contactForm";
import {Facebook, Github, Instagram, Linkedin, MessageCircle} from "lucide-react";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Contact Page - Diego Veliz Web Portfolio',
    description: 'Contact Page of Diego Veliz Web Portfolio',
};

export default function ContactPage() {

    return (
        <div className="flex min-h-screen overflow-hidden bg-gray-100">
            <div className="flex flex-col xl:flex-row  w-full px-24 pt-44 py-12 gap-6 md:gap-0">

                <div className="flex flex-col items-center w-full gap-4 ">
                    <h1 className="text-red-600/70 text-center text-2xl md:text-5xl font-bold">Contact Me Here</h1>
                    <ContactForm />
                </div>

                <div className="flex flex-col items-center w-full gap-8" >
                    <h1 className="text-red-600/70 text-center text-2xl md:text-5xl font-bold">Available Here Too</h1>
                    <div className="flex flex-col items-center justify-center w-full gap-4 ">
                        <a href="mailto:medinadiego607@gmail.com"className="text-gray-600 hover:text-black transition-colors">
                            medinadiego607@gmail.com</a>
                        <a href="tel:+528993175207" className="text-gray-600 hover:text-black transition-colors">
                            +52 (899) 317-5207 </a>
                    </div>
                    <div className="flex items-center gap-4">
                        <a href="https://www.linkedin.com/in/diego-allan-véliz-medina-29906427a" title="My LinkedIn account" target="_blank"><Linkedin className="text-black hover:text-blue-400/80 transition-colors"/></a>
                        <a href="https://github.com/Diego1234454?tab=repositories" title="My Github account" target="_blank"><Github className="text-black hover:opacity-50 transition-colors"/></a>
                        <a href="https://www.instagram.com/allan_med7/" title="My instagram profile" target="_blank"><Instagram className="text-black hover:text-pink-500/80 transition-colors"/></a>
                        <a href="https://www.facebook.com/allan.veliz.237464/" title="My Facebook profile" target="_blank"><Facebook className="text-black hover:text-blue-500/80 transition-colors"/></a>
                        <a href="https://wa.me/528993175207?" target="_blank" title="My Whatsapp!"><MessageCircle className="text-black hover:text-green-400/80 transition-colors"/></a>
                    </div>
                    <p>Looking forward to hearing from you.</p>
                </div>
            </div>
        </div>
    )
}