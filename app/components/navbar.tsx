import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className="text-gray-400 body-font bg-black rounded-lg mt-10 mx-10">
    <div className=" flex flex-wrap mx-8 my-6 py-2 px-6  flex-col md:flex-row items-center">
      <a className="inline-flex title-font font-medium items-center text-gray-900  ">
       <div> <Image src={require("../../public/Muazam_Avatar-removebg-preview.png")} alt='Avatar' width={60} className='flex'  /></div>
        <div>
           <Link href="/" className="ml-3 flex text-gray-300 hover:text-gray-100 hover:text-lg  text-xl">
          Muazam Mughal</Link>
          </div>
      </a>
      <nav className="md:gap-0 ml-auto flex flex-wrap items-center text-base justify-center mr-10 gap-4">
        <Link href = {"/"} className="mr-5 text-lg hover:text-xl  hover:text-gray-100">Home</Link>
        <Link href = {"#Skills"}className="mr-5 text-lg hover:text-xl hover:text-gray-100">Skills</Link>
        <Link href = {"#Projects"} className="mr-5 text-lg hover:text-xl  hover:text-gray-100">Projects</Link>
        <Link href = {"#contact"} className="mr-5 text-lg hover:text-xl hover:text-gray-100">Contact</Link>
      </nav>
      <div className=' mr-18'>
        <button className="flex text-gray-600  items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded-lg text-base mt-4 md:mt-0">Download CV
       
        </button>
      </div>
    </div>
  </header>

  )
}

export default Navbar