var request = require('request'),
    map = require('map-async'),
    semver = require('semver'),
    baseURL = 'http://registry.npmjs.org/',
    cache = {},
    hasOwnProp = Object.prototype.hasOwnProperty;

'use strict';

var findVersion = function(pkgData, version) {
    if (!pkgData['versions']) return null;

    var versions = Object.keys(pkgData['versions']), v;

    if (version == 'latest') {
        return pkgData['versions'][versions.pop()]['dependencies'];
    }

    while (v = versions.pop()) {
        if (semver.satisfies(v, version)) return pkgData['versions'][v]['dependencies'];
    }

    return null;
};

var getPackageDeps = function(pkg, callback) {
    var pkg = pkg.split('@'),
        name = pkg[0],
        version = pkg[1] || 'latest';

    if (name in cache && !!cache[name]) {
        return callback(null, findVersion(cache[name], version));
    }

    request.get(baseURL + name, function(error, response, body) {
        if (error && response.statusCode !== 200) return callback(error);
        
        var data = JSON.parse(body);
        cache[name] = data;

        callback(null, findVersion(data, version));
    });
};

var getPackageDepsTree = function(pkg, callback) {
    var tree = {};

    var getInfo = function(pkgArr, callback) {
        getPackageDeps(pkgArr[1], function(err, res) {
            if (err) return callback();

            var deps = [], name;

            for (var i in res) {
                 if (hasOwnProp.call(res, i)) {
                    name = i + '@' + res[i];
                    deps.push([pkgArr[0][name] = {}, name]);
                }
            }

            if (deps.length > 0) {
                map(deps, getInfo, callback);
            } else {
                callback();
            }
        });
    };

    if (Array.isArray(pkg)) {
        var depsArr = [];
        for (var i = 0; i < pkg.length; i++) {
            depsArr.push([tree[pkg[i]] = {}, pkg[i]]);
        }
        map(depsArr, getInfo, function() {
            callback(tree);
        });
    } else {
        getInfo([tree[pkg] = {}, pkg], function() {
            callback(tree);
        });
    }
};

var printTree = function(tree) {
    if (Object.keys(tree).length === 0) {
        return console.log('No information found.');
    }

    var colors = {
        BLUE: '\033[36m ',
        GREEN: '\033[32m ',
        DEFAULT: '\033[0m '
    };

    var printLevel = function(treeNode, pkgName, depth) {
        depth = depth || 0;

        var line = colors.BLUE, i,
            pkg = pkgName.split('@'), 
            name = pkg[0], 
            version = pkg[1] || 'latest';

        for (i = 0; i < depth; i++) {
            line += ' | ';
        }
        line += colors.DEFAULT;

        console.log(line + name + colors.GREEN + '@' + version + colors.DEFAULT);

        Object.keys(treeNode).forEach(function(node) {
            printLevel(treeNode[node], node, depth + 1);
        });
    };

    for (var i in tree) {
        if (hasOwnProp.call(tree, i)) {
            printLevel(tree[i], i);
        }
    }
};

module.exports.getPackageDeps = getPackageDeps;
module.exports.getPackageDepsTree = getPackageDepsTree;
module.exports.printTree = printTree;
