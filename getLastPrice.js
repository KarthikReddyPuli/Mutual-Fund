const getLastPrice = (marketData, companySymbol) => {
    marketData.data.forEach(element => {
        if (element.metadata.symbol == companySymbol) {
            console.log(element.metadata.lastPrice)
            return element.metadata.lastPrice
        }
    });
}

module.exports = getLastPrice