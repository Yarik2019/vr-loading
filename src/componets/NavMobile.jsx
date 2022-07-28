import React from 'react'
// import icons

import {GiTireIronCross} from 'react-icons/gi';
import NavMenu from '../js/NavMenu';
const NavMobile = ({setNavMobile}) => {
  return (
    <nav className='lg:hidden bg-[#251f3f] w-full h-full'>
        <GiTireIronCross onClick={()=> setNavMobile(false)} className="text-3xl absolute left-4 top-6 cursor-pointer"></GiTireIronCross>
        <ul className='flex flex-col items-center justify-center space-y-8 h-full font-secondary'>
            {NavMenu.map(({id, name, href, style})=>(
                 <li key={id} className={`${style}`}><a href={href}>{name}</a></li>
            ))}
        </ul>
    </nav>
  )
}

export default NavMobile