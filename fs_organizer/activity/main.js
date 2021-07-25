let fs = require("fs");
let path = require("path");

let helpObj = require("./command/help.js");
let treeObj = require("./command/tree.js");
let organizeObj = require("./command/organize.js");

let inputAr = process.argv.slice(2);
let cmd = inputAr[0];
let pathPassed = process.cwd();
if (inputAr[1] != undefined) {
  pathPassed = inputAr[1];
}
if (cmd == "help") {
  helpObj.fxn();
  console.log("Current Path: ", pathPassed);
} else if (cmd == "tree") {
  console.log("Tree for Path: ", pathPassed);
  treeObj.fxn(pathPassed);
} else if (cmd == "organize") {
  organizeObj.fxn(pathPassed);
} else {
  console.log(cmd + " is not recognized as internal or external commnad.");
}
