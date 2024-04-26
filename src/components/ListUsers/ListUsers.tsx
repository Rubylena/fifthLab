import { useContext, useState } from "react";
import SearchUsers from "../SearchUsers/SearchUsers";
import UserDetails from "../UserDetails/UserDetails";
import Toggler from "./Toggle";
import { UsersContext } from "../../context/UsersContext";
import { UsersContextType } from "../../utils/types/types";
import { useDebounce } from "../../hooks/useDebounce";

const ListUsers = () => {
  const { results, getUsersLoading } = useContext(
    UsersContext
  ) as UsersContextType;
  const [userUuid, setUserUuid] = useState("");
  const [showCountry, setShowCountry] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  const debouncedSearch = useDebounce(searchValue, 500);

  const filteredUsers =
    debouncedSearch === ""
      ? results
      : results?.filter((user) => {
          return user?.name?.first
            ?.toLowerCase()
            .includes(debouncedSearch.toLowerCase());
        });

  return (
    <div>
      <SearchUsers searchValue={searchValue} setSearchValue={setSearchValue} />
      <div>
        <Toggler enabled={showCountry} setEnabled={setShowCountry} />
        <p>Show Country</p>
      </div>

      <div>
        {getUsersLoading
          ? "loading"
          : filteredUsers && filteredUsers?.length > 0
          ? filteredUsers?.map((user) => (
              <div
                key={user?.login?.uuid}
                className="flex gap-1"
                onClick={() => setUserUuid(user?.login?.uuid)}
              >
                <p>{user?.name?.first}</p>
                <p>{user?.gender}</p>
                <p>{showCountry && user?.location?.country}</p>
              </div>
            ))
          : "No data"}
      </div>
      <UserDetails uuid={userUuid} />
    </div>
  );
};

export default ListUsers;
