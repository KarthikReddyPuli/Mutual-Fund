require('dotenv').config()

const getFundDetails = require('./getFundDetails');
const getMarketData = require('./getStockData')
const generateExcel = require('./generateExcel')
const getCompanyDetailsFromExcel = require('./companyDetails')
const updateStockCount = require('./updateStockCount')

const main = async () => {
    const companyDetails = getCompanyDetailsFromExcel()
    const [marketData, fundDetails] = await Promise.all([getMarketData(), getFundDetails(process.env.MUTUALFUND_ID)])
    generateExcel(updateStockCount(companyDetails, marketData, fundDetails))
}

main();