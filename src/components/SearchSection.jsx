import { useState } from "react";
import Searchbar from "@/components/Searchbar";
import SearchHeader from "@/components/SearchHeader";

const SearchSection = () => {
  const [isSearching, setIsSearching] = useState(false);

  return (
    <div className="p-8">
      <div className={`${isSearching ? "hidden md:block" : "block"}`}>
        <SearchHeader />
      </div>
      <Searchbar setIsSearching={setIsSearching} />
    </div>
  );
};
export default SearchSection;
