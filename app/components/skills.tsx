import React from 'react'
import {MdEngineering} from "react-icons/md"
import {MdDeveloperMode} from "react-icons/md"
import {MdOutlineDesignServices} from "react-icons/md"
import {MdGraphicEq} from "react-icons/md"

const Skills = () => {
  return (
    <div id="Skills">
    <div >
        <section className="text-gray-600 body-font mt-24 ">
      <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-4xl text-gray-200 tracking-widest font-bold mb-12 title-font ">
        Skills
      </h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-500">
        Some prominent skills were such as
      </h1>
     </div>





    
     <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/4">
        <div className="flex rounded-lg h-full bg-gray-300 hover:bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center text-2xl justify-center rounded-full">
              <MdEngineering/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Software Engineer
            </h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">
              I am studing in 4th year of software Engineering ,I embrace the challenge, eager to acquire 
              the skills and knowledge to craft innovative solutions for the future.
            </p>
            
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/4">
        <div className="flex rounded-lg h-full bg-gray-300 hover:bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center text-2xl justify-center rounded-full">
              <MdDeveloperMode/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Front End Devaloper
            </h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">
            Through my front-end experience, I have honed my skills in HTML, CSS, and Typescript, Next.js 
            bringing web designs to 
            life with interactive and visually appealing interfaces.
            </p>
            
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/4">
        <div className="flex rounded-lg h-full bg-gray-300 hover:bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center text-2xl justify-center rounded-full">
              <MdOutlineDesignServices/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              UI/UX Desiginer
            </h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">
              I am also aquiring the skills for the Ui/Ux designer , Also enhance my Designing with My graphic design abilities 
            </p>
            
          </div>
        </div>
      </div>

      <div className="p-4 md:w-1/4">
        <div className="flex rounded-lg h-full bg-gray-300 hover:bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center text-2xl justify-center rounded-full">
              <MdGraphicEq/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
             Graphic Designer
            </h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">
            As a graphic designer, I harness the power of visual communication to craft compelling
             and impactful designs that resonate with audiences.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    </div>
    
    </div>
  )
}

export default Skills