import { Link, useLocation } from "react-router-dom";
import { logo } from "../assets";

const Navbar = () => {
  const location = useLocation();

  return (
    <header>
      <nav className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <img src={logo} alt="logo" className="w-60 object-contain py-2" />
        </Link>
        {location.pathname === "/image-showcase" && (
          <Link
            to="/create-post"
            className="font-inter font-medium bg-buttonPrimary text-white px-4 py-2 rounded-md"
          >
            Create
          </Link>
        )}
        {location.pathname === "/create-post" && (
          <Link
            to="/image-showcase"
            className="font-inter font-medium bg-buttonPrimary text-white px-4 py-2 rounded-md"
          >
            Image Showcase
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
