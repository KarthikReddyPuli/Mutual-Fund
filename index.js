const xlsx = require('xlsx');
const getFundDetails = require('./getFundDetails');

const main = async () => {
    getFundDetails("INF966L01614").then((resp) => {
        const workbook = xlsx.utils.book_new();
        const worksheet = xlsx.utils.json_to_sheet(resp.data.map(item => {
            return {
                "Company Name": item[1],
                "Percentage": item[5],
            }
        }));
        xlsx.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        xlsx.writeFile(workbook, "test.xlsx");
    }).catch((error) => {
        console.log(error);
    })
}

main();