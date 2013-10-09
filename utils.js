var db = require('nano')('http://isaacs.iriscouch.com/registry'),
    async = require('async'),
    tree = {},
    colors = {
      BLUE: '\033[36m ',
      GREEN: '\033[32m ',
      DEFAULT: '\033[0m '
    };

var getPackageInfo = function(name, callback) {
  if (name in tree) return callback();

  db.get(name, function(err, data) {
    if (err) return callback();

    var latest = Object.keys(data['versions']).pop();
    var deps = Object.keys( data['versions'][latest]['dependencies'] || {} );

    // console.log(name + '@' + latest);

    tree[name] = {
      'version': latest,
      'dependencies': deps
    };
    
    if (deps.length > 0) {
      async.map(deps, getPackageInfo, callback);
    } else {
      callback();
    }
  });
};

var print = function(pkgName, depth) {
  var pkg = tree[pkgName], line = colors.BLUE, i, max;

  for (i = 0; i < depth; i++) {
    line += ' | ';
  }
  line += colors.DEFAULT;
  console.log(line + pkgName + colors.GREEN + '@' + pkg.version + colors.DEFAULT);

  if (pkg.dependencies.length > 0) {
    for (i = 0, max = pkg.dependencies.length; i < max; i++) {
      print(pkg.dependencies[i], depth+1);
    }
  }
};

module.exports = {
  tree: tree,
  print: print,
  getPackageInfo: getPackageInfo
};
