import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3 } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import profile from '/profile.png'
import profile2 from '/profile2.jpg'


export default function Home() {
  return (
    <div className=' flex flex-col sm:flex-row-reverse justify-evenly items-center pt-32 pb-10 bg-slate-50' id='home' >
      <img src={profile2} alt="Profile Photo" className=' sm:w-3/12 sm:h-3/12 w-4/12 h-4/12 select-none mb-4 rounded-full border-2 border-slate-800'/>
      <div className=' flex flex-col w-8/12 sm:w-5/12 justify-end text-center'>
        <h1 className=' sm:text-7xl text-5xl mb-4 font-bold'>Front-End Developer💡</h1>
        <p className=' text-xl mb-4 font-medium'>Hi, My name is Rifqy Arifani, I'm a Front-end Developer based in Indonesia. 🇮🇩 </p>
        <div className=' flex flex-col sm:flex-row gap-4 items-center'>
          <p className=' text-xl font-medium sm:border-r-gray-700 sm:border-r-2 sm:border-b-0 border-b-gray-700 border-b-2 p-2'>Tech Stack</p>
          <div className='flex items-center text-5xl gap-8'>
            <FontAwesomeIcon icon={faHtml5} className='  hover:text-orange-600 duration-200'/>
            <FontAwesomeIcon icon={faCss3} className='hover:text-blue-600 duration-200'/>
            <FontAwesomeIcon icon={faJs} className='hover:text-yellow-500 duration-200'/>
            <FontAwesomeIcon icon={faReact} className='hover:text-blue-400 duration-200'/>
          </div>
        </div>
      </div>
    </div>
  )
}
