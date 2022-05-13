const inquirer = require('inquirer');
const colors = require('colors')
const KeyManager = require('../lib/KeyManager');
const { isRequired } = require('../utils/validation');

const key = {
    set(){
        const KeyManager = new KeyManager();
        const input = await inquirer.prompt([
            {
                type: 'input',
                name:'key',
                message: 'Enter API Key '.green + 'https://nomics.com',
                validate: isRequired
            }
        ]);
        const key = KeyManager.setKey(input.key);

        if(key) {
            console.log('API Key Set'.blue)
        }
    },
    show() {
        try {
            const KeyManager = new KeyManager();
            const key = KeyManager.getKey();

            console.log('Current API Key: ', key.yellow);
            

            return key;
        }catch (err) {
            console.error(err.message.red);
        }
        
    },

    remove(){
        try {
            const KeyManager = new KeyManager();
            KeyManager.deleteKey();

            console.log('Key Removed' .blue);
            

            return key;
        }catch (err) {
            console.error(err.message.red);
        }
    }

};
module.exports = key;