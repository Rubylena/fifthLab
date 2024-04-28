import { useContext } from "react";
import { UsersContext } from "../../context/UsersContext";
import { UsersContextType } from "../../utils/types/types";
import { IParams } from "../../utils/interface/interface";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const Pagination = () => {
  const { paginationParams, setPaginationParams } = useContext(
    UsersContext
  ) as UsersContextType;

  const previousPage = () => {
    setPaginationParams((prev: IParams) => ({
      ...prev,
      page: paginationParams?.page - 1,
    }));
  };

  const nextPage = () => {
    setPaginationParams((prev: IParams) => ({
      ...prev,
      page: paginationParams.page + 1,
    }));
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={previousPage}
        disabled={paginationParams.page === 1}
        className="bg-mainBg text-white shadow disabled:bg-gray-300 rounded-lg p-2"
      >
        <ChevronLeftIcon className="h-5 w-5" />
      </button>

      <button onClick={nextPage} className="bg-mainBg shadow rounded-lg p-2">
        <ChevronRightIcon className="h-5 w-5 text-white" />
      </button>
    </div>
  );
};

export default Pagination;
