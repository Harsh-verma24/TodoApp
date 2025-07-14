import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <div className='py-4 '>
        <ul className='flex flex-row place-content-center'>
            <NavLink to='/' className='mx-4 my-2 cursor-pointer'>Home</NavLink>
            <NavLink to='/todos' className='mx-4 my-2 cursor-pointer'>Todo List</NavLink>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
