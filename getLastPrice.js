const getLastPrice = (marketData, companySymbol) => {
    for (var i = 0; i < marketData.data.length; i++) {
        if (marketData.data[i].metadata.symbol == companySymbol) {
            return marketData.data[i].metadata.lastPrice
        }
    }
}

module.exports = getLastPrice