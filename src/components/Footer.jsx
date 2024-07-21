import { Link, useLocation } from "react-router-dom";
import Menu from "./Menu";
import Logo from "../svg/Logo";
import Github from "../svg/Github";
import Linkedin from "../svg/Linkedin";

const Footer = () => {
  const location = useLocation();

  const hidden = location.pathname.includes("contact")
    ? "hidden md:hidden xl:hidden"
    : "";
  return (
    <div className="w-full">
      <div
        className={
          "full px-8 mt-28 md:mt-24 md:flex md:gap-x-8 md:items-center md:justify-between xl:px-40 " +
          hidden
        }
      >
        <h2 className="Ibarra font-bold text-[40px] leading-[42px] text-darkGray text-center md:w-[350px]">
          Interested in doing a project together?
        </h2>
        <div className="w-28 h-[1px] hidden bg-darkGray opacity-[15%] mt-8 md:mt-0 md:block xl:w-64 2xl:w-96"></div>
        <div className="mt-10 w-full flex justify-center md:w-40 md:mt-0">
          <Link
            to="/contact"
            className="px-8 py-4 border-[1px] border-darkGray public-sans font-bold text-xs"
          >
            CONTACT ME
          </Link>
        </div>
      </div>
      <div className="w-full py-14 flex flex-col items-center bg-darkGray mt-20 md:flex-row md:px-10 xl:px-40">
        <Logo color="#ffffff" />
        <div className="mt-10 w-full md:w-fit md:mt-0 md:ml-10">
          <Menu />
        </div>
        <ul className="flex mt-10 gap-x-4 md:mt-0 md:ml-auto">
          <li>
            <a
              href="https://github.com/NiniKurtanidze3"
              target="_blank"
              rel="noreferrer"
            >
              <Github color="#ffffff" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/nino-kurtanidze-280757308/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin color="#ffffff" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
