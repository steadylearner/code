module.exports = {
  verbose: true,
  setupFilesAfterEnv: ["<rootDir>/src/__tests__/setup/setupTests.js"],
  testPathIgnorePatterns: [
      "<rootDir>/src/__tests__/setup/"
  ],
}
