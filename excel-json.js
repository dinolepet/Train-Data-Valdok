const xlsx = require("xlsx");
const fs = require("fs");

// // TASK 1 - Read data from Excel and store into JSON file

// // Step 1 - Read Excel file
// // const wb = xlsx.readFile('./Data.xlsx', {cellDates: true});
// const wb = xlsx.readFile('./Data.xlsx', {dateNF: "mm/dd/yyyy"});

// // Step 2 - Read sheet from the workbook
// const ws = wb.Sheets["products"];
// // console.log(ws);

// // Step 3 - Read sheet data and convert it into JSON
// const data = xlsx.utils.sheet_to_json(ws, {raw: false});;
// // console.log(data);

// // Step 4 - (Optional) Change String(False/True) to Boolean
// let newData = []

// newData = data.map((d) => {
//     if (d.Paid === "TRUE") d.Paid = true;
//     if (d.Paid === "FALSE") d.Paid = false;
//     return d;
// });
// // console.log(newData);

// // Step 5 - Write JSON data into JSON file by stringify 
// fs.writeFileSync('./datajson.json', JSON.stringify(newData, null, 2));


// // TASK 2 - Read data from JSON and Store into Exceel file

// // Step 1 - Read JSON file content and parse it into json
// let content = JSON.parse(fs.readFileSync('./datajson.json', 'utf8'));

// // Step 2 - Create a workbook
// let newWB = xlsx.utils.book_new();

// // Step 3 - Create a worksheet from JSON data read into step 1
// let newWS = xlsx.utils.json_to_sheet(content);

// // Step 4 - Append worksheet to workbook
// xlsx.utils.book_append_sheet(newWB, newWS, 'new data');

// // Step 5 - Write data to Excel
// xlsx.writeFile(newWB, 'newExcel.xlsx');


// // Generic function to generate JSON file from Excel file
// function generateJSONFromExcel(
//     excelFilePath,
//     sheetName,
//     boolDataProps,
//     jsonFilePath
// ) {
//     let newData = [];
//     const wb = xlsx.readFile(excelFilePath, {dateNF: "mm/dd/yyyy"});
//     const ws = wb.Sheets[sheetName];
//     const data = xlsx.utils.sheet_to_json(ws, {raw: false});
//     newData = data.map((d) => {
//         boolDataProps.forEach((val) => {
//             if (d[val] === "TRUE") d[val] = true;
//             if (d[val] === "FALSE") d[val] = false;
//         });
//         return d;
//     });
//     fs.writeFileSync(jsonFilePath, JSON.stringify(newData, null, 2));
// };

// generateJSONFromExcel(
//     './Data.xlsx', 
//     'bools', 
//     ['Paid', 'ExistingCustomer'], 
//     './excelData.json'
// );


// Generic function to generate Excel file from JSON file
function generateExcelFromJSON(jsonFilePath, excelFilePath, sheetName) {
    let content = JSON.parse(fs.readFileSync(jsonFilePath, "utf8"));
    let wb = xlsx.utils.book_new();
    let ws = xlsx.utils.json_to_sheet(content);
    xlsx.utils.book_append_sheet(wb, ws, sheetName);
    xlsx.writeFile(wb, excelFilePath);
};

generateExcelFromJSON('./excelData.json', 'newExcel.xlsx', 'New Data');