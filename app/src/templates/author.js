import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import ReactMarkdown from "react-markdown"
import "../styles/global.css"
const URL = process.env.GATSBY_API_URL
const userTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiUser.username}</h1>
    <p>Phone Number: {data.strapiUser.phone_number}</p>
    <p>Department: {data.strapiUser.department}</p>
    <ul>
      {data.strapiUser.posts.map(article => (
        <li key={article.id}>
          <h2>
            <Link to={`/app/Post_${article.id}`}>{article.title}</Link>
          </h2>
          <h3>Category: {article.category}</h3>
          <p>Created at: {article.created_at}</p>
          <ReactMarkdown
            source={article.content.substring(0, 500).concat("...")}
            transformImageUri={uri =>
              uri.startsWith("http") ? uri : `${URL}${uri}`
            }
            className="indexArticle"
            escapeHtml={false}
          />

          <Link to={`/Article_${article.id}`}>Read more</Link>
        </li>
      ))}
    </ul>
  </Layout>
)
export default userTemplate

export const query = graphql`
  query AuthorData($id: String!) {
    strapiUser(id: { eq: $id }) {
      username
      email
      posts {
        category
        Title
        content
        created_at(formatString: "")
      }
      phone_number
      department
    }
  }
`
