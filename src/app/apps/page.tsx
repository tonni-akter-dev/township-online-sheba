import Banner from '@/components/Banner'
import React from 'react'

const Apps = () => {
    return (
        <div className='max-w-[1400px] mx-auto mt-10'>
            <div className="grid grid-cols-2">
                <div>
                    <div className="bg-white text-black p-8 text-center">
                        <h2 className="text-2xl text-red-600 font-bold mb-4">
                            {"অনলাইনে সেবা নিন ঘরে বসেই"}
                        </h2>
                        <h1 className="text-4xl font-bold mb-6">টাউনশীপ অনলাইন সেবা</h1>
                        <p>
                            অ্যাপটি ১৯শে অক্টোবর ২০২৪ইং শনিবার সকাল ১০.০০ ঘটিকা হইতে ডাউনলোড করে ব্যবহার করতে পারবেন। অ্যাপটি ডাউনলোড করতে নিচের DOWNLOAD বাটনে ক্লিক বা টাচ করুন। অ্যাপটি সর্বশেষ আপডেটঃ ১৯ অক্টোবর ২০২৪ইং।
                        </p>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full mt-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4h10v12a2 2 0 01-2 2H7z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                            </svg>
                            Download
                        </button>
                    </div>
                </div>

                <Banner />
            </div>
        </div>
    )
}

export default Apps