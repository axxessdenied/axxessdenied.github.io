// jest.config.js
//Sync object

var path = require('path');
var BUILD_DIR = path.resolve(__dirname, './dist');
var APP_DIR = path.resolve(__dirname, './src');
module.exports = {
    verbose: true,
    collectCoverageFrom: ["src/**/*.{js,jsx,mjs}"],
    testMatch: ["<rootDir>/src/**/__tests__/**/*.{js,jsx,mjs}", "<rootDir>/src/**/?(*.)(spec|test).{js,jsx,mjs}"],
    roots: [path.resolve(__dirname)],
    modulePaths: [path.resolve(__dirname)],
    rootDir: path.resolve(__dirname),
};

//Or async function
// module.exports = async () => {
//     return {
//         verbose: true,
//         collectCoverageFrom: ["src/**/*.{js,jsx,mjs}"],
//         testMatch: ["<rootDir>/src/**/__tests__/**/*.{js,jsx,mjs}", "<rootDir>/src/**/?(*.)(spec|test).{js,jsx,mjs}"],
//         roots: [path.resolve(__dirname)],
//         modulePaths: [path.resolve(__dirname)],
//         rootDir: path.resolve(__dirname),
//     };
// };