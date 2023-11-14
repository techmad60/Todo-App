import React from 'react'

const MobileFilter = ({isDarkMode}) => {
  return (
    <section className={
        `flex justify-center space-x-5 mt-4 p-4 rounded-md text-slate-400 font-semibold
        ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`
      }>
        <button>All</button>
        <button>Active </button>
        <button>Completed</button>
      </section>
    )
}

export default MobileFilter