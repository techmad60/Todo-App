import React from 'react'


const DesktopItem = ({isDarkMode, totalTodosCount, clearCompletedTodos, setFilter}) => {
    return (
      <div 
      className={`lg:flex justify-between hidden text-slate-400  p-5 rounded-b-md ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`}>
        <button className=""> <span id='Desktop-item'>{totalTodosCount}</span> items left</button>
        <section className="flex justify-center space-x-5 rounded-md  font-semibold">
          <button onClick={() => setFilter('All')}>All</button>
          <button onClick={() => setFilter('Active')}>Active</button>
          <button onClick={() => setFilter('Completed')}>Completed</button>
        </section>
        <button onClick={clearCompletedTodos}>Clear Completed</button>
      </div>
    )
  }

export default DesktopItem