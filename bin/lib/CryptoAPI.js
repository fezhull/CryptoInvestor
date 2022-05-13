const axios = require('axios');
const colors = require('colors');

class CryptoAPI {
    constructor(apiKey){
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.nomics.com/v1/currencies/ticker';
    }
    async getPriceData(coinOption, curOption){
        try {

            //formatter for currency
            const formatter = new Intl.NumberFormat('en-Us', {
                style: 'currency',
                currency: curOption
            });
            const res = await axios.get(`${this.baseUrl}?key=${this.apiKey}&ids=${coinOption}&convert=${curOption}`);
            let output = '';

            res.data.forEach(coin => {
                output += `Coin: ${coin.symbol.yellow} (${coin.name}) | Price: ${formatter.format (coin.price). green} | Rank: ${coin.rank.blue}\n`;
            });
            return output;

        }catch (err){
            handleAPIError(err);
        }
    }
}

function handleAPIError(err) {
    if(err.response.status === 401){
        throw new Error('your API key is invalid - Go to Https://nomics.com');
    }else if (err.response.status ===404){
        throw new Error('your API key is not responding');
    }else{
        throw new Error('something is wrong')
    }
}

module.exports =CryptoAPI;