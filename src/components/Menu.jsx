import { Link } from "react-router-dom";

const Menu = ({ color }) => {
  const medium = color ? color : "white";
  return (
    <ul className="flex flex-col items-center gap-y-8 md:flex-row gap-x-10">
      <Link
        to="/home"
        className={`public-sans font-normal text-xs tracking-[2px] uppercase text-${medium}`}
      >
        home
      </Link>
      <Link to="/portfolio">
        <span
          className={`public-sans font-normal text-xs tracking-[2px] uppercase text-${medium}`}
        >
          portfolio
        </span>
      </Link>
      <Link
        to="/contact"
        className={`public-sans font-normal text-xs tracking-[2px] uppercase text-${medium}`}
      >
        contact me
      </Link>
    </ul>
  );
};

export default Menu;
