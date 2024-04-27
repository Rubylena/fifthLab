import { useContext } from "react";
import { UsersContext } from "../../context/UsersContext";
import { UsersContextType } from "../../utils/types/types";
import { IParams } from "../../utils/interface/interface";
import { UserGroupIcon } from "@heroicons/react/20/solid";
import Male from "../../assets/icons/man.png";
import Female from "../../assets/icons/girl.png";

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
      <div>
        <h1 className="font-thin text-xl md:text-3xl">
          Hello
          <span className="font-black">
            , {currentUser ? currentUser?.name?.first : "..."}
          </span>
        </h1>
        <p className="font-thin text-xs">
          {" "}
          Welcome to your dashboard, kindly sort through the user base.
        </p>
      </div>

      <div>
        <div>
          <button
            type="button"
            onClick={returnToBeginning}
            className="rounded bg-pink-600 p-2 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <UserGroupIcon className="h-8 w-8" aria-hidden="true" />
          </button>
          <p>All users</p>
        </div>

        <div>
          <button
            type="button"
            onClick={() => {
              returnToBeginning;
              setGender("male");
            }}
            className="rounded bg-cyan-600 p-2 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <div>
              <img src={Male} alt="male" />
            </div>
          </button>
          <p>Male</p>
        </div>

        <div>
          <button
            type="button"
            onClick={() => {
              returnToBeginning;
              setGender("female");
            }}
            className="rounded bg-violet-600 p-2 text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <div>
              <img src={Female} alt="female" />
            </div>
          </button>
          <p>Female</p>
        </div>
      </div>
    </div>
  );
};

export default ShowUsers;
