import { useState } from "react";
import reactLogo from "./assets/react.svg";
import tailwindLogo from "./assets/tailwindcss.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center">
        <div className="flex flex-wrap px-10 items-center justify-center">
          <a href="https://vitejs.dev" target="_blank">
            <img
              src={viteLogo}
              className="h-[9em] p-[1.5em] hover:drop-shadow-[0_0_2em_#646cffaa] transition-all"
              alt="Vite logo"
            />
          </a>
          <a href="https://react.dev" target="_blank">
            <img
              src={reactLogo}
              className="h-[9em] p-[1.5em] animate-[spin_20s_linear_infinite] hover:drop-shadow-[0_0_2em_#646cffaa] transition-all"
              alt="React logo"
            />
          </a>
          <a href="https://tailwindcss.com/" target="_blank">
            <img
              src={tailwindLogo}
              className="h-[9em] p-[1.5em] hover:drop-shadow-[0_0_2em_#646cffaa] transition-all"
              alt="Vite logo"
            />
          </a>
        </div>
        <div className="px-16 flex flex-col justify-center items-center container mx-auto gap-4">
          <h1 className="text-white font-bold text-4xl text-center">
            Vite + React + Tailwind
          </h1>
          <button
            onClick={() => setCount((count) => count + 1)}
            className="bg-slate-700 py-2 px-4 rounded-xl mt-10 text-white font-bold border-2 border-transparent hover:border-violet-500 transition-all"
          >
            count is {count}
          </button>
          <p className="text-white text-center">
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
          <p className="text-center text-slate-500 mt-10">
            Click on the Vite, React, or Tailwind logos to learn more
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
