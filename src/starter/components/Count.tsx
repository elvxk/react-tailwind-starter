import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  return (
    <button
      onClick={() => setCount((count) => count + 1)}
      className="bg-slate-700 dark:bg-slate-400 py-2 px-4 rounded-xl text-white dark:text-slate-800 font-bold border-2 border-transparent hover:border-violet-500 transition-all"
    >
      count is {count}
    </button>
  );
};
export default Count;
