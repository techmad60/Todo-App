import React, { useState } from 'react';
import List from './List'
import MobileItem from './MobileItem'
import DesktopItem from './DesktopItem';

const Content = ({ isDarkMode, todos, deleteTodo, setTodos, handleTaskCompletion, completedTasks }) => {

  const [filter, setFilter] = useState('All'); 

  const filteredTodos = () => {
    switch (filter) {
      case 'Active':
        return todos.filter(todo => !completedTasks.includes(todo.id));
      case 'Completed':
        return todos.filter(todo => completedTasks.includes(todo.id));
      default:
        return todos;
    }
  };
  
  const clearCompletedTodos = () => {
    const updatedTodos = todos.filter(todo => !completedTasks.includes(todo.id));
    setTodos(updatedTodos);
  };
  
  return (
    <main className="mx-5 md:mt-2 lg:mt-0">
      <List todos={filteredTodos()} deleteTodo={deleteTodo} isDarkMode={isDarkMode} handleTaskCompletion={handleTaskCompletion} completedTasks={completedTasks}/>
      
      <MobileItem isDarkMode={isDarkMode} totalTodosCount={todos.length} clearCompletedTodos={clearCompletedTodos} setFilter={setFilter}/>
       
      <DesktopItem isDarkMode={isDarkMode} totalTodosCount={todos.length} clearCompletedTodos={clearCompletedTodos} setFilter={setFilter} />

      <div className="mt-5 lg:mt-8 flex justify-center">
       <button className="text-center text-slate-400" >Drag and drop files to reorder list</button>
      </div>

    </main>

  )
}

export default Content