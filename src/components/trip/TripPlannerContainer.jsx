import AddLocationBtn from "@/components/trip/AddLocationBtn";
import TripList from "@/components/trip/TripList";
import SaveRouteButton from "@/components/trip/SaveRouteButton";
import useTripStore from "@/store/useTripStore";


const TripPlannerContainer = () => {
  const markers = useTripStore((state) => state.markers);
  const hasRoute = markers.length >= 2;

  return (
    <div className="flex flex-col justify-between px-8 pt-8 h-full">
      {hasRoute && (
        <div className="border-b border-gray-300 pb-4">
          <SaveRouteButton />
        </div>
      )}

      <div className="flex-1 pt-4">
        <TripList />
      </div>
      <div className="mt-8">
        <AddLocationBtn />
      </div>
    </div>
  );
};
export default TripPlannerContainer;
