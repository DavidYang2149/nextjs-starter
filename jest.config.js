const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

/** @type {import('jest').Config} */
const customJestConfig = {
  setupFilesAfterEnv: [
    'jest-plugin-context/setup',
    '<rootDir>/jest.setup.js'
  ],
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    '^app/(.*)$': '<rootDir>/app/$1',
  },
  testMatch: [
    '**/__tests__/**/*.test.[jt]s?(x)',
    '**/app/**/*.test.[jt]s?(x)',
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/bin/',
    '<rootDir>/coverage/',
    '<rootDir>/cypress/',
    '<rootDir>/.next/',
    '<rootDir>/out/',
    'jest.config.js',
    'next.config.js',
    'cypress.config.ts',
    'postcss.config.js',
    'tailwind.config.js',
    '<rootDir>/app/head.tsx',
    '<rootDir>/app/layout.tsx',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.next/',
    '<rootDir>/out/',
  ],
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig);
