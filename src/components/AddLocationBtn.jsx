import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import LocationModal from "@/components/LocationModal";

const AddLocationBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="btn flex items-center justify-center gap-4"
        onClick={() => setIsOpen(true)}
      >
        <FaLocationDot />
        Reiseziel hinzufügen
      </button>
      {isOpen && <LocationModal setIsOpen={setIsOpen} />}
    </>
  );
};
export default AddLocationBtn;
