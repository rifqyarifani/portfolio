import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
  return (
    <div className=' w-full py-10 px-6 sm:px-36 text-center sm:text-left'>
        <h1 className=' text-3xl font-bold mb-4'>Contact</h1>
        <h2 className=' text-4xl font-semibold text-blue-500 mb-8'>Hit me up!👇</h2>
        <div className=' flex flex-col sm:flex-row items-center gap-8'>
            <div className='flex flex-col sm:flex-row items-center gap-4'>
                <FontAwesomeIcon icon={faMap} className=' text-blue-500 text-3xl p-4 rounded-full shadow-sm shadow-black'/>
                <div>
                    <h3 className=' text-gray-700 font-bold text-2xl'>Location</h3>
                    <h4 className=' text-gray-600'>Pontianak, Indonesia</h4>
                </div>
            </div>
            <div className='flex flex-col sm:flex-row items-center gap-4'>
                <FontAwesomeIcon icon={faEnvelope} className=' text-blue-500 text-3xl p-4 rounded-full shadow-sm shadow-black'/>
                <div>
                    <h3 className=' text-gray-700 font-bold text-2xl'>Mail</h3>
                    <h4 className=' text-gray-600'>rifqy.arifani44@gmail.com</h4>
                </div>
            </div>
        </div>
    </div>
  )
}
