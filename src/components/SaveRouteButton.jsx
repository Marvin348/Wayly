import useTripStore from "@/store/useTripStore";
import useRoutesStore from "@/store/useRoutesStore";

const SaveRouteButton = () => {
  const markers = useTripStore((state) => state.markers);
  const addRoute = useRoutesStore((state) => state.addRoute);

  return (
    <button
      className="flex items-center gap-2 font-medium rounded-md cursor-pointer underline decoration-accent decoration-3 hover:text-gray-700"
      onClick={() => addRoute(markers)}
    >
      Route speichern
    </button>
  );
};
export default SaveRouteButton;
