module.exports = function licedate(license, year) {
  year = year || (new Date()).getFullYear();
  license = license
    // Single date
    .replace(/\(([C|c])\) (\d{4})(?!-)/g, function(match, symbol, date) {
      if (date == year) return '(' + symbol + ') ' + date;
      return '(' + symbol + ') ' + date + '-' + year;
    })
    // Date range
    .replace(/\(([C|c])\) (\d{4})-\d{4}/g, function(match, symbol, date) {
      return '(' + symbol + ') ' + date + '-' + year;
    });

  return license;
};
