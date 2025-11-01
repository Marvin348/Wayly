import { FaLocationDot } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";
import { useState } from "react";
import SearchResultsList from "@/components/searchLocation/SearchResultsList";
import useLocation from "@/hooks/useLocation";
import useTripStore from "@/store/useTripStore";

const Searchbar = ({ onSearch, onClose }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const searchTerm = useTripStore((state) => state.searchTerm);
  const setSearchTerm = useTripStore((state) => state.setSearchTerm);
  const addMarker = useTripStore((state) => state.addMarker);

  const { location } = useLocation(searchTerm);

  const handleClick = () => {
    addMarker();
    if (onClose) onClose();
  };

  return (
    <div className="mt-6">
      <div className="relative">
        <input
          className="block w-full border-2 h-12 border-gray-300 rounded-md pl-8 outline-none mb-4"
          type="text"
          placeholder="Ausgangspunkt"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setShowDropdown(true);
          }}
          onFocus={onSearch}
        />
        <button className="absolute left-2 top-0 bottom-0 text-gray-500">
          <FaLocationDot />
        </button>
        <button
          className="absolute right-2 top-0 bottom-0 text-gray-500 cursor-pointer"
          onClick={() => setShowDropdown(false)}
        >
          <IoIosCloseCircle />
        </button>
        {showDropdown && location.length > 0 && (
          <SearchResultsList
            results={location}
            setShowDropdown={setShowDropdown}
          />
        )}
      </div>
      <button className="btn block" onClick={() => handleClick()}>
        Plane jetzt
      </button>
    </div>
  );
};
export default Searchbar;
