const path = require(`path`)
const { exec } = require("child_process");
const currentDir = process.cwd();
const targetDir = `http://localhost:8069/chapters/chapter-1/print/`;
const outputDir = `${currentDir}/public/chapters/`;
const chapters = ['chapter-1', 'chapter-2', 'chapter-3']

const genChapters = function (chapters) {
    for (const index in chapters) {
        let chapter = chapters[index];
        genPdf(chapter);
    }
}

const genPdf = function (chapter) {
    exec(`pagedjs-cli 'http://localhost:8069/chapters/${chapter}/print' -o '${outputDir}/${chapter}.pdf'`, (error, stdout, stderr) => {
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

genChapters(chapters);