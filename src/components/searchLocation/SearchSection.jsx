import { useState } from "react";
import Searchbar from "@/components/searchLocation/Searchbar";
import SearchHeader from "@/components/searchLocation/SearchHeader";

const SearchSection = () => {
  const [isSearching, setIsSearching] = useState(false);

  return (
    <div className="p-8">
      <div className={`${isSearching ? "hidden md:block" : "block"}`}>
        <SearchHeader />
      </div>
      <Searchbar onSearch={() => setIsSearching(true)} />
    </div>
  );
};
export default SearchSection;
