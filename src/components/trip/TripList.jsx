import TripItem from "@/components/trip/TripItem";
import TripConnection from "@/components/trip/TripConnection";
import useTripStore from "@/store/useTripStore";

const TripList = () => {
  const markers = useTripStore((state) => state.markers);

  return (
    <div>
      {markers.map((item, index) => {
        const next = markers[index + 1];

        return (
          <div key={item.id}>
            <TripItem id={item.id} />
            {next && <TripConnection current={item} next={next} />}
          </div>
        );
      })}
    </div>
  );
};
export default TripList;
