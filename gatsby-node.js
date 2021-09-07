const path = require(`path`)
// const buildPdf = require('./build-pdf.js');
const { exec } = require("child_process");
const chapterList = require('./src/chapters/chapter-list.json')
const slugs = chapterList.allSlugs;

// exports.onPostBuild = ({ reporter }) => {
//     buildPdf.genChapters(slugs)
// }