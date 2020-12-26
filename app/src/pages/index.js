import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>

      <ul>
        {
          data.allStrapiPost.edges.map(post => (
            <li key={post.node.id}>
              <h2>
                <Link to={`/${post.node.id}`}>{post.node.Title}</Link>

              </h2>
              <p>{post.node.content}</p>
            </li>
          ))
        }
      </ul>
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
query IndexQuery {
  allStrapiPost {
    edges {
      node {
        id
        Title
        author {
          email
        }
        category {
          Category_name
        }
        date
        content
        images {
          url
        }
      }
    }
  }
}
`

