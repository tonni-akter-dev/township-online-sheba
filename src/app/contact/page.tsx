import React from 'react'

const Contact = () => {
    return (
        <div className="bg-gray-800 text-gray-100 px-8 py-12">
            <div
                className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
                <div className="">
                    <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Lets talk about everything!</h2>
                    <div className="text-center mt-8">
                        <div className="flex flex-col gap-6 w-full lg:w-1/2">
                            <div className="flex items-center gap-4">
                                <div className="bg-orange-500 text-white p-3 rounded-full">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 5h6M3 9h4M3 15h6m4 0h6m-6 4h6m-6-12h6m-6 4h6"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold">Phone Number</h2>
                                    <p>+880 1956686338</p>
                                    <p>+880 1888888888</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-orange-500 text-white p-3 rounded-full text-start">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 5h6M3 9h4M3 15h6m4 0h6m-6 4h6m-6-12h6m-6 4h6"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold text-start">Email</h2>
                                    <p>sheikhshaadi137@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-orange-500 text-white p-3 rounded-full text-start">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 5h6M3 9h4M3 15h6m4 0h6m-6 4h6m-6-12h6m-6 4h6"
                                        />
                                    </svg>
                                </div>
                                <div className='w-full'>
                                    <h2 className="text-lg font-bold text-start">Head Office[Khulna]</h2>
                                    <p className='text-start'>Example Plaza(3rd Floor) </p>
                                    <p className='text-start'>House#9,Road#3,khulna 9100,Bangladesh </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div>
                        <span className="uppercase text-sm text-gray-600 font-bold">Full Name</span>
                        <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" placeholder="" />
                    </div>
                    <div className="mt-8">
                        <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
                        <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" />
                    </div>
                    <div className="mt-8">
                        <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
                        <textarea
                            className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                    </div>
                    <div className="mt-8">
                        <button
                            className="uppercase text-sm font-bold tracking-wide bg-orange-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                            Send Message
                        </button>
                    </div>
                </div>
            </div>

            <div className='mt-8 px-20' style={{
                maxWidth: "100%",
                overflow: "hidden",
                color: "red",
                width: "100%",
                height: "500px",
            }}>
                <div id="gmap-canvas"
                    style={{ height: "100%", width: "100%", maxWidth: "100%" }}
                ><iframe style={{ height: "100%", width: "100%", maxWidth: "100%" }}
                    frameBorder="0" src="https://www.google.com/maps/embed/v1/place?q=khulna&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe></div><a className="googl-ehtml" href="https://www.bootstrapskins.com/themes" id="make-map-infor-mation">premium bootstrap themes</a><style>#gmap-canvas img</style></div>
        </div>
    )
}

export default Contact