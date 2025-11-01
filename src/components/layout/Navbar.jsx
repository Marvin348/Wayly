import logo from "@/assets/wayly.svg";
import { FaRegUserCircle } from "react-icons/fa";
import { FaChevronDown, FaBars, FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useRoutesStore from "@/store/useRoutesStore";
import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const routes = useRoutesStore((state) => state.routes);

  return (
    <header className="border-b border-b-gray-300">
      <div className="container">
        <nav className=" w-full py-2 flex items-center justify-between">
          <Link to="/">
            <img className="w-[6rem] h-auto" src={logo} alt="" />
          </Link>
          <ul className="hidden lg:flex gap-6 text-sm font-medium">
            <li>
              <Link to="/">Über Uns</Link>
            </li>
            <li>
              <Link to="/" className="flex items-center gap-2">
                Plane deine Reise <FaChevronDown className="text-xs" />
              </Link>
            </li>
            <li>
              <Link to="/" className="flex items-center gap-2">
                Wetterberichte
                <FaChevronDown className="text-xs" />
              </Link>
            </li>
            <li>
              <Link to="/" className="flex items-center gap-2">
                Hilfe
                <FaChevronDown className="text-xs" />
              </Link>
            </li>
          </ul>
          <div className="flex items-center gap-6">
            <Link to="/login" className="text-xl">
              <FaRegUserCircle />
            </Link>
            <Link to="/saved-routes" className={"relative text-xl"}>
              <FaRegHeart />
              {routes.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-accent size-4 rounded-full text-xs flex items-center justify-center text-white">
                  {routes.length}
                </span>
              )}
            </Link>
            <button
              className="text-xl md:hidden"
              onClick={() => setIsSidebarOpen(true)}
            >
              <FaBars />
            </button>
            <Sidebar
              onClose={() => setIsSidebarOpen(false)}
              isOpen={isSidebarOpen}
            />
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
