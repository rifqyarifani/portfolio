import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <div className=' bg-slate-800 text-white w-full bottom-0 flex flex-col sm:flex-row items-center justify-between p-6 sm:px-12 py-6'>
        <p className=' text-center'>Copyright © 2023. All rights are reserved. Rifqy Arifani</p>
        <div className=''>
          <a href="https://github.com/rifqyarifani" className=' text-3xl mr-4 hover:text-stone-300' target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://www.linkedin.com/in/rifqyarifani/" className=' text-3xl hover:text-stone-300' target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
    </div>
  )
}
