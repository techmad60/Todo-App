import React, { useState } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  // Set isDarkMode based on user preference (true for dark theme, false for light theme)
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={
      `min-h-screen max-w-full bg-no-repeat bg-contain
      ${isDarkMode ? 'bg-slate-900 bg-dark-mode-mobile sm:bg-dark-mode-desktop' : 'bg-slate-200 bg-light-mode-mobile sm:bg-light-mode-desktop'}`
      }>
      <div 
        className={`App md:px-32 lg:p-0 grid lg:max-w-xl lg:mx-auto  `}>
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Content isDarkMode={isDarkMode} />
        <Footer />
      </div>
    </div>
    
  );
}

export default App;
