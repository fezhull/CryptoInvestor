const configstore = require('configstore');

class KeyManager {
    constructor (){
        this.conf = new configstore(pkg.name);
    }
    setKey(key) {
        this.conf.set('apiKey', key);
        return key;
    }
        getKey() {
            const key = this.conf.get('apiKey');
        }
    }
