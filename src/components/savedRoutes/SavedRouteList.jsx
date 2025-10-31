import SavedRouteItem from "@/components/savedRoutes/SavedRouteItem";
import useRoutesStore from "@/store/useRoutesStore";

const SavedRouteList = () => {
  const routes = useRoutesStore((state) => state.routes);

  console.log(routes);
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
      {routes.map((item, index) => (
        <SavedRouteItem key={item.id} routes={item} index={index} />
      ))}
    </div>
  );
};
export default SavedRouteList;
