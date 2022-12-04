const xlsx = require('xlsx');
const getFundDetails = require('./getFundDetails');

const investmentAmount = 18000

const main = async () => {
    getFundDetails("INF966L01614").then((resp) => {
        const workbook = xlsx.utils.book_new();
        const worksheet = xlsx.utils.json_to_sheet(resp.data.map(item => {
            percentValue = parseFloat(item[5])
            return {
                "Company Name": item[1],
                "Percentage": percentValue,
                "Amount": (investmentAmount * percentValue) / 100
            }
        }));
        xlsx.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        xlsx.writeFile(workbook, "excel/test.xlsx");
    }).catch((error) => {
        console.log(error);
    })
}

main();