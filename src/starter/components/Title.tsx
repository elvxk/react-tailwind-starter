const Title = () => {
  return (
    <>
      <h1 className="text-white font-bold text-4xl text-center dark:text-slate-800">
        Vite + React + Tailwind
      </h1>
      <div className="gap-4 flex flex-col my-6">
        <p className="text-white dark:text-slate-800">
          🚀 Vite template starter by{" "}
          <a
            href="https://github.com/elvxk"
            target="_blank"
            className="bg-slate-600/30 rounded-md px-2 py-1"
          >
            elvxk
          </a>
        </p>
        <p className="text-white dark:text-slate-800">
          🍃 Include{" "}
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            className="bg-slate-600/30 rounded-md px-2 py-1"
          >
            Tailwindcss
          </a>{" "}
          and{" "}
          <a
            href="https://react-icons.github.io/react-icons/"
            target="_blank"
            className="bg-slate-600/30 rounded-md px-2 py-1"
          >
            react-icons
          </a>
        </p>
        <p className="text-white dark:text-slate-800">
          💻 Edit{" "}
          <code className="bg-slate-600/30 rounded-md px-2 py-1">/App.tsx</code>{" "}
          and save to test HMR
        </p>
      </div>
    </>
  );
};
export default Title;
