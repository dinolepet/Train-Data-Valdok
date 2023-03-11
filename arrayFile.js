const {fromPath} = require("pdf2pic");
const fs = require('fs'); // import modul fs

const generatePDFtoImage = () => {
    const folderPath = './newPDF/'; // tentukan path folder

    const files = fs.readdirSync(folderPath); // baca isi folder

    const fileArray = new Array(files.length); // buat array dengan panjang sesuai jumlah file

    files.forEach((file, index) => {
        fileArray[index] = file; // masukkan nama file ke dalam array
    });

    for (let i = 0; i < fileArray.length; i++) {
  
    const options = {
        density: 300,
        saveFilename: `${fileArray[i]}`,
        savePath: "./outputImages",
        format: "jpeg",
        width: 1000,
        height: 1500
    };
    const storeAsImage = fromPath(`C:/Users/surya/OneDrive/Desktop/belajar-nodejs/QABox/newPDF/${fileArray[i]}`, 
                        options).bulk(-1,false);

    storeAsImage.then((resolve) => {
        console.log(` ${fileArray[i]} is now converted as image`);
        return resolve;
    });
    }
    }

    generatePDFtoImage()
