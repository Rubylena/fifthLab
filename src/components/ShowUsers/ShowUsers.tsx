import { useContext } from "react";
import { UsersContext } from "../../context/UsersContext";
import { UsersContextType } from "../../utils/types/types";
import { IParams } from "../../utils/interface/interface";

const ShowUsers = () => {
  const { currentUser, setPaginationParams, setGender } = useContext(
    UsersContext
  ) as UsersContextType;

  const returnToBeginning = () => {
    setPaginationParams((prev: IParams) => ({
      ...prev,
      page: 1,
    }));
  };

  return (
    <div>
      <p>
        Hello <span>, {currentUser ? currentUser?.name?.first : "..."}</span>
      </p>

      <p onClick={returnToBeginning}>All users</p>
      <p
        onClick={() => {
          returnToBeginning;
          setGender("male");
        }}
      >
        Male
      </p>
      <p
        onClick={() => {
          returnToBeginning;
          setGender("female");
        }}
      >
        Female
      </p>
    </div>
  );
};

export default ShowUsers;
