import React from 'react'
import List from './List'
import MobileItem from './MobileItem'
import MobileFilter from './MobileFilter'

const Content = ({ isDarkMode, todos, deleteTodo, setTodos, handleTaskCompletion, completedTasks }) => {
  
  const clearCompletedTodos = () => {
    const updatedTodos = todos.filter(todo => !completedTasks.includes(todo.id));
    setTodos(updatedTodos);
  };
  
  return (
      <main className="mx-5 md:mt-2 lg:mt-0">
        <List todos={todos} deleteTodo={deleteTodo} isDarkMode={isDarkMode} handleTaskCompletion={handleTaskCompletion} completedTasks={completedTasks}/>
        <div className="lg:hidden">
          <MobileItem isDarkMode={isDarkMode} totalTodosCount={todos.length} clearCompletedTodos={clearCompletedTodos}/>
          <MobileFilter isDarkMode={isDarkMode} />
        </div>
        <div className={`lg:flex justify-between hidden text-slate-400 p-5 rounded-b-md ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`}>
          <div className="">5 items left</div>
          <section className="flex justify-center space-x-5 rounded-md  font-semibold">
            <p>All</p>
            <p>Active </p>
            <p>Completed</p>
          </section>
          <div className="">Clear Completed</div>
        </div>
      </main>

  )
}

export default Content