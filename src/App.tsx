import Switcher from "./components/Switcher";
import Logo from "./components/Logo";
import Footer from "./components/Footer";
import Title from "./components/Title";
import Count from "./components/Count";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-900 dark:bg-slate-300 transition-all duration-500 flex flex-col justify-center items-center">
        <Logo />
        <div className="px-16 flex flex-col justify-center items-center container mx-auto gap-4">
          <Title />
          <div className="flex items-center flex-wrap justify-center gap-4">
            <Count />
            <Switcher />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
