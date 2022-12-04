const getFundDetails = require('./getFundDetails');
const getMarketData = require('./getStockData')
const generateExcel = require('./generateExcel')
const getCompanyDetailsFromExcel = require('./companyDetails')

const main = async () => {
    const companyDetails = getCompanyDetailsFromExcel()
    const [marketData, fundDetails] = await Promise.all([getMarketData(), getFundDetails("INF966L01614")])
    generateExcel(fundDetails)
}

main();