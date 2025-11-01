import { useEffect, useState } from "react";
import { SEARCH_LOCATION_URL } from "@/constants/api";

const useLocation = (searchTerm) => {
  const [location, setLocation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchTerm) return;

    const fetchLocation = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${SEARCH_LOCATION_URL}${searchTerm}`);
        const data = await response.json();
        setLocation(data.results.slice(0, 5) || []);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchLocation();
  }, [searchTerm]);

  return { location, setLocation, isLoading, error };
};
export default useLocation;
