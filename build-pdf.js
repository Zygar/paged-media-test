const path = require(`path`)
const { exec } = require("child_process");
const currentDir = process.cwd();
const outputDir = `${currentDir}/preview`;

const genChapters = function (chapters) {
    for (const index in chapters) {
        let chapter = chapters[index];
        genPdf(chapter);
    }
}

const genPdf = function (chapter) {
    exec(`pagedjs-cli 'http://localhost:8069/${chapter}' -o '${outputDir}/${chapter}.pdf -d' --additional-script './marginNotesBuild.js' `, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    })
}

module.exports = {
    genChapters,
    genPdf
}

// genChapters(chapters);

// export default genChapters;