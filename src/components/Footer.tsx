'use client'
import { Envelope, FacebookLogo, LinkedinLogo, MagnifyingGlass, YoutubeLogo } from '@phosphor-icons/react'
import React from 'react'

const Footer = () => {
    return (
        <footer className="">
            <div className="container max-w-[1400px] mx-auto py-8 px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="flex flex-col items-start mb-4 md:mb-0">
                    <img src="/logo.png" alt="Township Online Seba" className="w-50 mb-4" />
                    <p className="text-xl ml-2 text-black mb-4">আপ টু ডেট রাখতে আমাদের সোশ্যাল মিডিয়া এবং <br /> অন্যান্য সাইটের সাথে সংযোগ করুন।
                    </p>
                    <div className="flex ">
                        <a href="#" className="text-blue-500 hover:text-blue-700 mx-2">
                            <FacebookLogo size={32} />
                        </a>
                        <a href="#" className="text-blue-500 hover:text-blue-700 mx-2"><LinkedinLogo size={32} />
                        </a>
                        <a href="#" className="text-blue-500 hover:text-blue-700 mx-2"><YoutubeLogo size={32} />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col  md:flex-row space-y-4 md:space-y-0 md:space-x-8">
                    <div>
                        <h4 className="text-lg text-black font-semibold mb-2">Volunteer View</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-black hover:text-white">Help & Support</a></li>
                            <li><a href="#" className="text-black hover:text-white">About Us</a></li>
                            <li><a href="#" className="text-black hover:text-white">Dealership</a></li>
                        </ul>
                    </div>

                    <div className='flex items-center flex-col'>
                        <Envelope size={32} />
                        <p className='text-xl font-semibold'>Send Us Mail</p>
                        <a href="mailto:townshiponlineseba@gmail.com">townshiponlineseba@gmail.com</a>
                    </div>
                    <div className='flex items-center flex-col'>
                        <Envelope size={32} />
                        <p className='text-xl font-semibold'>Contact US </p>
                        <a href="mailto:townshiponlineseba@gmail.com">+88 01700 962537</a>
                    </div>
                    <div className='flex items-center flex-col'>
                        <MagnifyingGlass  size={32} />
                        <p className='text-xl font-semibold'>Find Us Here</p>
                        <a href="mailto:townshiponlineseba@gmail.com">Khulna-9400, Bangladesh</a>
                    </div>
                </div>
            </div>

            <div className="container max-w-[1400px] mx-auto border-t border-gray-700 mt-8 py-4">
                <div className=" flex justify-between">
                    <p className="text-sm">Copyright © 2024 Township Online Seba | All right reserved</p>
                    <div>
                        <a href="#" className="text-black hover:text-white mx-2">Terms & Conditions</a>
                        <a href="#" className="text-black hover:text-white mx-2">Privacy Policy</a>
                        <a href="#" className="text-black hover:text-white mx-2">Refund Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer