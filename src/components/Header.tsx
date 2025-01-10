'use client'
import React, { useState } from 'react'
import { Cloud } from "@phosphor-icons/react";
import Image from 'next/image';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="container mx-auto flex flex-wrap items-center justify-between bg-[#F5F5F7] px-5 py-4 md:px-10 md:py-5">
            {/* Logo Section */}
            <div className="flex items-center w-full md:w-auto justify-between">
                <Image width={200} height={200} src="/logo.png" alt="Township Online Seba" />
                <button
                    onClick={toggleMenu}
                    className="block md:hidden border rounded-lg px-3 py-1 text-sm font-medium hover:bg-gray-200"
                    aria-label="Toggle Menu">
                    ☰
                </button>
            </div>
            {/* Navigation Links */}
            <nav
                className={`${isMenuOpen ? "block" : "hidden"} w-full md:w-auto md:flex items-center mt-4 md:mt-0`}>
                <ul className="flex flex-col justify-center md:flex-row space-y-2 md:space-y-0 md:space-x-6">
                    <li><a href="#" className="text-lg font-medium hover:text-gray-700">Home</a></li>
                    <li><a href="#" className="text-lg font-medium hover:text-gray-700">About</a></li>
                    <li><a href="#" className="text-lg font-medium hover:text-gray-700">App</a></li>
                    <li><a href="#" className="text-lg font-medium hover:text-gray-700">Contact</a></li>
                </ul>
            </nav>

            {/* Weather and Language Selector */}
            <div className="flex items-center mt-4 md:mt-0 space-x-4">
                {/* Weather */}
                <div className="flex items-center gap-2">
                    <Cloud size={24} />
                    <span className="text-sm">Sunny 25°C (Satkhira)</span>
                </div>
                {/* Language Selector */}
                <button className="flex items-center border rounded-full px-3 py-1 hover:bg-gray-200">
                    <span className="text-sm font-medium">English</span>
                    <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.172 10h1.391z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </header>
    )
}

export default Header;
