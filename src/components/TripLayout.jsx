import MapView from "@/components/MapView";
import SearchSection from "@/components/SearchSection";
import TripPlannerContainer from "@/components/TripPlannerContainer";
import useTripStore from "@/store/useTripStore";

const TripLayout = () => {
  const markers = useTripStore((state) => state.markers);

  return (
    <main>
      <div className="flex flex-col md:h-[calc(100dvh-3.095rem)] md:flex-row">
        <div className="w-full md:order-2 md:w-3/4">
          <MapView />
        </div>
        <div className="w-full h-full flex flex-col md:justify-center custom-scrollbar md:overflow-y-auto bg-white md:order-1 md:w-2/4 xl:w-1/4">
          {markers.length > 0 ? <TripPlannerContainer /> : <SearchSection />}
        </div>
      </div>
    </main>
  );
};
export default TripLayout;
