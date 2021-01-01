import React from "react"
import { Layout } from "../layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import ReactMarkdown from "react-markdown"
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
            <ReactMarkdown source={post.node.content} />
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Dashboard
