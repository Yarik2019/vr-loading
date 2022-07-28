import React from 'react'
// import img headsets 
import Headset1 from '../assets/img/headset-1.png';
import Headset2 from '../assets/img/headset-2.png';
import Headset3 from '../assets/img/headset-3.png';
import Headset4 from '../assets/img/headset-4.png';


const Headsets = () => {
    const headsets = [
        {
            id: 1,
            img: Headset1,
            title: 'Metaverse',
            text: 'Lorem ipsum, dolor sit  natus veniam dicta soluta ex harum!',
            data_aos:'zoom-in',
            data_aos_offest:300,
            data_aos_delay:1000
        },
        {
            id: 2,
            img: Headset2,
            title: 'AIoT',
            text: 'Lorem ipsum, dolor sit  natus veniam dicta soluta ex harum!',
            data_aos:'zoom-in',
            data_aos_offest:300,
            data_aos_delay:1300
        },
        {
            id: 3,
            img: Headset3,
            title: 'HoloLens',
            text: 'Lorem ipsum, dolor sit  natus veniam dicta soluta ex harum!',
            data_aos:'zoom-in',
            data_aos_offest:300,
            data_aos_delay:1600
        },
        {
            id: 4,
            img: Headset4,
            title: 'TPCASTT',
            text: 'Lorem ipsum, dolor sit  natus veniam dicta soluta ex harum!',
            data_aos:'zoom-in',
            data_aos_offest:300,
            data_aos_delay:1900
        },
    ]
    return (
        <section className="py-12 lg:py-24">
            <div className='container mx-auto'>
                {/* title */}
                <h2 className='text-3xl font-bold mb-6'
                    data-aos='fade-down'
                    data-aos-offset='300'
                    >Mixed Reality Headsets</h2>
                {/* grid */}
                <div className='grid gap-y-4 lg:grid-cols-2 lg:gap-9 md:justify-items-center'>
                    {/* item */}
                    {headsets.map(({id, img, title, text, data_aos, data_aos_offest, data_aos_delay}) => (
                        <div key={id} 
                             data-aos={data_aos}
                             data-aos-offest={data_aos_offest}
                             data-aos-delay={data_aos_delay}
                             className='relative'>
                            <img src={img} alt="" />
                            <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
                                <h4 className='font-semibold text-xl mb-2'>{title}</h4>
                                <p>{text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Headsets