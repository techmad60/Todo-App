import React from 'react'

const Content = ({ isDarkMode }) => {
  return (
    <main className="mx-5 md:mt-2 lg:mt-0">
        <section className={`flex justify-between p-5  rounded-t-md border-t-white border-b-2
         ${isDarkMode ? 'bg-slate-800 border-b-slate-400' : 'bg-white'}`}>
          <p className={`border-2 rounded-full w-5 h-5  
          ${isDarkMode ? 'border-gray-600' : ''}`}>
          </p>
          <img src="images/icon-cross.svg" alt="" className=""/>
        </section>
        <div className="lg:hidden">
          <section className={
          `flex justify-between p-5 text-slate-400 text-sm
          ${isDarkMode ? 'bg-slate-800' : ' bg-white'}`
          }>
            <p className="">5 items left</p>
            <p>Clear Completed</p>
          </section>
          
          <section className={
            `flex justify-center space-x-5 mt-4 p-4 rounded-md text-slate-400 font-semibold
            ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`
          }>
            <p>All</p>
            <p>Active </p>
            <p>Completed</p>
          </section>
        </div>
        <div className={`lg:flex justify-between hidden text-slate-400 p-5 rounded-b-md ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`}>
          <div className="">5 items left</div>
          <section className="flex justify-center space-x-5 rounded-md  font-semibold">
            <p>All</p>
            <p>Active </p>
            <p>Completed</p>
          </section>
          <div className="">Clear Completed</div>
        </div>
      </main>

  )
}

export default Content