"use client"

import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import Typewriter from 'typewriter-effect';
const Hero = () => {
  return (
    <div id='Hero'>
         <section className="text-gray-600 body-font  mx-8">
        <div className=" mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow  pl-14 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left  mb-16 md:mb-0 items-center text-center">
           <div className='flex ml-12 pl-16'> 
            <h1 className="title-font sm:text-4xl text-3xl mb-8 font-medium text-gray-200">I am
              <br className="mt-4 hidden lg:inline-block" />
              <Typewriter
                    options={{
                     strings: ["Software Engineer","Front End Devaloper","UI/Ux Designer","Graphic Designer","Professional Wood Worker"],
                     autoStart: true,
                      loop: true,
                     }}/>
            </h1>
            </div>
            <span className="mb-8 ml-24 text-gray-400 text-lg pl-4 mt-4 leading-relaxed">I wanna express Feeling in Code,  Coding is my Present, Passion, Pleasure
                   
                      </span>          
            <div className="flex ml-24 mt-14 justify-center">
             <Link href ={"#contact"} >
             <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-400 rounded-xl text-lg">Contact Me</button>
             </Link>
            </div>
          </div>
          <div className=" mr-16 mt-8  lg:max-w-lg  lg:w-full md:w-1/2 w-5/6">
            <Image className="object-cover  object-center  rounded-full" alt="hero" src={require("../../public/Muazam cover final.jpg")} width={450} />
          </div>
        </div>
      </section>


    </div>
  )
}

export default Hero