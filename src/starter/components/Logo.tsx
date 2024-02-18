import reactLogo from "../../assets/react.svg";
import tailwindLogo from "../../assets/tailwindcss.svg";
import viteLogo from "/vite.svg";

const Logo = () => {
  return (
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
  );
};

export default Logo;
