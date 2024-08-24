import { Auth } from "@/components/auth";
import { SearchIcon } from "lucide-react";
import React from "react";
import Categories from "./categories";

const categories = [
  {
    name: "All",
    value: "All",
  },
  {
    name: "Youtube",
    value: "Youtube",
  },
  {
    name: "Instagram",
    value: "Instagram",
  },
  {
    name: "Tiktok",
    value: "Tiktok",
  },
  {
    name: "Linkedin",
    value: "Linkedin",
  },
  {
    name: "Tweet",
    value: "Tweet",
  },
];

const SearchDashboard = ({
  onSearchInput,
}: {
  onSearchInput: React.Dispatch<React.SetStateAction<string | undefined>>;
}) => {
  return (
    <div className="mx-5 py-2">
      <div className="flex flex-col md:flex-row gap-2 mt-5 py-6 px-4 bg-white rounded">
        {/* Search Bar */}
        <div className="flex gap-2 items-center p-2 border rounded-full bg-white w-full md:w-[40%]">
          <SearchIcon className="w-6 h-6" />
          <input
            type="text"
            placeholder="Search ..."
            className="bg-transparent outline-none text-black w-full"
            onChange={(e) => onSearchInput(e.target.value)}
          />
        </div>

        {/* Categories */}
        <div className="mt-4 md:mt-0 md:ml-2 w-full md:w-auto flex justify-center md:justify-start">
          <Categories items={categories} />
        </div>

        {/* Auth Section */}
        <div className="mt-4 md:mt-0 md:ml-auto w-full md:w-auto flex justify-end">
          <Auth />
        </div>
      </div>
    </div>
  );
};

export default SearchDashboard;
