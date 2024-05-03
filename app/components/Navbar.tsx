import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='py-10'>
        <div className='container'>
            <div>
                <ul className='flex items-center justify-center gap-10 text-lg font-bold uppercase tracking-wider text-gray-500'>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/setings'>Settings</Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar