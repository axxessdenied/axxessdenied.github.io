var path = require('path');
var BUILD_DIR = path.resolve(__dirname, './dist');
var APP_DIR = path.resolve(__dirname, './src');

const configDirs = {
  BUILD_DIR: BUILD_DIR,
  APP_DIR: APP_DIR
}

function buildConfig(env) {
    let environment = process.env.NODE_ENV || env;
    console.log("loading environment: " + environment);
    return require('./config/' + environment + '.js')(configDirs);
}
module.exports = buildConfig;