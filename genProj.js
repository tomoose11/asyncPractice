const fs = require("fs");

// fs.readdir("./beans", (err, res) => {
//   console.log(res);
// });

// let path = "./beans/bean1.js";

// fs.lstat(path, (err, stats) => {
//   if (err) return console.log(err); //Handle error

//   console.log(`Is file: ${stats.isFile()}`);
//   console.log(`Is directory: ${stats.isDirectory()}`);
//   console.log(`Is symbolic link: ${stats.isSymbolicLink()}`);
//   console.log(`Is FIFO: ${stats.isFIFO()}`);
//   console.log(`Is socket: ${stats.isSocket()}`);
//   console.log(`Is character device: ${stats.isCharacterDevice()}`);
//   console.log(`Is block device: ${stats.isBlockDevice()}`);
// });

// fs.readdir("./beans", (err, res) => {
//   if (Array.isArray(res)) {
//     for (let i = 0; i < res.length; i++) {
//       fs.lstat(`./beans/${res[i]}`, (res, stats) => {
//         console.log(stats.isFile());
//       });
//     }
//   }
// });

function folderSearch(path, fileName) {
  let isDir = fs.lstat(path, (err, res) => {
    if (res.isFile() === true) {
      console.log(path);
      let myR = new RegExp(fileName);
      if (path.match(myR)) {
        fs.readFile(path, (err, res) => {
          console.log(`${res}`);
        });
      }
    } else {
      fs.readdir(path, (err, res) => {
        for (let i = 0; i < res.length; i++) {
          folderSearch(`${path}/${res[i]}`);
        }
      });
    }
  });
}

folderSearch("./beans", "juicy.js");
