var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function (err, files) {
  if (err) return console.log(err);
  var filtered = files.filter(function(file) { return path.extname(file) == '.' + process.argv[3]; });
  for(var file of filtered) { console.log(file); }
});
