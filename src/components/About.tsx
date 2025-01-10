import React from 'react'

const About = () => {
    return (

        <div className="grid lg:grid-cols-2 grid-cols-1 items-center">
            <div>
                <img src="https://townshiponlineseba.com/wp-content/uploads/2024/12/logo-BQxHB71K-1.png" alt="" />
            </div>

            <div>
                <h2 className='text-4xl font-bold mb-4'>About Township Online Seba</h2>
                <p className='text-lg mb-4'>Township is an engaging and popular online game that blends elements of city-building and farming into a seamless experience. Developed by Playrix, the game allows players to build their own town, manage resources, and engage in farming activities,
                    <br />all while fostering a sense of community and teamwork. The game has gained immense popularity across different platforms, including mobile devices and desktops.
                </p>
                <button style={{
                    background: 'linear-gradient(208deg, #f17511 0%, #f2295b 100%)',
                }} className='py-2 px-8 font-semibold text-white rounded-xl text-lg'>Learn more</button>
            </div>
        </div>
    )
}

export default About