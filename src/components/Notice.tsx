import React from 'react'
import Marquee from "react-fast-marquee";

const Notice = () => {
    return (
        <div className='bg-slate-200'>
            <Marquee>
                <div className='flex gap-2 text-2xl py-5 '>
                    <p>In this regard, everyone is informed that a development program has been launched by our organization. Through this development, we are moving towards improving the quality of services and adding new features. There may be temporary disruption of services during development activities. We sincerely apologize for the temporary inconvenience and are grateful for being by our side.
                    </p>
                </div>
            </Marquee>
        </div>
    )
}

export default Notice