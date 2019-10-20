// @doc https://jestjs.io/docs/en/configuration.html

module.exports = {
	verbose: true,
	clearMocks: false,
	reporters: ['default'],
	moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
	moduleDirectories: ['node_modules'],
	globals: {
		'ts-jest': {
			tsConfig: 'tsconfig.test.json'
		}
	},
	// 测试覆盖率
	collectCoverage: true,
	collectCoverageFrom: ['{lib,include}/**/*.{tsx,ts}', '!**/node_modules/**'],
	coverageDirectory: 'coverage', // 测试覆盖率生成指定目录
	coverageReporters: ['text', 'lcov'], // 指定测试覆盖率生成的theme
	// end 测试覆盖率
	moduleNameMapper: {},
	testMatch: ['<rootDir>/**/__tests__/**/*.unit.(js|jsx|ts|tsx)'],
	transform: {
		'^.+unit\\.(js|jsx)$': 'babel-jest',
		'^.+\\.(ts|tsx)$': 'ts-jest'
	},
	setupFilesAfterEnv: ['<rootDir>test/setupTests.js'],
	snapshotSerializers: ['enzyme-to-json/serializer']
};
