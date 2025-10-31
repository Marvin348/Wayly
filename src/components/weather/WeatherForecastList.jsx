import WeatherForecastItem from "@/components/weather/WeatherForecastItem";
import { getDayName } from "@/lib/utils";
const WeatherForecastList = ({ daily }) => {
  if (!daily) return null;

  return (
    <div className="mt-12 md:flex justify-between overflow-x-auto scrollbar-none">
      {daily.time.map((item, index) => (
        <WeatherForecastItem
          key={item}
          date={getDayName(item)}
          tempMax={daily.temperature_2m_max[index]}
          tempMin={daily.temperature_2m_min[index]}
          code={daily.weathercode[index]}
        />
      ))}
    </div>
  );
};
export default WeatherForecastList;
