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
                h2: {
                    marginTop: rhythm(2)
                },
                'ol': {
                    marginLeft: "0px"
                },
                'ol li': {
                    // marginLeft: `-${rhythm(1)}`,
                    // paddingLeft: rhythm(1)

                },
                'ol li ol': {
                    paddingBottom: rhythm(1 / 2)
                },
                'li::before': {
                    width: rhythm(1),
                    marginLeft: `-${rhythm(1)}`,
                    display: 'block',
                    float: 'left',
                    lineHeight: rhythm(1),
                    fontSize: "8pt"
                },
                '.sidenote': {
                    fontSize: '7pt'
                },

                "@media only print": {
                    html: {
                        fontSize: "9pt"
                    }
                }
            }
        }
    }
)

export default typography