import useTripStore from "@/store/useTripStore";
import useRoutesStore from "@/store/useRoutesStore";
import toast from "react-hot-toast";

const SaveRouteButton = () => {
  const markers = useTripStore((state) => state.markers);
  const addRoute = useRoutesStore((state) => state.addRoute);

  const handleSave = () => {
    addRoute(markers);
    toast.success("Route gespeichert", {
      duration: 3000,
    });
  };

  return (
    <button
      className="flex items-center gap-2 font-medium rounded-md cursor-pointer underline decoration-accent decoration-3 hover:text-gray-700"
      onClick={handleSave}
    >
      Route speichern
    </button>
  );
};
export default SaveRouteButton;
