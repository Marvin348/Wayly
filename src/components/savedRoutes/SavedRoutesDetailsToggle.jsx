import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

const SavedRoutesDetailsToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-xs">
      <button
        className="flex items-center gap-2 font-medium underline cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        Details anzeigen{" "}
        <FaChevronDown
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && <p className="text-gray-600">Keine Details vorhanden</p>}
    </div>
  );
};
export default SavedRoutesDetailsToggle;
