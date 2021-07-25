let fs = require("fs");

function tree(path) {
  let arr = fs.readdirSync(path);
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

module.exports = {
  fxn: tree,
};
