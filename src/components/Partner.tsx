import React from 'react'

const Partner = () => {
    return (
        <div className="container max-w-[1400px] w-full  mx-auto py-10">
            <h2 className="text-center text-2xl md:text-3xl font-bold mb-6">
                আমাদের পার্টনার সমূহ
            </h2>

            <div className="relative bg-white border-2 border-orange-500 rounded-md px-6 py-8">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 h-1 w-12 bg-orange-500 rounded-full"></div>

                <div className="flex justify-center items-center space-x-6">
                        <img src="https://townshiponlineseba.com/wp-content/uploads/2024/12/patner-DM3r3uj9-300x140.png" alt="" />
                        <img src="https://townshiponlineseba.com/wp-content/uploads/2024/12/patner-DM3r3uj9-300x140.png" alt="" />
                        <img src="https://townshiponlineseba.com/wp-content/uploads/2024/12/patner-DM3r3uj9-300x140.png" alt="" />
                        <img src="https://townshiponlineseba.com/wp-content/uploads/2024/12/patner-DM3r3uj9-300x140.png" alt="" />
                  
                </div>

                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-1 w-12 bg-orange-500 rounded-full"></div>
            </div>
        </div>

    )
}

export default Partner