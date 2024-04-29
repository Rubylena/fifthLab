import { useContext } from "react";
import { countries } from "../../utils/utils";
import Select from "./Select";
import { UsersContext } from "../../context/UsersContext";
import { UsersContextType } from "../../utils/types/types";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchUsers = ({
  searchValue,
  setSearchValue,
}: {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { nat, setNat } = useContext(UsersContext) as UsersContextType;

  return (
    <div className="flex items-center gap-5 xl:gap-8 flex-wrap xl:flex-nowrap">
      <div className="w-full ">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </div>
          <input
            id="search"
            name="search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:outline-none focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
            placeholder="Find in list"
            type="search"
          />
        </div>
      </div>

      <Select data={countries} selected={nat} setSelected={setNat} />
    </div>
  );
};

export default SearchUsers;
