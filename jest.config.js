import preset from "ts-jest/presets/index.js";

/** @type {import('ts-jest').JestConfigWithTsJest} */
const config = {
  ...preset.defaultsESM,
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "./tsconfig.json",
        useESM: true,
      },
    ],
  },
  testEnvironment: "jest-environment-jsdom",

  moduleNameMapper: {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/test/mocks/fileMock.ts",
    "\\.(css|less)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>/src/test/setupTests.ts"],
  clearMocks: true,

  // collectCoverage: true,
  // coverageDirectory: "coverage",
  // coverageProvider: "v8",
};

export default config;
