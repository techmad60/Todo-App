import React, { useState } from 'react';

const DesktopItem = ({ isDarkMode, totalTodosCount, clearCompletedTodos, setFilter }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const handleFilterClick = (filter) => {
    setFilter(filter);
    setActiveFilter(filter);
  };

  return (
    <div className={`lg:flex justify-between hidden text-slate-400 p-5 rounded-b-md ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`}>
      <button className=""> <span id='Desktop-item'>{totalTodosCount}</span> items left</button>
      <section className="flex justify-center space-x-5 rounded-md font-semibold">
        <button
          className={activeFilter === 'All' ? 'text-blue-500' : ''}
          onClick={() => handleFilterClick('All')}
        >
          All
        </button>
        <button
          className={activeFilter === 'Active' ? 'text-blue-500' : ''}
          onClick={() => handleFilterClick('Active')}
        >
          Active
        </button>
        <button
          className={activeFilter === 'Completed' ? 'text-blue-500' : ''}
          onClick={() => handleFilterClick('Completed')}
        >
          Completed
        </button>
      </section>
      <button onClick={clearCompletedTodos}>Clear Completed</button>
    </div>
  );
};

export default DesktopItem;
