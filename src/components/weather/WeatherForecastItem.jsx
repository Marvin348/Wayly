import { weatherConditions } from "@/lib/weatherMapping";

const WeatherForecastItem = ({ code, tempMin, tempMax, date }) => {
  const condition = weatherConditions[code];

  if (!condition) return null;

  return (
    <div className="min-w-[120px] flex-shrink-0 flex md:flex-col items-center justify-between py-2 gap-4  font-medium border-b border-gray-200 md:border-none">
      <div>{date}</div>
      <img className="size-14" src={condition.icon} alt={condition.label} />
      <div className="text-center text-sm">
        <p>{`${tempMax}° - ${tempMin}°`}</p>
      </div>
    </div>
  );
};
export default WeatherForecastItem;
