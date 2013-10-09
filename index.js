#!/usr/bin/env node

var program = require('commander'),
    utils = require('./utils');

program
  .version('0.1.0')
  .option('-p, --package <name>', 'Name of package')
  // .option('-d, --depth <n>', 'Depth', parseInt)
  .parse(process.argv);

if (program.package) {
  console.log('Getting info about package...\n');
  utils.getPackageInfo(program.package, function() {
    utils.print(program.package, 0);
  });  
} else {
  console.log('Please, specify package name.')
  console.log('Try `describe --help` for more information.')
}
