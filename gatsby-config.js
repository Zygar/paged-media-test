/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: `The Great Booksby`,
        description: `Using Gatsby to write once, publish anywhere.`,
        author: `@zygar`,
        menuLinks: [
            {
                name: "Home",
                link: "/"
            },
            {
                name: "Model Code",
                link: "/model-code"
            },
            {
                name: "Model Legislation",
                link: "/model-legislation"
            }
        ]
    },
    plugins: [{
        resolve: `gatsby-plugin-styled-components`
    }, {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `chapters`,
            path: `${__dirname}/src/chapters/`,
        }
    },
    {
        resolve: `gatsby-transformer-remark`,
        options: {
            // Footnotes mode (default: true)
            footnotes: true,
            // GitHub Flavored Markdown mode (default: true)
            gfm: true,
            // Plugins configs
            plugins: [`gatsby-remark-autolink-headers`, `gatsby-remark-tufte`],
        },
    },
    {
        resolve: `gatsby-plugin-typography`,
        options: {
            pathToConfigModule: `src/utils/typography`
        }
    },

    ]
}