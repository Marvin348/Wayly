import { useEffect, useState } from "react";
import { FORECAST_BASE_URL } from "../constants/api";

const useWeatherForecast = (lat, lon) => {
  const [weatherForecast, setWeatherForecast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      if (!lat || !lon) return null;

      setIsLoading(true);
      try {
        const response = await fetch(
          `${FORECAST_BASE_URL}?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m,weather_code,relativehumidity_2m&daily=temperature_2m_max,temperature_2m_min,weathercode,sunrise,sunset&timezone=auto`
        );
        const data = await response.json();
        setWeatherForecast(data);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchWeather();
  }, [lat, lon]);

  return { weatherForecast, isLoading, error };
};
export default useWeatherForecast;
