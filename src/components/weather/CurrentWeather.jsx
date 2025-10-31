import { LuWind } from "react-icons/lu";
import { BsDroplet } from "react-icons/bs";
import { IoIosCalendar } from "react-icons/io";

import { weatherConditions } from "@/lib/weatherMapping";

const CurrentWeather = ({ data, location}) => {
  if (!data) return null;

  const condition = weatherConditions[data.weather_code];

  return (
    <div className="flex flex-col items-center w-full">
        <p className="text-lg font-semibold">{location}</p>
      <img className="size-50" src={condition.icon} alt={condition.label} />
      <div className="text-center mt-4">
        <p className="text-3xl font-semibold">{`${data.temperature_2m}°`}</p>
        <p>{condition.label}</p>
      </div>
      <div className="hidden sm:flex items-center gap-10 bg-accent text-white rounded-md p-2 mt-4">
        <p className="flex items-center gap-2 font-medium">
          <BsDroplet className="text-xl" />
          {`${data.relativehumidity_2m} %`}
        </p>
        <p className="flex items-center gap-2 font-medium">
          <IoIosCalendar className="text-xl" />
          {data.time}
        </p>
        <p className="flex items-center gap-2">
          <LuWind className="text-xl" />
          {`${data.wind_speed_10m} km/h`}
        </p>
      </div>
    </div>
  );
};
export default CurrentWeather;
