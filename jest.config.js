const nextJest = require('next/jest')

const createJestConfig = nextJest(
   {
      dir: './',
       // Indicates whether the coverage information should be collected while executing the test
      collectCoverage: true,
      // The directory where Jest should output its coverage files
      coverageDirectory: 'jest-coverage',
      // The test environment that will be used for testing
      testEnvironment: 'node'
   }
)

const customJestConfig = {
   moduleDirectories: ['node_modules', '<rootDir>/'],
   testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig);
