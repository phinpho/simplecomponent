/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  extensionsToTreatAsEsm: ['.ts', '.tsx', '.mts'],
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest", {
      tsconfig: './tsconfig.jest.json',
    }],
  },
};