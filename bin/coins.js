#!/usr/bin/env node
const program = require('commander');

program
 .version('pkg.version')
 .command('key', 'Manage API Key -- https://nomics.com')
 command('check', 'check Coin Price Info')
 .parse(process.argv);

console.log('Hello from coins');
//console.log(process.argv)