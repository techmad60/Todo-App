import React from 'react';
import Toggletheme from './Toggletheme';

const Header = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <header className='lg:mt-5'>
      <Toggletheme isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <section className={`flex items-center m-5 ${isDarkMode ? 'bg-slate-800' : 'bg-white'} rounded-md px-5`}>
        <p className={`border-2 rounded-full w-5 h-5 ${isDarkMode ? 'border-gray-600' : ''}`}></p>
        <input
          type="text"
          placeholder="Create a new todo..."
          className={`text-black placeholder:text-slate-400 w-full p-3 ${isDarkMode ? 'bg-slate-800' : ''}`}
        />
      </section>
    </header>
  );
}

export default Header;
