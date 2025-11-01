import useRoutesStore from "@/store/useRoutesStore";
import toast from "react-hot-toast";
const ClearSavedRoutes = () => {
  const clearRoutes = useRoutesStore((state) => state.clearRoutes);

  return (
    <button
      className="underline font-medium rounded-md decoration-accent decoration-3 cursor-pointer hover:text-gray-700"
      onClick={() => {
        clearRoutes();
        toast.success("Alle Routen gelöscht", {
          duration: 3000,
        });
      }}
    >
      Alle Routen löschen
    </button>
  );
};
export default ClearSavedRoutes;
