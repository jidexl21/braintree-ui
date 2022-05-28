const fs = require("fs"); 
const path = require("path");
const testFolder = "src";
const targetDir = "test";


if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir);

const buildFile = function(fileName){
    if(path.extname(fileName).indexOf("html") == -1) return;
    
    var header = fs.readFileSync(path.join(testFolder, "header.fragment.html"));
    var footer =  fs.readFileSync(path.join(testFolder, "footer.fragment.html"));

    var main = fs.readFileSync(path.join(testFolder, fileName));

   
    fs.writeFileSync(path.join(targetDir, fileName) ,
    `${header}
    ${main}
    ${footer}`);
}
fs.readdir(testFolder, (err, files) => {
    files.forEach(file => {
        if(file.indexOf("fragment") != -1) return;
      buildFile(file);
      //console.log(file);
    });
});