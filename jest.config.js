module.exports = {
  coverageDirectory: "coverage",
  collectCoverage: false,
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/src/**/*mock*.{js,jsx,ts,tsx}",
    "!<rootDir>/src/styles/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/src/config/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/src/pages/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/**/stories.{js,jsx,ts,tsx}",
    "!<rootDir>/node_modules/",
  ],
  testEnvironment: "jsdom",
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test|tests).[tj]s?(x)",
  ],
  testPathIgnorePatterns: ["/node_modules/", "/.next/", "/.out/", "/public/"],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/file-mock.js",
  },
  // setupFilesAfterEnv: ["<rootDir>/.jest/setup-tests.js"],
  // transform: {
  //   // '\\.tsx?$': 'ts-jest',
  //   "\\.jsx?$": "babel-jest",
  // },
};
