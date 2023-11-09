import React from 'react';



const Toggletheme = ({ isDarkMode, toggleDarkMode }) => {
  const toggleDarkModeHandler = () => {
    toggleDarkMode(); // Toggle the dark mode state
  };

  return (
    <section className="flex justify-between items-center p-5 pt-10">
      <h1 className="text-white font-semibold tracking-widest text-3xl">TODO</h1>
      <img
        src={isDarkMode ? "images/icon-sun.svg" : "images/icon-moon.svg"}
        alt=""
        className={`cursor-pointer`}
        onClick={toggleDarkModeHandler}
      />
    </section>
  );
};

export default Toggletheme;
