'use client'
import React from 'react'
import secureLocalStorage from "react-secure-storage";

export const LandPage = () => {
  const [loggedInState, setloggedInState] = React.useState(false);
  React.useEffect(() => {
    setloggedInState(secureLocalStorage.getItem("loggedIn"))
  }, []);
  return (
    <div className=" w-full">
    <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Ramadan Habits Tracker</h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Track your progress and habits during the holy month of Ramadan.
        </p>
        </div>
        <div className="flex flex-col justify-center text-lg gap-y-2 font-bold text-center text-slate-950">
            <div className="flex gap-2 md:gap-x-4 justify-center md:text-base text-xs font-bold text-center text-slate-950">

<a className='block py-2 px-4 text-white bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none' href={`${loggedInState?'/prayers':'/login'}`}>Start Tracking</a>
<a className=' p-2 text-gray-100 hover:text-gray-200 duration-150 hover:bg-slate-500 active:bg-gray-100 border rounded-lg' href='/dashboard'>Watch Progress</a>
</div>

<div className='flex justify-center flex-row'>
<a href="https://github.com/Ebrahim-Ramadan/ramadan-habits-tracker" target='_blank' className='inline-flex gap-x-4 items-center rounded-full p-1 pr-2 md:pr-6 border text-xs font-medium duration-150 hover:bg-[#8574EC]'>
                  <span className='inline-block rounded-full px-3 py-1 bg-indigo-600 text-white'>
                      News
                  </span>
                  <p className='flex items-center text-gray-50'>
                     Contribute
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                          <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                      </svg>
                  </p>
              </a>
</div>
            </div>
    </div>
  </div>
  )
}
