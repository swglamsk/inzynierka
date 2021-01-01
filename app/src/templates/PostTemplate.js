import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import ReactMarkdown from "react-markdown"

const PostTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiPost.Title}</h1>
    <h3>Category: {data.strapiPost.category.Category_name}</h3>
    <p>
      by{" "}
      <Link to={`/app/authors/User_${data.strapiPost.author.id}`}>
        {data.strapiPost.author.username}
      </Link>
    </p>
    <ReactMarkdown source={data.strapiPost.content} />
  </Layout>
)

export default PostTemplate

export const query = graphql`
  query PostTemplate($id: String!) {
    strapiPost(id: { eq: $id }) {
      content
      Title
      category {
        Category_name
      }
      author {
        username
        id
      }
    }
  }
`
