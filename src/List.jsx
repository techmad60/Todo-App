import React from 'react';

const List = ({ isDarkMode, todos, deleteTodo, handleTaskCompletion, completedTasks }) => {
  

  const handleDelete = (id) => {
    deleteTodo(id);
    handleTaskCompletion(id); // Signal completion to the App component
  };


  return (
    <ul className={`rounded-t-md ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`}>
      {todos.map((todo) => (
        <li key={todo.id} className={`flex items-start p-5 border-b-2 ${isDarkMode ? 'border-slate-400' : 'border-slate-200'}`}>
          <div
            onClick={() => handleTaskCompletion(todo.id)}
            className={`border-2 bg-no-repeat bg-center rounded-full w-5 h-5 flex items-center justify-center ${isDarkMode ? 'border-gray-600' : ''} ${completedTasks.includes(todo.id) ? 'bg-custom-gradient' : ''}`}
            id={`Completed-Todo-${todo.id}`}
          >
            {completedTasks.includes(todo.id) && (
              <img src="images/icon-check.svg" alt="" className='' />
            )}
          </div>
          <p
          className={`text-start pl-3 ${completedTasks.includes(todo.id) ? isDarkMode
              ? 'line-through text-slate-400'
                : 'line-through text-slate-400'
              : isDarkMode
              ? 'text-white'
              : 'text-black'
          }`}
          >
          {todo.text}
          </p>

          <img
            src="images/icon-cross.svg"
            alt=""
            className="ml-auto"
            id={`Delete-todo-${todo.id}`}
            onClick={() => handleDelete(todo.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default List;
