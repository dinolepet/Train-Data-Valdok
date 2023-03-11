const tesseract = require('tesseract.js');
const fs = require('fs');
const path = require('path')

// tesseract
//     .recognize("text.png", "eng", {logger:m => console.log(m)})
//     // .then(result => {
//     //     console.log(result.data.text);
//     .then(({data:{text}}) => {
//         console.log(text);
//     })
//     .catch((err) => {
//         console.log(err.message);
//     });

const getImageText = async (fileName, lang, logger) => {
    let recognizeResult = null;
    try {
        if(fs.existsSync(fileName)) {
            if(logger) {
                const myLogger = {
                    logger: m => console.log(m)
                }
                recognizeResult = await tesseract.recognize(fileName, lang, myLogger);
            } else {
                recognizeResult = await tesseract.recognize(fileName, lang);
            }
            if (recognizeResult) {
                return recognizeResult.data.text;
            }
        }
    } catch (error) {
        return error.message;
    }
};

// const file = fs.readFileSync('./images',)

getImageText("./images/untitled.1.jpg", "ind", true)
.then(content => {
    let obj = {
        content: content
    }
    let json = JSON.stringify(obj)
    console.log(content);
    fs.appendFile('./json/mynewfile1.json', json, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
})
.catch(errMsg => {
    console.log(errMsg);
});

// const fullPath = path.join(__dirname, './images');

// fs.readdir(fullPath, (error, files) => {
//     if (error) console.log(error);
//     files.forEach( file => {
//         getImageText(file, "ind", true)
//         .then(content => {
//             console.log(content);
//         })
//         .catch(errMsg => {
//             console.log(errMsg);
//         });
//         console.log(file);
//     })
// })
