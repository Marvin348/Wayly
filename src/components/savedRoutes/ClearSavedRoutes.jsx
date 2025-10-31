import useRoutesStore from "@/store/useRoutesStore";
const ClearSavedRoutes = () => {
  const clearRoutes = useRoutesStore((state) => state.clearRoutes);

  return (
    <button
      className="underline font-medium rounded-md decoration-accent decoration-3 cursor-pointer hover:text-gray-700"
      onClick={() => clearRoutes()}
    >
      Alle Routen löschen
    </button>
  );
};
export default ClearSavedRoutes;
