import { TiWeatherCloudy } from "react-icons/ti";

const WeatherForecastBtn = ({ onOpen }) => {
  return (
    <button
      className="mt-4 flex items-center gap-2 border border-gray-500 font-medium rounded-md p-2 cursor-pointer hover:bg-gray-200"
      onClick={onOpen}
    >
      <TiWeatherCloudy className="text-xl" />
      Wetterbericht
    </button>
  );
};
export default WeatherForecastBtn;
