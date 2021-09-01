import Typography from "typography"

const typography = new Typography(
    {
        baseFontSize: "18px",
        baseLineHeight: 1.61,
        headerFontFamily: [
            "Tiempos-Text"
        ],
        bodyFontFamily: ["Tiempos-Text"],
        overrideStyles: ({ rhythm, scale }, options) => {
            return {
                h1: { marginTop: rhythm(4) },
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
                    fontSize: '7pt',
                    lineHeight: 1.61
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
const { scale, rhythm } = typography;
export default typography