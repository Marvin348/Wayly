import useWeatherForecast from "@/hooks/useWeatherForecast";
import CurrentWeather from "@/components/weather/CurrentWeather";
import Spinner from "@/components/Spinner";
import WeatherForecastList from "@/components/weather/WeatherForecastList";
import useScrollLock from "@/hooks/useScrollLock";

const WeatherForecastModal = ({ onClose, current, next }) => {
  const { weatherForecast, isLoading, error } = useWeatherForecast(
    next.lat,
    next.lon
  );

  useScrollLock(true);


  if (isLoading) {
    return (
      <div className="overlay">
        <div className="modal w-[20rem] h-[40rem] sm:h-[25rem] sm:w-[50rem]">
          <Spinner />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="overlay">
        <div className="modal w-[20rem] h-[40rem] sm:h-[25rem] sm:w-[50rem] text-red-600">
          Fehler beim Laden des Wetters 😕
          <button
            onClick={onClose}
            className="block w-full underline font-medium mt-4"
          >
            Schließen
          </button>
        </div>
      </div>
    );
  }

  if (!weatherForecast || !weatherForecast.current) return null;

  return (
    <div className="overlay" onClick={onClose}>
      <div
        className="modal w-[20rem] h-[40rem] sm:h-[25rem] sm:w-[50rem] custome-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        <CurrentWeather data={weatherForecast.current} location={next.name} />
        <WeatherForecastList daily={weatherForecast.daily} />
        <button
          className="block w-full underline font-medium mt-4 cursor-pointer rounded-md h-12 hover:border border-accent"
          onClick={onClose}
        >
          Abbrechen
        </button>
      </div>
    </div>
  );
};
export default WeatherForecastModal;
