
function App() {
  return (
    <div className="md:p-32 lg:p-0 grid lg:max-w-xl lg:mx-auto">
      <header>
        <section className="flex justify-between items-center p-5 pt-10">
          <h1 className="text-white font-semibold tracking-widest text-3xl">TODO</h1>
          <img src="images/icon-moon.svg" alt="" className="dark:hidden" />
          <img src="images/icon-sun.svg" alt="" />
        </section>
        <section className="flex items-center m-5 bg-white rounded-md px-5 dark:bg-slate-800">
          <p className="border-2 rounded-full w-5 h-5 dark:border-gray-600"></p>
          <input type="text" placeholder="Create a new todo..." className="text-black placeholder:text-slate-400 w-full p-3 dark:bg-slate-800" />
        </section>
      </header>

      <main className="m-5 md:mt-40 lg:mt-0">
        <section className="flex bg-white justify-between p-5  rounded-t-md border-t-white border-b-2 dark:border-b-slate-400 dark:bg-slate-800">
          <p className="border-2 rounded-full w-5 h-5 dark:border-gray-600"></p>
          <img src="images/icon-cross.svg" alt="" className=""/>
        </section>
        <div className="lg:hidden">
          <section className="flex bg-white justify-between p-5 text-slate-400 text-sm dark:bg-slate-800">
            <p className="">5 items left</p>
            <p>Clear Completed</p>
          </section>
          
          <section className="flex justify-center bg-white space-x-5 mt-4 p-4 rounded-md text-slate-400 font-semibold dark:bg-slate-800">
            <p>All</p>
            <p>Active </p>
            <p>Completed</p>
          </section>
        </div>
        <div className="lg:flex justify-between hidden  bg-white dark:bg-slate-800 text-slate-400 p-5 rounded-b-md">
          <div className="">5 items left</div>
          <section className="flex justify-center space-x-5 rounded-md  font-semibold">
            <p>All</p>
            <p>Active </p>
            <p>Completed</p>
          </section>
          <div className="">Clear Completed</div>
        </div>
      </main>
    </div>
  )
}

export default App
