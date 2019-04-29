var walkDirSync = function(dir, folderlist) {
    var fs = fs || require('fs'),
        files = fs.readdirSync(dir);
    folderlist = folderlist || [];
    files.forEach(function(file) {
      if (fs.statSync(dir + file).isDirectory()) {
        folderlist.push(file);
      }
    });
    return folderlist;
  };

module.exports = walkDirSync;