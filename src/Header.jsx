// Header.js
import React from 'react';
import Toggletheme from './Toggletheme';
import AddTodo from './AddTodo';

const Header = ({ isDarkMode, toggleDarkMode, todos, setTodos }) => {
  return (
    <header className='lg:mt-5'>
      <Toggletheme isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <AddTodo isDarkMode={isDarkMode} todos={todos} setTodos={setTodos} />
    </header>
  );
}

export default Header;