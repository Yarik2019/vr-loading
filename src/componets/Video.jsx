import React, { useState } from 'react'
import { BsPlayCircleFill } from 'react-icons/bs';
import ReactPlayer from 'react-player/youtube';
import ModalVideo from './ModalVideo';
const Video = () => {

    const [isOpen, setOpen] = useState(false)
    
    return (
        <div className='bg-[#534686]/30 py-6' >
            <div className="container mx-auto">
                <div className='flex flex-col justify-center items-center text-center lg:flex-row lg:justify-between'>
                    <h3
                        className='text-2xl font-semibold mb-8 lg:mb-0'
                        data-aos='fade-right'
                        data-aos-offset='350'
                    >Awesome experiences with virtual reality world</h3>
                    {/* modal Video */}
                    <ModalVideo isOpen={isOpen} setOpen={setOpen}>
                  <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                                       width='100%'
                                       height='100%'     />
                   

                    </ModalVideo>
      

                    {/* video */}
                    <div className='bg-videoBg bg-no-repeat bg-cover w-[270px] h-[180px] flex items-center justify-center'
                        data-aos='fade-left'
                        data-aos-offset='350'
                    >
                        <div className='cursor-pointer'>
                            <BsPlayCircleFill onClick={() => setOpen(true)} className='text-4xl text-white/80 hover:text-white hover:scale-110 transition' />
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Video;