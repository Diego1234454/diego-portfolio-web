import React from 'react'
import {ArrowUp, Facebook, Github, Instagram, Linkedin, MessageCircle} from "lucide-react";

const Footer = () => {
    return (
        <footer className="flex flex-col md:flex-row  items-center justify-between max-w-full bg-gray-900 px-8 py-6 gap-8">

            <div className="flex flex-col space-y-4">

                <div className="flex items-center gap-4">
                    <a href="https://www.linkedin.com/in/diego-allan-véliz-medina-29906427a" title="My LinkedIn account" target="_blank"><Linkedin className="text-white/60 hover:text-blue-400/80 transition-colors"/></a>
                    <a href="https://github.com/Diego1234454?tab=repositories" title="My Github account" target="_blank"><Github className="text-white/60 hover:text-white transition-colors"/></a>
                    <a href="https://www.instagram.com/allan_med7/" title="My instagram profile" target="_blank"><Instagram className="text-white/60 hover:text-pink-500/80 transition-colors"/></a>
                    <a href="https://www.facebook.com/allan.veliz.237464/" title="My Facebook profile" target="_blank"><Facebook className="text-white/60 hover:text-blue-500/80 transition-colors"/></a>
                    <a href="https://wa.me/528993175207?" target="_blank" title="My Whatsapp!"><MessageCircle className="text-white/60 hover:text-green-400/80 transition-colors"/></a>
                </div>

                <h1 className="text-white ">&copy; Diego Veliz. 2025</h1>

            </div>

            <a href="#">
                <ArrowUp size={28} className="text-white hover:scale-110 transition-all duration-300" />
            </a>
        </footer>
    )
}
export default Footer
