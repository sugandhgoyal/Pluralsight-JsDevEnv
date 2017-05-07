//this file isn't transpiled so must use commonjs and ES5
//register babel to transpile before our test runs

require('babel-register')();

//Disable webpack features that mocha doesn't understand
require.extensions['.css'] = function() {};
