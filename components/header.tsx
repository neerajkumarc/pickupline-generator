import Link from 'next/link'
import React from 'react'
import SignOutBtn from './SignOut'

const Header = () => {
  return (
    <div className="flex justify-between mt-8 items-center px-8">
    <div></div>
    <Link href={'/'} className="sm:text-6xl text-4xl text-[#FF2157] font-medium text-center m-4 ">
      Pickup line Generator
    </Link>
    <div><SignOutBtn/></div>
    </div>
  )
}

export default Header