import React, { useState, useEffect } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  // Set isDarkMode based on user preference (true for dark theme, false for light theme)const [isDarkMode, setIsDarkMode] = useState(true);
  const initialTodos = JSON.parse(localStorage.getItem('todos')) || [];
  const [todos, setTodos] = useState(initialTodos);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleTaskCompletion = (id) => {
    // Logic to manage completion status in the App component
    const updatedCompletedTasks = completedTasks.includes(id)
      ? completedTasks.filter((taskId) => taskId !== id)
      : [...completedTasks, id];
    setCompletedTasks(updatedCompletedTasks);
  };

  
  // Load completed tasks from local storage when the app initializes
  const initialCompletedTasks = JSON.parse(localStorage.getItem('completedTasks')) || [];
  const [completedTasks, setCompletedTasks] = useState(initialCompletedTasks);

  // Save todos and completed tasks to local storage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('completedTasks', JSON.stringify(completedTasks)); 
    // Save completed tasks
  }, [todos, completedTasks]); // Listen for changes in both todos and completedTasks

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className={
      `min-h-screen max-w-full bg-no-repeat bg-contain
      ${isDarkMode ? 'bg-slate-900 bg-dark-mode-mobile sm:bg-dark-mode-desktop' : 'bg-slate-200 bg-light-mode-mobile sm:bg-light-mode-desktop'}`
      }>
      <div 
        className={`App md:px-32 lg:p-0 grid lg:max-w-xl lg:mx-auto  `}>
         <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} todos={todos} setTodos={setTodos} />
        <Content isDarkMode={isDarkMode} deleteTodo={deleteTodo} todos={todos}  setTodos={setTodos} handleTaskCompletion={handleTaskCompletion} completedTasks={completedTasks}/>
        <Footer />
      </div>
    </div>
    
  );
}

export default App