import { useContext, useState } from "react";
import SearchUsers from "../SearchUsers/SearchUsers";
import UserDetails from "../UserDetails/UserDetails";
import Toggler from "./Toggle";
import { UsersContext } from "../../context/UsersContext";
import { UsersContextType } from "../../utils/types/types";
import { useDebounce } from "../../hooks/useDebounce";
import {
  EnvelopeIcon,
  PhoneArrowDownLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import "./listUsers.css";
import DownloadUsers from "../../components/Download/DownloadUsers";
import Pagination from "../../components/Pagination/Pagination";
import UserSkeleton from "../LoadSkeleton/UserSkeleton";

const ListUsers = () => {
  const { results, getUsersLoading } = useContext(
    UsersContext
  ) as UsersContextType;
  const [userUuid, setUserUuid] = useState("");
  const [showCountry, setShowCountry] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [openDetails, setOpenDetails] = useState(false);

  const debouncedSearch = useDebounce(searchValue, 500);

  const filteredUsers =
    debouncedSearch === ""
      ? results
      : results?.filter((user) => {
          return (
            user?.name?.first
              ?.toLowerCase()
              .includes(debouncedSearch.toLowerCase()) ||
            user?.name?.last
              ?.toLowerCase()
              .includes(debouncedSearch.toLowerCase())
          );
        });

  return (
    <div className="relative h-full">
      <div className="sticky top-0 z-10 bg-white bg-opacity-75 backdrop-blur backdrop-filter">
        <h3 className="font-bold text-2xl">All Users</h3>
        <p className="text-xs">Search by user name and country</p>
        <div
          className="
      mt-2 flex items-center gap-5 xl:gap-10 flex-wrap xl:flex-nowrap"
        >
          <SearchUsers
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <div className="flex items-center gap-2">
            <Toggler enabled={showCountry} setEnabled={setShowCountry} />
            <p>Show Country</p>
          </div>
        </div>
      </div>
      <div
        className={`relative h-[22rem] mt-4 pr-3 scrollbar-container overflow-y-auto`}
      >
        {getUsersLoading ? (
          <div className="flex flex-col gap-3">
            {Array(2)
              .fill(0)
              .map((_, index) => (
                <UserSkeleton key={index} />
              ))}
          </div>
        ) : filteredUsers && filteredUsers?.length > 0 ? (
          <div className="flex flex-col gap-3">
            {filteredUsers?.map((user) => (
              <div
                className="flex justify-between items-end w-full p-4 bg-white border border-gray-200 rounded-lg shadow-md drop-shadow sm:p-8"
                key={user?.login?.uuid}
                onClick={() => setUserUuid(user?.login?.uuid)}
              >
                <div className="flex items-center gap-10">
                  <img
                    className="inline-block h-16 w-16 rounded-full border-4 border-cyan-400"
                    src={user?.picture?.thumbnail}
                    alt=""
                  />

                  <div>
                    <p className="text-xl font-bold">
                      {user?.name?.first} {user?.name?.last}
                    </p>
                    <p className="text-xs italic">
                      {user?.location?.postcode} {user?.location?.city}{" "}
                      {user?.location?.state}
                      <span>
                        {showCountry && `, ${user?.location?.country}`}
                      </span>
                    </p>

                    <div className="flex justify-between gap-3 items-center mt-4 text-gray-500">
                      <div className="flex items-center gap-2">
                        <EnvelopeIcon className="h-5 w-5" />
                        <p>{user?.email}</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <PhoneArrowDownLeftIcon className="h-5 w-5" />
                        <p>{user?.cell}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  className="py-3 px-5 bg-cyan-400 hover:bg-cyan-300 shadow rounded-lg"
                  onClick={() => setOpenDetails(true)}
                >
                  <ArrowRightIcon className="h-5 w-5 text-white" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="h-full flex justify-center items-center ">
            No data available
          </div>
        )}
      </div>

      <UserDetails
        uuid={userUuid}
        open={openDetails}
        setOpen={setOpenDetails}
      />

      <div className="mt-4 flex gap-3 justify-between items-center flex-wrap">
        <DownloadUsers />
        <Pagination />
      </div>
    </div>
  );
};

export default ListUsers;
