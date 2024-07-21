import Close from "../svg/Close";
import Hamburger from "../svg/Hamburger";
import Logo from "../svg/Logo";
import Menu from "./Menu";

const Header = ({ showMenu, setShowMenu }) => {
  return (
    <div className="w-full flex items-center justify-between relative">
      <Logo color="#33323D" />
      {showMenu ? (
        <Close onClick={() => setShowMenu(false)} />
      ) : (
        <Hamburger onClick={() => setShowMenu(true)} />
      )}
      {showMenu ? (
        <div className="absolute w-[223px] py-10 right-0 top-14 bg-darkGray z-10 md:hidden">
          <Menu />
        </div>
      ) : null}
      <div className="hidden md:block">
        <Menu color="darkGray" />
      </div>
    </div>
  );
};

export default Header;
