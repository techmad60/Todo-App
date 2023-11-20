import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddTodo = ({ isDarkMode, todos, setTodos }) => {
  const [todoText, setTodoText] = useState('');

  const handleInputChange = (event) => {
    setTodoText(event.target.value);
  };

  const handleAddTodo = () => {
    if (todoText.trim() !== '') {
      const newTodo = {
        id: uuidv4(),
        text: todoText,
      };
      setTodos([...todos, newTodo]);
      setTodoText('');

      console.log('New Todo ID:', newTodo.id);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <section className={`flex items-center m-5 ${isDarkMode ? 'bg-slate-800' : 'bg-white'} rounded-md px-5`}>
      <button
        className={`border-2 rounded-full w-5 h-5 ${isDarkMode ? 'border-gray-600' : ''}`}
        onClick={handleAddTodo}
        aria-label="Add Todo"
      >
      </button>
      <input
        type="text"
        value={todoText}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Create a new todo..."
        className={`placeholder:text-slate-400 w-full p-3 text-slate-400 ${isDarkMode ? 'bg-slate-800' : ''}`}
      />
    </section>
  );
};

export default AddTodo;
