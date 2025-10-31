import logo from "@/assets/wayly.svg";
import { FaRegUserCircle } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import useRoutesStore from "@/store/useRoutesStore";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";

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
            <li>Über Uns</li>
            <li className="flex items-center gap-2">
              Plane deine Reise <FaChevronDown className="text-xs" />
            </li>
            <li className="flex items-center gap-2">
              Wetterberichte
              <FaChevronDown className="text-xs" />
            </li>
            <li className="flex items-center gap-2">
              Hilfe
              <FaChevronDown className="text-xs" />
            </li>
          </ul>
          <div className="flex items-center gap-6">
            <button className="text-xl">
              <FaRegUserCircle />
            </button>
            <Link to="/saved-routes" className={"relative text-xl"}>
              <FaRegHeart />
              {routes.length > 0 && (
                <span className="absolute top-0 right-0 bg-accent size-3 rounded-full"></span>
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
