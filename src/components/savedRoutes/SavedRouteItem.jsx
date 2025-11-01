import { BiWorld } from "react-icons/bi";
import { RiMoonClearFill } from "react-icons/ri";
import { FaCity } from "react-icons/fa";
import SavedRoutesDetailsToggle from "@/components/savedRoutes/SavedRoutesDetailsToggle";

const SavedRouteItem = ({ routes, index }) => {
  const maxNights = routes.markers.reduce((acc, { nights }) => acc + nights, 0);

  return (
    <div className="border-2 border-accent rounded-md p-2">
      <h3>
        Route <span className="font-bold text-accent">#{index + 1}</span>
      </h3>
      <p className="flex items-center gap-2">
        <BiWorld />
        {routes.markers.length} Orte
      </p>
      <p className="flex items-center gap-2">
        <RiMoonClearFill />
        {maxNights} Nächte
      </p>
      <p className="flex items-start gap-2">
        <FaCity className="shrink-0 mt-1" /> {routes.markers.map(({ name }) => name).join(" - ")}
      </p>
      <SavedRoutesDetailsToggle />
    </div>
  );
};
export default SavedRouteItem;
