import React from 'react'
import Avater1 from '../assets/img/avt1.png';
import Avater2 from '../assets/img/avt2.png';
import Avater3 from '../assets/img/avt3.png';
import Avater4 from '../assets/img/avt4.png';

// import icons
import { BsFillCircleFill } from 'react-icons/bs';

const Users = () => {
  const imgs = [
    {
      id: 1,
      img: Avater1
    },
    {
      id: 2,
      img: Avater2
    },
    {
      id: 3,
      img: Avater3
    },
    {
      id: 4,
      img: Avater4
    },
  ]
  return (
    <div
      className='flex flex-col justify-center items-center space-x-5 space-y-2 lg:flex-row lg:space-y-0 lg:justify-start'
      data-aos='fade-down'
      data-aos-delay='900'
    >
      <div className='flex -space-x-2'>
        {imgs.map(({id, img}) => (
          <div key={id} className='w-12 h-12 rounded-full'>
            <img src={img} alt='' />
          </div>
        ))} 
      </div>
      <div className='flex items-center space-x-2 font-secondary font-medium'>
        <BsFillCircleFill className='text-xs text-green-500 animate-pulse' />
        <div>400k people online</div>
      </div>
    </div>
  )
}

export default Users