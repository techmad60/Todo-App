import React, { useState, useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Header from './Header';
import Content from './Content';

function App() {
  const initialTodos = JSON.parse(localStorage.getItem('todos')) || [];
  const [todos, setTodos] = useState(initialTodos);
  const [completedTasks, setCompletedTasks] = useState([]);

  // Load completed tasks from local storage when the app initializes
  const initialCompletedTasks = JSON.parse(localStorage.getItem('completedTasks')) || [];
  useEffect(() => {
    setCompletedTasks(initialCompletedTasks);
  }, []); // Initialize completedTasks on mount

  // Save todos and completed tasks to local storage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
  }, [todos, completedTasks]);

  const handleTaskCompletion = (id) => {
    const updatedCompletedTasks = completedTasks.includes(id)
      ? completedTasks.filter((taskId) => taskId !== id)
      : [...completedTasks, id];
    setCompletedTasks(updatedCompletedTasks);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return; // Dragged outside the list
    }
  
    setTodos((prevTodos) => {
      const newTodos = Array.from(prevTodos);
      const [reorderedItem] = newTodos.splice(result.source.index, 1);
      newTodos.splice(result.destination.index, 0, reorderedItem);
      return newTodos;
    });
  };

  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div
        className={`min-h-screen max-w-full bg-no-repeat bg-contain
        ${isDarkMode ? 'bg-slate-900 bg-dark-mode-mobile sm:bg-dark-mode-desktop' : 'bg-slate-200 bg-light-mode-mobile sm:bg-light-mode-desktop'}`}
      >
        <div className={`App md:px-32 lg:p-0 grid lg:max-w-xl lg:mx-auto  `}>
          <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} todos={todos} setTodos={setTodos} />
          <Content isDarkMode={isDarkMode} deleteTodo={deleteTodo} todos={todos} setTodos={setTodos} handleTaskCompletion={handleTaskCompletion} completedTasks={completedTasks} />
        </div>
      </div>
    </DragDropContext>
  );
}

export default App;
