'use client'
import { Carousel } from 'antd';

const Banner = () => {

    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };

    return (
        <Carousel afterChange={onChange} autoplay draggable>
            <div>
                <img className='w-full h-[400px]' src="https://townshiponlineseba.com/wp-content/uploads/2024/12/images-300x166.jpg" alt="" />
            </div>
            <div>
                <img className='w-full h-[400px]' src="https://townshiponlineseba.com/wp-content/uploads/2024/12/images-300x166.jpg" alt="" />
            </div>
            <div>
                <img className='w-full h-[400px]' src="https://townshiponlineseba.com/wp-content/uploads/2024/12/images-300x166.jpg" alt="" />
            </div>
            <div>
                <img className='w-full h-[400px]' src="https://townshiponlineseba.com/wp-content/uploads/2024/12/images-300x166.jpg" alt="" />
            </div>
        </Carousel>
    )
}

export default Banner