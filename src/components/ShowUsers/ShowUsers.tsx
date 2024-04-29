import { useContext } from "react";
import { UsersContext } from "../../context/UsersContext";
import { UsersContextType } from "../../utils/types/types";
import { IParams } from "../../utils/interface/interface";
import { UserGroupIcon } from "@heroicons/react/20/solid";
import Male from "../../assets/icons/man.png";
import Female from "../../assets/icons/girl.png";

const ShowUsers = () => {
  const { currentUser, setPaginationParams, setGender } = useContext(UsersContext) as UsersContextType;

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

      <div className="mt-8">
        <h3>Show users</h3>

        <div className="flex flex-wrap justify-center sm:justify-between gap-8 2xl:gap-14 2xl:justify-normal items-center mt-5">
          <div>
            <button
              type="button"
              onClick={returnToBeginning}
              className="rounded-lg bg-pink-500 py-5 px-10 text-white shadow-sm hover:bg-pink-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <UserGroupIcon className="h-8 w-8" aria-hidden="true" />
            </button>
            <p className="text-center">All users</p>
          </div>

          <div>
            <button
              type="button"
              onClick={() => {
                returnToBeginning;
                setGender("male");
              }}
              className="rounded-lg bg-cyan-500 py-5 px-10 text-white shadow-sm hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <div>
                <img src={Male} alt="male" />
              </div>
            </button>
            <p className="text-center">Male</p>
          </div>

          <div>
            <button
              type="button"
              onClick={() => {
                returnToBeginning;
                setGender("female");
              }}
              className="rounded-lg bg-violet-500 py-5 px-10 text-white shadow-sm hover:bg-violet-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <div>
                <img src={Female} alt="female" />
              </div>
            </button>
            <p className="text-center">Female</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowUsers;
