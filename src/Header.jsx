import React from 'react'

const Header = () => {
  return (
    <header>
        <section className="flex justify-between items-center p-5 pt-10">
          <h1 className="text-white font-semibold tracking-widest text-3xl">TODO</h1>
          <img src="images/icon-moon.svg" alt="" className="dark:hidden" />
          <img src="images/icon-sun.svg" alt="" />
        </section>
        <section className="flex items-center m-5 bg-white rounded-md px-5 dark:bg-slate-800">
          <p className="border-2 rounded-full w-5 h-5 dark:border-gray-600"></p>
          <input type="text" placeholder="Create a new todo..." className="text-black placeholder:text-slate-400 w-full p-3 dark:bg-slate-800" />
        </section>
      </header>
  )
}

export default Header