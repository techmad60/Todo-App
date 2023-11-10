import React from 'react';

const List = ({ isDarkMode, todos, deleteTodo }) => {
  const handleDelete = (id) => {
    // Trigger the deletion function with the todo ID
    deleteTodo(id);
  };

  return (
    <ul className={`rounded-t-md ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`}>
      {todos.map((todo) => (
        <li key={todo.id} className={`flex items-start p-5 border-b-2 ${isDarkMode ? 'border-slate-400' : 'border-slate-200'}`}>
          <button className={`border-2 rounded-full w-5 h-5 ${isDarkMode ? 'border-gray-600' : ''}`} id={`Completed-Todo-${todo.id}`}></button>
          <p className='text-start pl-3 text-slate-400'>{todo.text}</p>
          <img
            src="images/icon-cross.svg"
            alt=""
            className="ml-auto"
            id={`Delete-todo-${todo.id}`}
            onClick={() => handleDelete(todo.id)} // Add the deletion function on click
          />
        </li>
      ))}
    </ul>
  );
};

export default List;
