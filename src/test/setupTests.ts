import "@testing-library/jest-dom";


// Mock react-toastify
jest.mock("react-toastify", () => ({
  ToastContainer: jest.fn(),
}));

export const setupBeforeEach = () => {
  beforeEach(() => {
    // Any setup needed for your component
    jest.resetAllMocks();
  });
};

export const setupAfterEach = () => {
  afterEach(() => {
    // Clean up any mocks after each test
    jest.clearAllMocks();
  });
};
