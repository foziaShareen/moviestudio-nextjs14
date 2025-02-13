import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Header = () => {
    return (
        <div className='w-full flex items-center justify-between p-5 bg-[#121212]'>
            <Link href={'/'}>
            <Image 
            src="https://i.ibb.co/ZW0SbjJ/logo-dark.png"

            alt="logo"
            width={120}
            height={100}
            priority={true}
            className='cursor-pointer w-40 h-auto'
            
            />
            
            </Link>
        </div>
    )
}

export default Header
