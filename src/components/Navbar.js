import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between items-center p-5 shadow-md'>
        <h1 className='text-2xl font-bold'>N C Tailor</h1>
        <div>
            <a href='#home' className='mr-5 text-gray-600 hover:text-gray-900'>Home</a>
            <a href='#designs' className='mr-5 text-gray-600 hover:text-gray-900'>Design</a>
            <a href='#services' className='mr-5 text-gray-600 hover:text-gray-900'>Services</a>
            <a href='#contact' className='text-gray-600 hover:text-gray-900'>Contact</a>
        </div>
    </div>
  )
}

export default Navbar