const fs = require("fs");
const path = require("path");
const pathToEntry = "./build/index.html";
const pathToEntry2 = "./build/static/media";
//const bundlesRegExp = /\/static\/\w+\/\w+.[a-z0-9]+.\w{2,3}/g;
const bundlesRegExp = /\.\/static\/\w+\/\w+.[a-z0-9]+.\w+.[a-z0-9]*/g;
const splitBy = "</title>";

const builtHTMLContent = fs.readFileSync(pathToEntry).toString();
const links = builtHTMLContent.match(bundlesRegExp);
const parts = builtHTMLContent.split(splitBy);

//joining path of directory
//const directoryPath = path.join(__dirname, 'Documents');
//passsing directoryPath and callback function
let mediaFile = [];
fs.readdir(pathToEntry2, function (err, files) {
  //handling error
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }
  //listing all files using forEach
  let fileWithPreload = [parts[0], splitBy];
  files.forEach(function (file) {
    // Do whatever you want to do with the file

    if (/\.woff2$/.test(file)) {
      fileWithPreload = [
        ...fileWithPreload,
        `<link rel="preload"  href="./static/media/${file}" as="font" type="font/woff2" crossorigin />`,
      ];
    }
  });

  // links.forEach((link) => {
  //   let fileType = "script";

  //   if (/\.css$/.test(link)) {
  //     fileType = "style";
  //     fileWithPreload = [
  //       ...fileWithPreload,
  //       `<link rel="preload" href="${link}" as="${fileType}" onload="this.rel='stylesheet'">`,
  //     ];
  //   }
  // });

  fileWithPreload = [...fileWithPreload, parts[1]];

  fs.writeFileSync(pathToEntry, fileWithPreload.join(""));
});
