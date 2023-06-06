 import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

 const Footer = () => {
   return (
     <div>
        <footer className="text-gray-400 body-font mt-20 mb-20 bg-black rounded-lg mx-10">
  <div className=" px-5 py-4 mx-6 flex items-center sm:flex-row flex-col">
    <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
     <Image src={require("../../public/Muazam_Avatar-removebg-preview.png")} alt='Avatar' width={60} className='mx-'  />
     <span> 
        <Link href="/" className=" text-gray-300 hover:text-gray-100 hover:text-lg  text-xl">Muazam Mughal</Link>

    </span>
    </div>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">Copyrighte © 2023 Muazam Mughal
   
    </p>
    <span className="inline-flex mr-6 gap-4 sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link href = "https://www.facebook.com/muazam.mughal.52/" className="text-xl hover:text-2xl  hover:text-gray-100" >
       
        </Link>
      <Link  href = "https://twitter.com/MuazaMughal"className="text-xl hover:text-2xl  hover:text-gray-100" >
    

      </Link>
      <Link href = "https://github.com/MuazamMughal" className="text-xl hover:text-2xl  hover:text-gray-100">
        
        </Link> 
      <Link href = "" className="text-xl hover:text-2xl  hover:text-gray-100">
        
         </Link>
    </span>
  </div>
</footer>

     </div>
   )
 }
 
 export default Footer