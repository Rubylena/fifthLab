import { useContext } from "react";
import { UsersContext } from "../../context/UsersContext";
import { UsersContextType } from "../../utils/types/types";
import { IParams } from "../../utils/interface/interface";
// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

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
    <div>
      <button
        onClick={previousPage}
        disabled={paginationParams.page === 1}
        className="border disabled:opacity-50"
      >
        Previous
      </button>
      {/* <ChevronLeftIcon />
      <ChevronRightIcon /> */}
      <button onClick={nextPage}>Next</button>
    </div>
  );
};

export default Pagination;
