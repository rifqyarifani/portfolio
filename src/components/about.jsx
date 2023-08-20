import React from 'react'
import passion from '/passion.jpg'

export default function about() {
  return (
    <div className='px-6 sm:px-36 py-32 text-center sm:text-left bg-slate-50 flex flex-col items-center gap-8 sm:gap-36 sm:flex-row' id='about'>
      <div className=' flex flex-col gap-4'>
        <h1 className=' text-3xl font-bold mb-4'>About</h1>
        <h2 className="text-2xl font-semibold text-blue-500">A Passionated Front End Developer</h2>
        <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit nostrum odit, saepe voluptatum quae labore tempore vero suscipit, optio alias, accusamus totam. Neque non nobis, harum exercitationem sed debitis? Dolore animi cupiditate, laboriosam inventore impedit harum ipsam aut ipsum nisi.</p>
      </div>
      <img src={passion} alt="Passion" className=" w-5/6 sm:w-3/6 rounded-3xl passion relative flex justify-center items-center" />
    </div>
  )
}
