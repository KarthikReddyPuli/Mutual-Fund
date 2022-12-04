const getLastPrice = require('./getLastPrice')

const updateStockCount = (companyDetails, marketData, fundDetails) => {
    return fundDetails.map(fundData => {
        companySymbol = companyDetails[fundData["Company Name"]]
        stockPrice = getLastPrice(marketData, companySymbol)
        return {
            "Company Name": fundData["Company Name"],
            "Percentage": fundData["Percentage"],
            "Amount": fundData["Amount"],
            "Stock Price": stockPrice,
            "Quantity": fundData["Amount"] / parseFloat(stockPrice)
        }
    })
}

module.exports = updateStockCount