import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "../App";
import { UsersProvider } from "../context/UsersContext";
import { setupBeforeEach, setupAfterEach } from "./setupTests";

setupBeforeEach();
setupAfterEach();

describe("App Component", () => {
  it("renders without crashing", () => {
    render(
      <UsersProvider>
        <App />
      </UsersProvider>
    );
    // Expectations can be added here based on your component's rendering
  });
});
