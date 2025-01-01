module.exports = {
  testEnvironment: 'node',
  roots: ['__tests__'],
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  testRegex: '.*\\.test\\.js$',
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  verbose: true
};