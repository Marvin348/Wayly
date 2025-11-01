import { IoClose } from "react-icons/io5";

const Sidebar = ({ onClose, isOpen }) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-100 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      ></div>

      <aside
        className={`fixed top-0 bottom-0 right-0 transform transition-transform duration-500 ease-in-out z-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="bg-white text-black h-full w-full p-8 rounded-l-md">
          <button
            className="ml-auto block mb-8 text-2xl"
            onClick={onClose}
            aria-label="Close menu"
          >
            <IoClose />
          </button>
          <ul className="flex flex-col gap-4">
            <li>Über Uns</li>
            <li>Plane deine Reise</li>
            <li>Wetterberichte</li>
            <li>Hilfe</li>
          </ul>
          <select className="mt-4 text-[0.6rem] text-gray-600">
            <option>Deutsch</option>
            <option>Englisch</option>
          </select>
        </div>
      </aside>
    </>
  );
};
export default Sidebar;
