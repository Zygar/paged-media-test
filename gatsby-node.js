const path = require(`path`)


// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {

    const currentDir = process.cwd();
    const targetFile = `http://localhost:8069/chapters/chapter-1/print/`
    reporter.info(`${targetFile}`)
    const outputDir = `${currentDir}/public/chapters/chapter-1.pdf`
    const { exec } = require("child_process");

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
}