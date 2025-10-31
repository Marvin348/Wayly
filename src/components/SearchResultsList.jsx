import useTripStore from "@/store/useTripStore";

const SearchResultsList = ({ results, setShowDropdown }) => {
  const handleSelect = useTripStore((state) => state.handleSelect);

  return (
    <div className="absolute top-full left-0 w-full h-auto bg-white shadow-md rounded-md mt-2 z-10">
      {results.map((item) => (
        <div
          className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100"
          key={item.id}
          onClick={() => {
            handleSelect(item);
            setShowDropdown(false);
          }}
        >
          <p className="font-semibold">{item.name}</p>
          <p>{`(${item.country})`}</p>
        </div>
      ))}
    </div>
  );
};
export default SearchResultsList;
