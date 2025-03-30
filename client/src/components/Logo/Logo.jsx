import React from 'react'
import logo from '../../assets/logo.png'

export const Logo = () => {
  return (
    <span className='flex gap-3'>
<span>
    <img src={logo} className="w-[50px] h-[44px] md:w-[86px] md:h-[76px]"alt="logo" />
</span>

<span className='hidden md:flex flex-col'>
    <span className='text-[35px] text-[#0796EF] font-oswald leading-none'>
        DEEP
    </span>
    <span className='text-[#857878] text-[35px] font-oswald'>
        SOFT
    </span>
</span>

<span className='hidden md:inline text-[#FFFFFF] text-[35px] font-oswald leading-none'>
    NET
</span>


    </span>
  )
}
