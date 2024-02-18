import { useState } from "react";
import reactLogo from "./assets/react.svg";
import tailwindLogo from "./assets/tailwindcss.svg";
import viteLogo from "/vite.svg";
import { FaGithub, FaInstagram } from "react-icons/fa6";
import Switcher from "./components/Switcher";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center">
        <Switcher />
        <div className="flex flex-wrap px-10 items-center justify-center">
          <a href="https://vitejs.dev" target="_blank">
            <img
              src={viteLogo}
              draggable="false"
              className="h-[9em] p-[1.5em] hover:drop-shadow-[0_0_2em_#646cffaa] transition-all"
              alt="Vite logo"
            />
          </a>
          <a href="https://react.dev" target="_blank">
            <img
              src={reactLogo}
              draggable="false"
              className="h-[9em] p-[1.5em] animate-[spin_20s_linear_infinite] hover:drop-shadow-[0_0_2em_#646cffaa] transition-all"
              alt="React logo"
            />
          </a>
          <a href="https://tailwindcss.com/" target="_blank">
            <img
              src={tailwindLogo}
              draggable="false"
              className="h-[9em] p-[1.5em] hover:drop-shadow-[0_0_2em_#646cffaa] transition-all"
              alt="Vite logo"
            />
          </a>
        </div>
        <div className="px-16 flex flex-col justify-center items-center container mx-auto gap-4">
          <h1 className="text-white font-bold text-4xl text-center">
            Vite + React + Tailwind
          </h1>
          <p className="text-white text-center">
            Edit{" "}
            <code className="bg-slate-600/30 rounded-md px-2 py-1">
              /App.tsx
            </code>{" "}
            and save to test HMR
          </p>
          <button
            onClick={() => setCount((count) => count + 1)}
            className="bg-slate-700 py-2 px-4 rounded-xl text-white font-bold border-2 border-transparent hover:border-violet-500 transition-all"
          >
            count is {count}
          </button>
          <div className="flex flex-wrap gap-6 mt-10 -mb-2 text-center text-slate-500 text-2xl">
            <a
              href="https://github.com/elvxk/react-tailwind-starter"
              target="_blank"
            >
              <FaGithub />
            </a>
            <a href="https://instagram.com/elvxk" target="_blank">
              <FaInstagram />
            </a>
          </div>
          <a
            href="https://sandri.my.id"
            target="_blank"
            className="text-center text-slate-500 text-lg flex flex-col items-center justify-center"
          >
            sandri.my.id
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
