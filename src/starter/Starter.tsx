import Count from "./components/Count";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import Switcher from "./components/Switcher";
import Title from "./components/Title";

const Starter = () => {
  return (
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
  );
};
export default Starter;
