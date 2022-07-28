import React from 'react'
// import img

import Img1 from '../assets/img/exp-img1.png';
import Img2 from '../assets/img/exp-img2.png';

const Experience = () => {
    const Img = [
        {
            id: 1,
            img: Img1,
            style: 'self-start',
            data_aos: 'fade-down',
            data_aos_offset: 400
        },
        {
            id: 2,
            img: Img2,
            style: 'self-end',
            data_aos: 'fade-up',
            
        },
    ]
    return (
        <section className='mb-12 lg:mb-24'>
            <div className='container mx-auto'>
                <div className='flex flex-col min-h-[480px] lg:space-x-20 lg:flex-row'>
                    <div className='flex-1 flex space-x-6 items-center lg:space-x-12'>
                        {/* images */}
                        {Img.map(({id, img, style, data_aos, data_aos_offset}) => (
                            <div
                                key={id}
                                className={style}
                                data-aos={data_aos}
                                data-aos-offset={data_aos_offset}
                            >
                                <img src={img} alt='' />
                            </div>

                        ))}
                    </div>
                    {/* text */}
                    <div
                        className='flex-1 flex flex-col items-start justify-center mt-6 lg:mt-0'
                        data-aos='fade-left'
                        data-aos-offset='400'
                    >
                        <h2 className='text-3xl font-bold mb-6'>
                            New Experience In Playing Games
                        </h2>
                        <p className='font-secondary mb-6'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
                            illum minus asperiores aliquid dolore deserunt maiores ipsa iure.
                            Hic, nam!
                        </p>
                        <button className='btn'>Get it now</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Experience;