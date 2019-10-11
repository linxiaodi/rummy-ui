// @doc https://jestjs.io/docs/en/configuration.html

module.exports = {
	verbose: true,
	clearMocks: false,
	collectCoverage: false,
	reporters: ["default"],
	moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
	moduleDirectories: ['node_modules'],
	globals: {
		'ts-jest': {
			tsConfig: 'tsconfig.test.json',
		},
	},
	moduleNameMapper: {
	},
	testMatch: ['<rootDir>/**/__tests__/**/*.unit.(js|jsx|ts|tsx)'],
	transform: {
		"^.+unit\\.(js|jsx)$": "babel-jest",
		'^.+\\.(ts|tsx)$': 'ts-jest',
	},
	setupFilesAfterEnv: ["<rootDir>test/setupTests.js"],
	snapshotSerializers: ["enzyme-to-json/serializer"],
}
