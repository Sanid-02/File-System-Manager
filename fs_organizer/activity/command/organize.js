let fs = require("fs");
let paths = require("path");

let types = {
  media: ["mp4", "mkv"],
  archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
  documents: [
    "docx",
    "doc",
    "pdf",
    "xlsx",
    "xls",
    "odt",
    "ods",
    "odp",
    "odg",
    "odf",
    "txt",
    "ps",
    "tex",
  ],
  app: ["exe", "dmg", "pkg", "deb"],
};

function organize(path) {
  let files = fs.readdirSync(path);

  let mainFolder = paths.join(path, "organize");
  fs.mkdirSync(mainFolder);

  for (let i = 0; i < files.length; i++) {
    let extwd = paths.extname(files[i]);
    let ext = extwd.split(".");
    let folder = "other";
    for (key in types) {
      for (let j = 0; j < types[key].length; j++) {
        if (ext[1] == types[key][j]) {
          folder = key;
          break;
        }
      }
    }
    let checkFolder = paths.join(mainFolder, folder);
    if (!fs.existsSync(checkFolder)) {
      fs.mkdirSync(checkFolder);
    }
    let srcPath = paths.join(path, files[i]);
    let destPath = paths.join(mainFolder, folder, files[i]);
    fs.copyFileSync(srcPath, destPath);
  }
}

module.exports = {
  fxn: organize,
};
