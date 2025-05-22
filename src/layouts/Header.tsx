import { Link } from "react-router";
import logo from "../assets/orange-logo-transparent-bg.png";
import { PATH } from "../constants";
import CartIcon from "../assets/icons/cartIcon";
import SearchIcon from "../assets/icons/searchIcon";
import BarsIcon from "../assets/icons/barsIcon";

function Header() {
  return (
    <header className="max-w-screen-xl w-full px-5 mx-auto bg-white flex justify-between">
      <div>
        <div className="xl:hidden flex items-center mr-2.5">
          <BarsIcon />
        </div>

        <div className="logo my-[30px] ml-[20px] xl:ml-0">
          <Link to={{ pathname: PATH.HOME }}>
            <img src={logo} alt="Logo" />
          </Link>
        </div>
      </div>
      <div className="flex">
        <div className="menu w-full items-center hidden xl:flex">
          <div className="px-[20px]">
            <Link to={{ pathname: PATH.HOME }}>Home</Link>
          </div>
          <div className="px-[20px]">
            <Link to={{ pathname: PATH.DEMO }}>Demo</Link>
          </div>
          <div className="px-[20px]">
            <Link to={{ pathname: PATH.ABOUT }}>About us</Link>
          </div>
          <div className="px-[20px]">
            <Link to={{ pathname: PATH.BLOG }}>Blog</Link>
          </div>
          <div className="px-[20px]">
            <Link to={{ pathname: PATH.PORTFOLIO }}>Portfolio</Link>
          </div>
          <div className="px-[20px]">
            <Link to={{ pathname: PATH.ELEMENT }}>Element</Link>
          </div>
          <div className="px-[20px]">
            <Link to={{ pathname: PATH.SHOP }}>Shop</Link>
          </div>
        </div>
        <div className="search-cart flex items-center">
          <div>
            <SearchIcon />
          </div>
          <div className="pl-[20px]">
            <Link to={{ pathname: PATH.CART }}>
              <CartIcon />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
