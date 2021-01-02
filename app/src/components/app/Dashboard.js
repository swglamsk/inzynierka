import React from "react"
import { Layout } from "../layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import ReactMarkdown from "react-markdown"
import "../../styles/global.css"
const apiURL = process.env.GATSBY_API_URL
const Dashboard = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiPost {
        edges {
          node {
            id
            Title
            content
            author {
              username
            }
          }
        }
      }
    }
  `)

  return (
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <ul>
        {data.allStrapiPost.edges.map(post => (
          <li key={post.node.id}>
            <h2>
              <Link to={`/app/${post.node.id}`}>{post.node.Title}</Link>
            </h2>
            <h3>Author: {post.node.author.username} </h3>
            <ReactMarkdown
              source={post.node.content.substring(0, 500).concat("...")}
              transformImageUri={uri =>
                uri.startsWith("http") ? uri : `${apiURL}${uri}`
              }
              className="indexArticle"
              escapeHtml={false}
            />

            <Link to={`/app/${post.node.id}`}>Read more</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Dashboard
