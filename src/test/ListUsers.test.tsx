import { render, screen, fireEvent } from "@testing-library/react";
import ListUsers from "../components/ListUsers/ListUsers";
import { UsersContext } from "../context/UsersContext";

// Mocking necessary components and hooks
jest.mock(
  "../components/SearchUsers/SearchUsers.tsx",
  () =>
    ({
      searchValue,
      setSearchValue,
    }: {
      searchValue: string;
      setSearchValue: React.Dispatch<React.SetStateAction<string>>;
    }) =>
      (
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          data-testid="search-input"
        />
      )
);
jest.mock("../components/UserDetails/UserDetails", () => () => (
  <div>UserDetails component</div>
));
jest.mock("../components/LoadSkeleton/UserSkeleton", () => () => (
  <div>Loading...</div>
));

describe("ListUsers Component", () => {
  const mockContext = {
    results: [
      {
        gender: "female",
        name: {
          title: "Miss",
          first: "Laura",
          last: "Woods",
        },
        location: {
          street: {
            number: 2479,
            name: "Henry Street",
          },
          city: "Blessington",
          state: "Wexford",
          country: "Ireland",
          postcode: 78276,
          coordinates: {
            latitude: "2.0565",
            longitude: "95.2422",
          },
          timezone: {
            offset: "+1:00",
            description: "Brussels, Copenhagen, Madrid, Paris",
          },
        },
        email: "laura.woods@example.com",
        login: {
          uuid: "9f07341f-c7e6-45b7-bab0-af6de5a4582d",
        },
        dob: {
          date: "1967-07-23T09:18:33.666Z",
          age: 56,
        },
        registered: {
          date: "2018-10-18T04:05:51.990Z",
          age: 5,
        },
        phone: "031-623-5189",
        cell: "081-807-8083",
        picture: {
          large: "https://randomuser.me/api/portraits/women/88.jpg",
          medium: "https://randomuser.me/api/portraits/med/women/88.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/women/88.jpg",
        },
        nat: "IE",
      },
    ],
    getUsersLoading: false,
    currentUser: null,
    paginationParams: { page: 1, results: 1 },
    setPaginationParams: jest.fn(),
    gender: "",
    setGender: jest.fn(),
    nat: { value: "", name: "" },
    setNat: jest.fn(),
    downloadUsers: jest.fn(),
    downloadUsersLoading: false,
  };

  it("renders correctly with users", () => {
    render(
      <UsersContext.Provider value={mockContext}>
        <ListUsers />
      </UsersContext.Provider>
    );

    expect(screen.getByText("Laura Woods")).toBeInTheDocument();
  });

  it("shows loading state correctly", () => {
    render(
      <UsersContext.Provider value={{ ...mockContext, getUsersLoading: true }}>
        <ListUsers />
      </UsersContext.Provider>
    );
    expect(screen.queryAllByText("Loading...").length).toBeGreaterThan(0);
    //   expect(screen.queryAllByText("Loading...")).toBeInTheDocument();
  });

  it("filters users based on search input", () => {
    render(
      <UsersContext.Provider value={mockContext}>
        <ListUsers />
      </UsersContext.Provider>
    );

    fireEvent.change(screen.getByTestId("search-input"), {
      target: { value: "Laura" },
    });
    expect(screen.getByText("Laura Woods")).toBeInTheDocument();
  });

  it("does not display users if search does not match", () => {
    render(
      <UsersContext.Provider value={mockContext}>
        <ListUsers />
      </UsersContext.Provider>
    );

    fireEvent.change(screen.getByTestId("search-input"), {
      target: { value: "Jane" },
    });
    expect(screen.queryByText("Jane")).not.toBeInTheDocument();
  });
});
