import type { Config } from 'jest';

const config: Config = {
  globals: {
    __DEV__: true,
  },
  roots: ['<rootDir>/src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native(-.*)?|@react-native(- community)?|@infra-market?)/)',
  ],
  testEnvironment: 'node',
  modulePaths: ['node_modules', '<rootDir>/src'],
  setupFiles: ['./test-setup.js'],
  modulePathIgnorePatterns: ['<rootDir>/example/node_modules', '<rootDir>/lib/'],
  collectCoverageFrom: ['src/**/*.{tsx,ts,jsx,jsx}'],
  coverageThreshold: {
    global: {
      lines: 30,
      functions: 30,
      branches: 30,
    },
  },
  collectCoverage: true,
  coverageProvider: 'v8',
  coverageReporters: ['text'],
  verbose: true,
};
export default config;
