const {fromPath} = require("pdf2pic");
const fs = require('fs'); // import modul fs

const generatePDFtoImage = () => {
  const data_pdf = ["p (1)","p (2)","p (3)","p (4)","p (5)","p (6)","p (7)","p (8)","p (9)","p (10)","p (11)","p (12)"]
  for (let i =0;i < data_pdf.length;i++){
  
  const options = {
    density: 300,
    saveFilename: `${data_pdf[i]}`,
    savePath: "./outputImages",
    format: "jpeg",
    width: 1000,
    height: 1500
  };
  const storeAsImage = fromPath(`C:/Users/surya/OneDrive/Desktop/belajar-nodejs/QABox/imgPDF/pembantu pajak 2021/0100_Jakarta/539227_BPS  Kota Jakarta Pusat/${data_pdf[i]}.pdf`, 
                       options).bulk(-1,false);
  
  storeAsImage.then((resolve) => {
    console.log(` ${data_pdf[i]}.pdf is now converted as image`);
    return resolve;
  });
 }
}

generatePDFtoImage()



