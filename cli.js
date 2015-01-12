#!/usr/bin/env node

var fs = require('fs');
var P = require('bluebird');
P.promisifyAll(fs);

var licedate = require('./');

var file = process.argv[2];
if (!file) file = 'LICENSE.txt';
var path = __dirname + '/' + file;

fs.exists(path, function(res) {
  if (res) return replaceLicense(path);
  path = __dirname + '/LICENSE';
  fs.exists(path, function(ress) {
    if (res) return replaceLicense(path);
    console.error('License file not found! Usage: licedate <file>');
  });
});

function replaceLicense(path) {
  fs.readFileAsync(path).then(function(data) {
    return licedate(data.toString());
  }).then(function(newData) {
    return fs.writeFile(path, newData);
  }).then(function(res) {
    console.log('License updated to current year.');
  }).catch(function() {
    console.error('Could not write license file!');
  });
}
