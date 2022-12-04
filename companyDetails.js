const xlsx = require('xlsx');

const getCompanyDetailsFromExcel = () => {
    const wb = xlsx.readFile("./companies/companyDetails.xlsx")
    const ws = wb.Sheets[wb.SheetNames[0]]
    const data = xlsx.utils.sheet_to_json(ws)
    var companyData = {}
    data.forEach(row => {
        companyData[row["Company Name"]] = row["Symbol"]
    })
    return companyData
}

module.exports = getCompanyDetailsFromExcel