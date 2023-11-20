import React, { useState } from 'react';

const MobileItem = ({ isDarkMode, totalTodosCount, clearCompletedTodos, setFilter }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const handleFilterClick = (filter) => {
    setFilter(filter);
    setActiveFilter(filter);
  };

  return (
    <div className="lg:hidden">
      <section
        className={`flex justify-between p-5 text-slate-400 text-sm ${
          isDarkMode ? 'bg-slate-800' : ' bg-white'
        }`}
      >
        <button className="">
          <span id='Mobile-Items'>{totalTodosCount}</span> items left
        </button>
        <button onClick={clearCompletedTodos}>Clear Completed</button>
      </section>

      <section
        className={`flex justify-center space-x-5 mt-4 p-4 rounded-md text-slate-400 font-semibold ${
          isDarkMode ? 'bg-slate-800' : 'bg-white'
        }`}
      >
        <button
          onClick={() => handleFilterClick('All')}
          className={activeFilter === 'All' ? 'active-filter' : ''}
        >
          All
        </button>
        <button
          onClick={() => handleFilterClick('Active')}
          className={activeFilter === 'Active' ? 'active-filter' : ''}
        >
          Active
        </button>
        <button
          onClick={() => handleFilterClick('Completed')}
          className={activeFilter === 'Completed' ? 'active-filter' : ''}
        >
          Completed
        </button>
      </section>
    </div>
  );
};

export default MobileItem;
