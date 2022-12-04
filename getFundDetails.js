const axios = require('axios');

const getFundDetails = (fundId) => {
    const url = `https://staticassets.zerodha.com/coin/scheme-portfolio/${fundId}.json`;
    console.log(url);
    return new Promise((resolve, reject) => {
        axios.get(url, {
            headers: {
                'Accept-Encoding': 'application/json',
            }
        }).then((response) => {
            resolve(response.data);
        }).catch((error) => {
            reject(error);
        })
    })
}

module.exports = getFundDetails;