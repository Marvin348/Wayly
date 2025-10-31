import { FaPlus, FaMinus } from "react-icons/fa6";
import { RiMoonClearFill } from "react-icons/ri";
import useTripStore from "@/store/useTripStore";
const Counter = ({ id }) => {
  const updateNights = useTripStore((state) => state.updateNights);
  const markers = useTripStore((state) => state.markers.find((m) => m.id === id));

  return (
    <div className="flex items-center gap-4 mt-2">
      <button
        className="border-2 border-gray-300 p-2 rounded-md cursor-pointer hover:border-gray-400"
        onClick={() => updateNights(id, -1)}
      >
        <FaMinus />
      </button>
      <span className="flex items-center gap-2 font-semibold">
        {markers.nights}
        <RiMoonClearFill className="text-xl" />
      </span>
      <button
        className="border-2 border-gray-300 p-2 rounded-md cursor-pointer hover:border-gray-400"
        onClick={() => updateNights(id, +1)}
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default Counter;
