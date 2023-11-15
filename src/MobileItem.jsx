import React from 'react'

const MobileItem = ({isDarkMode, totalTodosCount, clearCompletedTodos, setFilter}) => {
  return (
    <div className="lg:hidden">
      <section className={
      `flex justify-between p-5 text-slate-400 text-sm
      ${isDarkMode ? 'bg-slate-800' : ' bg-white'}`
      }>
        <button className=""><span id='Mobile-Items'>{totalTodosCount}</span> items left</button>
        <button onClick={clearCompletedTodos}>Clear Completed</button>
      </section>

      <section className={`flex justify-center space-x-5 mt-4 p-4 rounded-md text-slate-400 font-semibold ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`}>
      <button onClick={() => setFilter('All')}>All</button>
      <button onClick={() => setFilter('Active')}>Active</button>
      <button onClick={() => setFilter('Completed')}>Completed</button>
      </section>
    </div>
    
  )
}
export default MobileItem