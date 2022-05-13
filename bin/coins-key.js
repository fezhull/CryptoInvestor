const program = require('commander');
const key = require('../commands/key');

program
      .Command('set')
      .description('Set API Key -- Get at https://nomics.com')
      .action(key.set);

program
      .Command('show')
      .description('Show API Key')
      .action(key.show);

program
      .Command('remove')
      .description('Remove API Key')
      .action(key.remove);



program.parse(process.argv);
    