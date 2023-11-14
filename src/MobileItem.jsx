import React from 'react'

const MobileItem = ({isDarkMode, totalTodosCount, clearCompletedTodos}) => {
  return (
    <section className={
      `flex justify-between p-5 text-slate-400 text-sm
      ${isDarkMode ? 'bg-slate-800' : ' bg-white'}`
      }>
        <button className=""><span id='Mobile-Items'>{totalTodosCount}</span> items left</button>
        <button onClick={clearCompletedTodos}>Clear Completed</button>
    </section>
  )
}

export default MobileItem