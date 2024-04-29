import { render, fireEvent, screen } from "@testing-library/react";
import { UsersContext } from "../context/UsersContext";
import DownloadUsers from "../components/Download/DownloadUsers";

describe("DownloadUsers", () => {
  it("renders the download button and handles click", () => {
    const downloadUsers = jest.fn();
    const contextValue = {
      downloadUsers,
      downloadUsersLoading: false,
    };
    const fullContextValue = {
      ...contextValue,
      results: [],
      currentUser: null,
      paginationParams: { page: 1, results: 4 },
      setPaginationParams: jest.fn(),
      gender: "",
      setGender: jest.fn(),
      nat: { value: "", name: "" },
      setNat: jest.fn(),
      getUsersLoading: false,
    };

    render(
      <UsersContext.Provider value={fullContextValue}>
        <DownloadUsers />
      </UsersContext.Provider>
    );
    const button = screen.getByRole("button", { name: /download results/i });
    expect(button).not.toBeDisabled();
    fireEvent.click(button);
    expect(downloadUsers).toHaveBeenCalled();
  });

  it("disables the button when downloadUsersLoading is true", () => {
    const contextValue = {
      downloadUsers: jest.fn(),
      downloadUsersLoading: true,
    };

    const fullContextValue = {
      ...contextValue,
      results: [],
      currentUser: null,
      paginationParams: { page: 1, results: 4 },
      setPaginationParams: jest.fn(),
      gender: "",
      setGender: jest.fn(),
      nat: { value: "", name: "" },
      setNat: jest.fn(),
      getUsersLoading: false,
      // Add other missing properties initialized appropriately
    };
    
    render(
      <UsersContext.Provider value={fullContextValue}>
        <DownloadUsers />
      </UsersContext.Provider>
    );

    const button = screen.getByRole("button", { name: /download results/i });
    expect(button).toBeDisabled();
  });
});
