import React from 'react'

const Volunteers = () => {
  return (
    <div className=" my-10">
      <div className="bg-gray-800 text-white py-10 px-8 rounded-lg container max-w-[1400px] w-full mx-auto">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold">Apply to be a volunteer</h2>
            <p className="text-lg mt-2">আপনি কি স্বেচ্ছাসেবক হতে আগ্রহী? স্বপ্নের খুলনা গড়তে আমাদের সাথে অংশগ্রহণ করুন।</p>
          </div>
          <button style={{
            background: 'linear-gradient(208deg, #f17511 0%, #f2295b 100%)',
          }} className=" text-white font-bold py-2 px-8 rounded">Apply</button>
        </div>
      </div>
      <div className="  mt-4 flex gap-4 items-center justify-center">
        <p className="text-lg">জরুরি মুহূর্তে রক্ত প্রয়োজন হলে কল করুন</p>
        <button className="bg-gray-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">017100962537</button>
      </div>
    </div>
  )
}

export default Volunteers