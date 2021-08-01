import Typography from "typography"
import theme from 'typography-theme-lincoln'

const typography = new Typography(
    {
        ...theme,
        overrideThemeStyles: () => ({
            "@media only print": {
                html: {
                    fontSize: "9pt"
                }
            }
        })
    });

// const typography = new Typography(
//     {
//         baseFontSize: "18px",
//         baseLineHeight: 1.51,
//         headerFontFamily: [
//             "Avenir Next",
//             "Helvetica Neue",
//             "Segoe UI",
//             "Helvetica",
//             "Arial",
//             "sans-serif",
//         ],
//         bodyFontFamily: ["Georgia", "serif"],
//         overrideStyles: ({ rhythm, scale }, options) => {
//             return {
//                 h1: {
//                     fontFamily: ['Arial', 'sans-serif'].join(','),
//                 },
// "@media only print": {
//     html: {
//         fontSize: "9pt"
//     }
// }
//             }
//         }
//     }
// )

export default typography