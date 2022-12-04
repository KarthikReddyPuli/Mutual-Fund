const xlsx = require('xlsx');

const generateExcel = async (data) => {
    const workbook = xlsx.utils.book_new();
    const worksheet = xlsx.utils.json_to_sheet(data);
    xlsx.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    xlsx.writeFile(workbook, "excel/test.xlsx");
}

module.exports = generateExcel