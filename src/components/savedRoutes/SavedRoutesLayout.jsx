import SavedRouteList from "@/components/savedRoutes/SavedRouteList";
import ClearSavedRoutes from "@/components/savedRoutes/ClearSavedRoutes";
import useRoutesStore from "@/store/useRoutesStore";

const SavedRoutesLayout = () => {
  const routes = useRoutesStore((state) => state.routes);

  if (routes.length === 0)
    return (
      <div className="mt-16 text-center">
        <p>Keine Route gepeichert</p>
      </div>
    );

  return (
    <div className="mt-16">
      <div className="container">
        <SavedRouteList />
        <div className="text-center mt-16">
          <ClearSavedRoutes />
        </div>
      </div>
    </div>
  );
};
export default SavedRoutesLayout;
