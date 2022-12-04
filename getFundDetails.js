const axios = require('axios');
const { normalizeCompanyName } = require('./util')

const investmentAmount = parseFloat(process.env.INVESTMENT_AMOUNT)

const getFundDetails = (fundId) => {
    const url = `https://staticassets.zerodha.com/coin/scheme-portfolio/${fundId}.json`;
    return new Promise((resolve, reject) => {
        axios.get(url, {
            headers: {
                'Accept-Encoding': 'application/json',
            }
        }).then((response) => {
            resolve(response.data.data.map(item => {
                percentValue = parseFloat(item[5])
                return {
                    "Company Name": normalizeCompanyName(item[1]),
                    "Percentage": percentValue,
                    "Amount": (investmentAmount * percentValue) / 100
                }
            }));
        }).catch((error) => {
            console.error("Failed to get fund details")
            reject(error);
        })
    })
}

module.exports = getFundDetails;