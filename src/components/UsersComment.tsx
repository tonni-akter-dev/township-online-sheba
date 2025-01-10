'use client'
import React from 'react'
import Slider from "react-slick";

const UsersComment = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (
        <div className='max-w-[1000px] w-full mx-auto cursor-pointer mt-10'>
            <h2 className='text-4xl text-center font-bold mb-8 capitalize'>What our users say</h2>
            <div className="slider-container">
                <Slider {...settings}>
                    <div className="bg-slate-200 text-black p-6 rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <img src="https://townshiponlineseba.com/wp-content/plugins/elementor/assets/images/placeholder.png" alt="Profile" className="w-10 h-10 rounded-full mr-3" />
                            <p className="text-sm font-semibold">Rafid Alvi</p>
                        </div>
                        <p className="text-sm">
                            এক কথায় অ্যান্ড্রয়েড এর জন্য এটি একটি সেরা কোর্স। যারা নতুন কোডিং এ আসতে চান তাদের জন্য এই ট্রেইনিং নিঃসন্দেহে লাইফ চেঞ্জিং হবে ইনশাআল্লাহ।
                        </p>
                    </div>
                    <div className="bg-slate-200 text-black p-6 rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <img src="https://townshiponlineseba.com/wp-content/plugins/elementor/assets/images/placeholder.png" alt="Profile" className="w-10 h-10 rounded-full mr-3" />
                            <p className="text-sm font-semibold">Rafid Alvi</p>
                        </div>
                        <p className="text-sm">
                            এক কথায় অ্যান্ড্রয়েড এর জন্য এটি একটি সেরা কোর্স। যারা নতুন কোডিং এ আসতে চান তাদের জন্য এই ট্রেইনিং নিঃসন্দেহে লাইফ চেঞ্জিং হবে ইনশাআল্লাহ।
                        </p>
                    </div>
                    <div className="bg-slate-200 text-black p-6 rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <img src="https://townshiponlineseba.com/wp-content/plugins/elementor/assets/images/placeholder.png" alt="Profile" className="w-10 h-10 rounded-full mr-3" />
                            <p className="text-sm font-semibold">Rafid Alvi</p>
                        </div>
                        <p className="text-sm">
                            এক কথায় অ্যান্ড্রয়েড এর জন্য এটি একটি সেরা কোর্স। যারা নতুন কোডিং এ আসতে চান তাদের জন্য এই ট্রেইনিং নিঃসন্দেহে লাইফ চেঞ্জিং হবে ইনশাআল্লাহ।
                        </p>
                    </div>
                    <div className="bg-slate-200 text-black p-6 rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <img src="https://townshiponlineseba.com/wp-content/plugins/elementor/assets/images/placeholder.png" alt="Profile" className="w-10 h-10 rounded-full mr-3" />
                            <p className="text-sm font-semibold">Rafid Alvi</p>
                        </div>
                        <p className="text-sm">
                            এক কথায় অ্যান্ড্রয়েড এর জন্য এটি একটি সেরা কোর্স। যারা নতুন কোডিং এ আসতে চান তাদের জন্য এই ট্রেইনিং নিঃসন্দেহে লাইফ চেঞ্জিং হবে ইনশাআল্লাহ।
                        </p>
                    </div>
                    <div className="bg-slate-200 text-black p-6 rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <img src="https://townshiponlineseba.com/wp-content/plugins/elementor/assets/images/placeholder.png" alt="Profile" className="w-10 h-10 rounded-full mr-3" />
                            <p className="text-sm font-semibold">Rafid Alvi</p>
                        </div>
                        <p className="text-sm">
                            এক কথায় অ্যান্ড্রয়েড এর জন্য এটি একটি সেরা কোর্স। যারা নতুন কোডিং এ আসতে চান তাদের জন্য এই ট্রেইনিং নিঃসন্দেহে লাইফ চেঞ্জিং হবে ইনশাআল্লাহ।
                        </p>
                    </div>

                </Slider>

            </div>
        </div>
    )
}

export default UsersComment