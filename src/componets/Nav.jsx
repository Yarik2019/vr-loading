import React from 'react'
import NavMenu from '../js/NavMenu';

 const Nav = () => {
  return (
    <nav className='hidden lg:flex'>
      <ul className='flex items-center space-x-12 font-secondary'>
        {NavMenu.map(({id, name, href, style})=>(
            <li key={id} className={`${style}`}><a href={href}>{name}</a></li>
        ))}
      </ul>
    </nav>
  )
}
export default Nav;