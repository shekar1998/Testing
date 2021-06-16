module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns : [
    "<rootDir>/bin/"
  ]//igonre the files present in this folder
};