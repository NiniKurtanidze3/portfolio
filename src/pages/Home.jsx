import PosterMobile from "../assets/image-mobile.jpg";
import PosterTablet from "../assets/image-tablet.jpg";
import PosterDesktop from "../assets/image-desktop.jpg";
import Avatar from "../assets/avatar.jpeg";

import { Link } from "react-router-dom";
import DownScroll from "../svg/DownScroll";

const Home = () => {
  return (
    <div className="w-full">
      <img src={PosterMobile} alt="poster" className="w-full mt-6 md:hidden" />
      <img
        src={PosterTablet}
        alt="poster"
        className="w-full mt-12 hidden md:block xl:hidden"
      />
      <img
        src={PosterDesktop}
        alt="poster"
        className="w-full mt-14 hidden xl:block"
      />
      <div className="w-full mt-6 md:w-[514px] pt-14 bg-white md:-mt-[278px] relative xl:w-[445px] xl:-mt-[357px]">
        <h1 className="Ibarra font-bold text-[40px] leading-[42px] -tracking-[0.36px] text-darkGray md:w-[458px] xl:w-[390px] xl:text-[50px] xl:leading-[50px]">
          Hello, I’m Nino Kurtanidze and I love building complex websites
        </h1>
        <a
          href="#about"
          className="w-[200px] h-12 flex bg-darkGreen mt-8 md:mt-12 xl:mt-14"
        >
          <div className="w-12 h-full bg-black bg-opacity-10 flex items-center justify-center">
            <DownScroll />
          </div>
          <span className="m-auto public-sans font-normal text-xs tracking-[2px] text-white">
            ABOUT ME
          </span>
        </a>
      </div>
      <div className="mt-24 w-full md:flex items-center justify-between overflow-hidden md:gap-x-16">
        <img
          src={Avatar}
          alt="avatar"
          className="w-full rounded border-2 border-darkGray md:h-[600px] md:w-[300px] md:object-cover xl:w-[540px]"
        />
        <div className="w-full md:flex flex-col justify-between md:h-[600px]">
          <div className="w-full h-[1px] bg-darkGray opacity-[15%] mt-8 md:mt-0"></div>
          <h2
            className="Ibarra font-bold text-[40px] leading-[42px] text-darkGray mt-8"
            id="about"
          >
            About Me
          </h2>
          <p className="mt-7 w-full public-sans font-normal text-base">
            I’m a Software Engineer, looking for a new role in an exciting
            company. I focus on writing accessible HTML, using modern CSS
            practices and writing clean JavaScript. When writing JavaScript
            code, I mostly use React. I’m based in Tbilisi, Georgia, but I’m
            happy working remotely and have experience in remote teams. When I’m
            not coding, you’ll find me outdoors. I’d love you to check out my work.
          </p>
          <div className="mt-6">
            <Link
              to="/portfolio"
              className="px-8 py-4 border-[1px] border-darkGray public-sans font-bold text-xs"
            >
              GO TO PORTFOLIO
            </Link>
          </div>
          <div className="w-full h-[1px] bg-darkGray opacity-[15%] mt-12"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
