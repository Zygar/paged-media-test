import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { Previewer } from "pagedjs";
import Chapter from "../chapterRenderer.js";
import "./print.css"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  React.useEffect(() => {
    const fragmentPrep = function (html) {
      const parser = new DOMParser();
      let wrappedHtml = `<section class='post'>${html}</section>`
      let parsed = parser.parseFromString(wrappedHtml, "text/html");
      let parsedFilteredDom = parsed.querySelectorAll('body > *');
      console.log(parsedFilteredDom);
      let fragment = document.createDocumentFragment();
      for (let i = 0; i < parsedFilteredDom.length; i++) {
        fragment.appendChild(parsedFilteredDom[i]);
      }
      return fragment
    }
    let fragment = fragmentPrep(html);
    console.log(fragment);

    const previewer = new Previewer();
    let target = document.querySelector('.page-wrapper')
    previewer.preview(fragment, false, target)
    console.log(document.body)
  });
  return (
    <div className="page-wrapper">
      {/* <div className="blog-post">
        <Link to="/">Go home</Link>
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.author}</p>
         */}
      {/* <Chapter html={html}></Chapter> */}

    </div>
    // </div>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
        author
      }
    }
  }
`