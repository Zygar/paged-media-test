import Typography from "typography"
import theme from 'typography-theme-lincoln'

// const typography = new Typography(
//     {
//         ...theme,
//         overrideThemeStyles: () => ({
//             "@media only print": {
//                 html: {
//                     fontSize: "9pt"
//                 }
//             }
//         })
//     });

const typography = new Typography(
    {
        baseFontSize: "18px",
        baseLineHeight: 1.61,
        headerFontFamily: [
            "Söhne Test",
            "Helvetica Neue",
            "Segoe UI",
            "Helvetica",
            "Arial",
            "sans-serif",
        ],
        bodyFontFamily: ["Tiempos Text Test", "serif"],
        overrideStyles: ({ rhythm, scale }, options) => {
            return {
                h1: {

                },
                'ol': {
                    marginLeft: "0px"
                },
                'ol li': {
                    marginLeft: `-${rhythm(1)}`,
                    paddingLeft: rhythm(1)

                },
                'ol li ol': {
                    paddingBottom: rhythm(1 / 2)
                },

                "@media only print": {
                    html: {
                        fontSize: "9.5pt"
                    }
                }
            }
        }
    }
)

export default typography