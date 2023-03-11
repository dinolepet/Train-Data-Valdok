const fs = require('fs');
// const { default: test } = require('node:test');
const pdfParser = require('pdf-parse');

// // Parsing satu file PDF - Text

// const pdfFile = fs.readFileSync('./textPDF/03. Hafalan Alex.pdf');

// pdfParser(pdfFile)
//     .then((data) => {
//         console.log(data.info);
//         console.log(data.numpages);
//         console.log(data.metadata);
//         console.log(data.text);
//     })
//     .catch((err) => {
//         console.log(err.message);
//     });

const getPdfText = async(pdfFile, maxPages) => {
    let pdfBuffer = null;
    let parsePdf = "";
    try {
        if(fs.existsSync(pdfFile)) {
            pdfBuffer = fs.readFileSync(pdfFile)
            if(maxPages){
                parsedPdf = await pdfParser(pdfBuffer, {
                    max: maxPages
                })
            } else {
                parsedPdf = await pdfParser(pdfBuffer);
            }
            if(parsedPdf){
                return parsedPdf.text;
            }
        }
    } catch (error) {
        return error.message;
    }
};

// const loopinData = () => {
//     data_pdf = [
//         "01. Baik Luar Dalam.pdf",
//         "02. Menemukan "
//     ]
// }


getPdfText('./textPDF/01. Baik Luar Dalam.pdf',1).then(text => {
    console.log(text);
}).catch(errMsg => {
    console.log(errMsg);
});