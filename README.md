## luther
luther is a little experiment to automate publishing of credible, long-form content. 

e.g. policy advocacy/engagement, authority content (ebooks), long-form analysis and reporting ('the state of ethical investment' and so on)

dedicated to the underresourced organisations making our world better. hope this helps you punch above your weight!

### the stack

- gatsby - source the files, build the sites
- remark (and remark-tufte) - parse markdown and enable sweet margin notes!
- typography.js - global definition of brand constants
- pagedjs - implement's w3's paged media spec through polyfills and a cli
- pagedjs-cli - uses puppeteer and the pagedjs polyfill to generate PDFs on build

### url structure / generation
all a mess at the moment: tl;dr:

- /chapters/{slug} - web version of a given chapter, slug defined in frontmatter
- /chapters/{slug}/print - printable version, with pagedjs polyfill injected. 
  - Fails catastrophically when the CLI tries to print it but browsers love it!
-/chapters/{slug}.pdf - generated pdf

## #Way the build works:

1. Scan src/chapters/ for Markdown and parse it
2. Build the site in Gatsby
3. Spin up a little webserver to host the site
4. Puppeteer saves out pages specified in chapters.json to /chapter/:slug.pdf

### to add or figure out

- better build-options so not hardcoding chapters.json
- better metadata generation (chapter outlines etc)
- pdf recombination - e.g. whole book vs. just chapters
  - model law, model code, equity framework
- deployment
- themeability -- separation of concerns 
- sidenotes

### priorities

1. sidenotes and base styles for legal docs