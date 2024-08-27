import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "../components/Pagination/Pagination";
import { UsersContext } from "../context/UsersContext";

describe("Pagination Component", () => {
  const setPaginationParams = jest.fn();

  const wrapper = ({ children }: any) => (
    <UsersContext.Provider
      value={{
        paginationParams: { page: 2, results: 2 },
        setPaginationParams,
      }}
    >
      {children}
    </UsersContext.Provider>
  );

  it("renders pagination buttons", () => {
    render(<Pagination />, { wrapper });
    expect(screen.getByRole("button", { name: "" })).toBeInTheDocument();
  });

  it("calls setPaginationParams with next page on next button click", () => {
    render(<Pagination />, { wrapper });
    fireEvent.click(screen.getByRole("button", { name: /right/i }));
    expect(setPaginationParams).toHaveBeenCalledWith(expect.any(Function));
    expect(setPaginationParams.mock.calls[0][0]({ page: 2 })).toEqual({
      page: 3,
    });
  });

  it("calls setPaginationParams with previous page on previous button click", () => {
    render(<Pagination />, { wrapper });
    fireEvent.click(screen.getByRole("button", { name: /left/i }));
    expect(setPaginationParams).toHaveBeenCalledWith(expect.any(Function));
    expect(setPaginationParams.mock.calls[0][0]({ page: 2 })).toEqual({
      page: 1,
    });
  });

  it("disables previous button on first page", () => {
    render(
      <UsersContext.Provider
        value={{
          paginationParams: { page: 1 },
          setPaginationParams,
        }}
      >
        <Pagination />
      </UsersContext.Provider>
    );
    const prevButton = screen.getByRole("button", { name: /left/i });
    expect(prevButton).toBeDisabled();
  });
});
