import preset from "ts-jest/presets/index.js";

/** @type {import('ts-jest').JestConfigWithTsJest} */
const jestConfig = {
  ...preset.defaultsESM,
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "./tsconfig.json",
        useESM: true,
        isolatedModules: true,
      },
    ],
  },
  transformIgnorePatterns: ["node_modules/(?!(vite|@vite))"],
  testEnvironment: "jest-environment-jsdom",
  // moduleNameMapper: {
  //   "^.+\\.svg$": "jest-svg-transformer",
  //   "^.+\\.(css|less|scss)$": "identity-obj-proxy",
  // },
  // moduleNameMapper: {
  //   "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
  //     "<rootDir>/mocks/fileMock.js",
  //   "\\.(css|less)$": "<rootDir>/mocks/fileMock.js",
  // },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "identity-obj-proxy",
  },
  // setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
};

export default jestConfig;
