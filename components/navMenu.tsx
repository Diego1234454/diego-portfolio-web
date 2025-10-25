"use client";
import React, {useEffect, useState} from 'react'
import {Menu, X} from "lucide-react";
import Link from "next/link";

const NavMenu = () => {

    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        if (isVisible) {
            document.body.classList.add("overflow-y-hidden")
        } else {
            document.body.classList.remove("overflow-y-hidden")
        }
        }, []);

    return (
        <div className="relative bg-white">
            <div className="text-black z-51 absolute right-0 top-0">
                {isVisible ? <X className="text-gray-800" size={24}  onClick={() => setIsVisible(!isVisible)}/> : <Menu className="text-white" size={24}  onClick={() => setIsVisible(!isVisible)} />}
            </div>
                <ul className={`w-full space-y-4 underline-offset-4 underline ${isVisible ? "block" : "hidden"} flex flex-col items-center justify-center text-center z-50 right-0 top-0 bottom-0 overflow-hidden bg-white/95 transition-all fixed`}>
                    <Link href="/" className="font-medium text-gray-800 text-2xl" onClick={(prev) => setIsVisible(!prev)}>Home</Link>
                    <Link href="/projects" className="font-medium text-gray-800 text-2xl" onClick={(prev) => setIsVisible(!prev)}>Projects</Link>
                    <Link href="/contact" className="font-medium text-gray-800 text-2xl" onClick={(prev) => setIsVisible(!prev)}>Contact</Link>
                </ul>
        </div>
    )
}
export default NavMenu
