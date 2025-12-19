//1 
//const path = require("node:path");
//let filepath = "/home/user/project/index.js"
//console.log(filepath);
//console.log(path.dirname(filepath))



//2
//function FileName(filePath) {
//const path = require("node:path");
 // return path.basename(filePath);
//}
//let filepath = "/user/files/report.pdf"
//const result = FileName(filepath)
//console.log(result)



//3
//function buildPath(obj) {
  //const path = require("node:path");
  //return path.join(obj.dir, obj.name + obj.ext);
//}

//let filepath = { dir: "/folder", name: "app", ext: ".js" };
//const result = buildPath(filepath);
//console.log(result);





//4
//function extName(filePath) {
  //const path = require("node:path");
  //return path.extname(filePath);
//}

//let filepath = "/docs/readme.md";
//const result = extName(filepath);
//console.log(result);





 //5
 //function parseName(filePath) {
 // const path = require("node:path");
 // return path.parse(filePath);
//}

//let filepath = "/home/app/main.js";
//const result = parseName(filepath);
//console.log({ Name: result.name, Ext: result.ext });





//6
//function isAbsolutePath(FN) {
  //if (FN.startsWith("/")) {
  //  return true;
  //} else {
 //   return false;
 // }
//}

//let filePath = "/home/user/file.txt";
//console.log(isAbsolutePath(filePath));





//7
//const path = require("path");

//function joinSegments() {
//  let part1 = "src";
//  let part2 = "components";
//  let part3 = "App.js";
//  let result = path.join(part1, part2, part3);
//  return result;
//}

//let result = joinSegments();
//console.log(result);




//8
//const path = require("path");

//function resolvePath() {
//  let relativePath = "./index.js";
// let result = path.resolve(relativePath);
//  return result;
//}

//let result = resolvePath();
//console.log(result);



//9
//const path = require("path");

//function joinPaths() {
//  let firstPath = "/folder1";
//  let secondPath = "folder2/file.txt";
//  let result = path.join(firstPath, secondPath);
//  return result;
//}

//let result = joinPaths();
//console.log(result);



//10;
//const fs = require("fs");
//const path = require("path");

//function deleteFile() {
//  let filePath = "/path/to/file.txt";

//  try {
//    fs.unlinkSync(filePath); // Synchronous version
//    console.log(`${path.basename(filePath)} is deleted.`);
//  } catch (err) {
//    console.error("Error deleting the file:", err.message);
//  }
//}
//deleteFile();




//11
//const fs = require("fs");
//function createFolder() {
//  fs.mkdirSync("./myFolder");
//  console.log("Success");
//}
//createFolder();



//12
//const { EventEmitter } = require("node:events");

//let eventEmitter = new EventEmitter();

//eventEmitter.on("start", () => {
//  console.log("Welcome event triggered!");
//});

//eventEmitter.emit("start");


//13
//const { EventEmitter } = require("node:events");

//let eventEmitter = new EventEmitter();

//eventEmitter.on("login", (data) => {
//  console.log("User logged in:", data);
//});

//eventEmitter.emit("login", "Ahmed");




//14
//const fs = require("node:fs");
//try {
//  const data = fs.readFileSync("./notes.txt", "utf8");
//  console.log("the file content =>", data);
//} catch (err) {
// console.error("Error reading the file:", err.message);
//  او
//const fs = require("fs");
//const data = fs.readFileSync("./notes.txt", "utf8");
//console.log("the file content =>", data);


//15
//const fs = require("fs");
//fs.writeFile("./async.txt", "Async save", (err) => err ?
// console.error(err) :
//  console.log("File saved successfully!")
//);

//16
//const fs = require("fs");
//const path = "./notes.txt";
//const exists = fs.existsSync(path);
//console.log(exists);


//17 






