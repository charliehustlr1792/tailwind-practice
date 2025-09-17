import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const links=[
    {
        href:"/guide",
        title:"Guide"
    },
    {
        href:"/pricing",
        title:"Pricing"
    },
    {
        href:"/login",
        title:"Login"
    }
]
const Navbar = () => {
    return (
        <div className='flex items-center justify-between px-4 py-4'>
            <Link href="/">
                <Image
                    src="/assets/logo.svg"
                    loading='lazy'
                    width={100}
                    height={100}
                    draggable={false}
                    alt="logo"
                />
            </Link>
            <div className='flex items-center gap-8'>
                {links.map((link,index)=>(
                    <Link href={link.href} key={index} className="text-neutral-800 font-medium hover:text-neutral-500 transition duration-200">
                        {link.title}
                    </Link>
                ))}
                <button className='bg-[#2579F4] px-4 py-2 rounded-lg text-white font-bold shadow-lg text-shadow-md tracking-wide'>Start free trial</button>
            </div>
        </div>
    )
}

export default Navbar