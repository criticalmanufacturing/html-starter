var Path = require("path");
var fs = require("fs");
var fileContent = `{ "dependencies": { "graceful-fs": { "version": "3.0.0" } } }`;
var filePath = Path.join(__dirname, "./package-lock");

// Check if package lock exists and then, create a backup
fs.access(`${filePath}.json`, fs.constants.R_OK, (err) => {
  if (!err) {
    try {
      fs.copyFileSync(
        `${filePath}.json`,
        `${filePath}-original.json`,
        fs.constants.COPYFILE_EXCL
      );
    } catch (error) {
      return console.log(error);
    }
  }
  try {
    fs.writeFileSync(`${filePath}.json`, fileContent, {
		encoding: "utf8",
		flag: "w"
	  });
  } catch (error) {
    return console.log(error);
  }
});
