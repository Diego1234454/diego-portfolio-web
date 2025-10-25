"use client";

import Link from "next/link";
import NavMenu from "@/components/navMenu";

const Navbar = () => {

    return (
        <nav className="flex items-center justify-between bg-green-400 px-4 py-4">
            <Link
                href="/"
                className="text-sm md:text-xl xl:text-2xl lg:text-xl font-bold text-white hover:text-gray-800"
            >
                Diego Veliz Web Portfolio
            </Link>

            <ul className="flex-wrap items-center gap-x-4 hidden md:flex">
                <Link
                    href="/projects"
                    className="font-medium text-white hover:text-gray-800 xl:text-xl"
                >
                    Projects
                </Link>
                <Link
                    href="/contact"
                    className="font-medium text-white hover:text-gray-800 xl:text-xl"
                >
                    Contact
                </Link>


            </ul>

            <div className="md:hidden flex">
                <NavMenu />
            </div>
        </nav>
    );
};

export default Navbar;
