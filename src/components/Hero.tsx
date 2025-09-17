import React from 'react'

const Hero = () => {
  return (
    <div className='px-4 py-2 flex items-center flex-col w-full my-20'>
        <button className='border px-4 py-1 rounded-full border-gray-200 hover:bg-gray-200 transition cursor-pointer duration-200 bg-gray-100 text-gray-600'>What are early stage tax requirements?</button>
        <div>
            <h1 className='font-medium mt-10 text-7xl text-black tracking-lighter text-center'>Magically simplify <br/> accounting and taxes</h1>
            <p className='max-w-2xl text-center mt-4 mx-auto text-lg text-neutral-700'>Automated bookeeping,effortless tax filling,real-time insights. Set up in 10 mins. Back to building by 4:09pm</p>
        </div>
        <div className="flex items-center gap-4 mt-10 relative z-10">
            <button className='bg-[#2579F4] px-4 py-2 rounded-lg text-white font-bold shadow-lg text-shadow-md tracking-wide cursor-pointer'>Start free trial</button>
            <button className='cursor-pointer px-4 py-2 rounded-lg text-black font-regular tracking-wide'>Pricing &rarr;</button>
        </div>
    </div>
  )
}

export default Hero