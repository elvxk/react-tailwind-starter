import { FaGithub, FaInstagram, FaLinkedin, FaDribbble } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-col mt-14 justify-center items-center">
      <div className="flex flex-wrap gap-4 text-center text-slate-500 text-xl">
        <a
          href="https://github.com/elvxk/react-tailwind-starter"
          target="_blank"
        >
          <FaGithub />
        </a>
        <a href="https://instagram.com/elvxk" target="_blank">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/elvxk/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://dribbble.com/elvxk" target="_blank">
          <FaDribbble />
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
  );
};

export default Footer;
