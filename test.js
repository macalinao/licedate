var expect = require('chai').expect;
var fs = require('fs');
var licedate = require('./');

describe('licedate', function() {

  it('should not filter current date', function(done) {
    fs.readFile(__dirname + '/fixtures/bsd3-current.txt', function(err, data) {
      var res = licedate(data.toString(), 2015);
      fs.readFile(__dirname + '/fixtures/bsd3-current.txt', function(err, data) {
        expect(res).to.equal(data.toString());
        done();
      });
    });
  });

  it('should filter a date correctly', function(done) {
    fs.readFile(__dirname + '/fixtures/bsd3.txt', function(err, data) {
      var res = licedate(data.toString(), 2015);
      fs.readFile(__dirname + '/fixtures/bsd3.updated.txt', function(err, data) {
        expect(res).to.equal(data.toString());
        done();
      });
    });
  });

  it('should filter a date range correctly', function(done) {
    fs.readFile(__dirname + '/fixtures/bsd3-range.txt', function(err, data) {
      var res = licedate(data.toString(), 2015);
      fs.readFile(__dirname + '/fixtures/bsd3-range.updated.txt', function(err, data) {
        expect(res).to.equal(data.toString());
        done();
      });
    });
  });

});
