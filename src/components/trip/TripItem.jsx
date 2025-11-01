import Counter from "@/components/trip/Counter";
import Deletebtn from "@/components/trip/Deletebtn";
import useTripStore from "@/store/useTripStore";

const TripItem = ({ id }) => {
  const marker = useTripStore((state) =>
    state.markers.find((m) => m.id === id)
  );

  const deleteItem = useTripStore((state) => state.deleteItem);

  if (!marker) return null;

  return (
    <div className="flex w-full justify-between items-center">
      <div>
        <p className="font-semibold">{`${marker.name} (${marker.country})`}</p>
        <Counter id={id} />
      </div>
      <div className="flex">
        <Deletebtn deleteItem={() => deleteItem(id)} />
      </div>
    </div>
  );
};
export default TripItem;
