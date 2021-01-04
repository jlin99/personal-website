import * as React from "react"
import { graphql } from "gatsby"
import ProjectHeader from "./components/projectHeader.js"
import Scroll from "./components/scroll.js"
import Footer from "./components/footer.js"

const pageStyles = {
  color: "#232129",
  padding: "2% 11% 0 11%",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  fontSize: "18px",
  lineHeight: "1.4",
}
const headerStyles = {
  textDecoration: "underline",
  textDecorationColor: "#ffa500",
}

export default function Template({
    data, // this prop will be injected by the GraphQL query below.
  }) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    return (
      <main style = {pageStyles}>
      <div className="project-post-container">
        <div>
          <ProjectHeader />
          <Scroll showBelow={200} />
        </div>
        <br></br>
        <div className="project-post" style = {{ marginTop: "70px"}}>
          <h1 style = {headerStyles}>{frontmatter.title}</h1>
          <h4 style = {headerStyles}>{frontmatter.date}</h4>
          <div
            className="project-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
        <div>
          
        </div>
      </div>
      <div>
        <Footer />
      </div>
      </main>
    )
  }
  export const pageQuery = graphql`
    query($slug: String!) {
      markdownRemark(frontmatter: { slug: { eq: $slug } }) {
        html
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          slug
          title
        }
      }
    }
  `