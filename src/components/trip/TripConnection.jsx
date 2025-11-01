import { CgArrowLongDownC } from "react-icons/cg";
import { haversineDistance } from "@/lib/calcDistance";
import WeatherForecastBtn from "@/components/weather/WeatherForecastBtn";
import { useState } from "react";
import WeatherForecastModal from "@/components/weather/WeatherForecastModal";

const TripConnection = ({ current, next }) => {
  const [isOpen, setIsOpen] = useState(false);

  const distance = haversineDistance(
    { lat: current.lat, lon: current.lon },
    { lat: next.lat, lon: next.lon }
  );

  return (
    <div className="text-sm bg-gray-100 my-4 p-4 rounded-md">
      <p className="font-medium">{current.name}</p>
      <div className="flex items-center gap-2 my-1">
        <CgArrowLongDownC className="text-3xl text-gray-800" />
        <p className="text-gray-500 text-xs">{`${distance.toFixed(0)} km`}</p>
      </div>
      <p className="font-medium">{next.name}</p>
      <WeatherForecastBtn onOpen={() => setIsOpen(true)} />
      {isOpen && (
        <WeatherForecastModal
          current={current}
          next={next}
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};
export default TripConnection;
