module.exports = {
	verbose: false,
	rootDir: '../../',
	collectCoverageFrom: [
		'<rootDir>/src/**/*.{js,jsx,mjs}',
		'!**/node_modules/**',
	],
	coveragePathIgnorePatterns: [
		'node_modules',
		'.styled.jsx',
		'__integrationTests__',
		'__testHelpers__',
		'__ajaxHandlers__',
	],
	setupFilesAfterEnv: [
		'@testing-library/jest-dom',
		'<rootDir>/config/jest/setupTests.js',
	],
	testMatch: ['<rootDir>/src/**/__tests__/**/*.{js,jsx}'],
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
		'.+\\.(png|jpg)$': 'jest-transform-stub',
	},
	transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
	moduleFileExtensions: ['js', 'jsx'],
	moduleNameMapper: {
		'^__ajaxHandlers__(.*)$': '<rootDir>/src/__ajaxHandlers__$1',
		'^components(.*)$': '<rootDir>/src/js/components$1',
		'^hooks(.*)$': '<rootDir>/src/js/hooks$1',
		'^js\\/(.*)$': '<rootDir>/src/js/$1',
		'^__testHelpers__(.*)$': '<rootDir>/src/__testHelpers__$1',
	},
	testPathIgnorePatterns: [
		'/node_modules/',
		'__config__',
		'__helpers__',
		'__mocks__',
		'__testData__',
		'__testHelpers__',
		'__ajaxHandlers__',
	],
};
