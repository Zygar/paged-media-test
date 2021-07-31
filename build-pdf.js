const path = require(`path`)
const { exec } = require("child_process");
const currentDir = process.cwd();
const targetFile = `http://localhost:8069/chapters/chapter-1/print/`;
const outputDir = `${currentDir}/public/chapters/chapter-1.pdf`;

exec(`pagedjs-cli '${targetFile}' -o '${outputDir}'`, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});