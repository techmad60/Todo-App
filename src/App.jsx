import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
function App() {
  return (
    <div className="App md:p-32 lg:p-0 grid lg:max-w-xl lg:mx-auto">
      <Header />
      <Content />
      <Footer />
    </div>
  )
};

export default App
