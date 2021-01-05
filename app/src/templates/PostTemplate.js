import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import ReactMarkdown from "react-markdown"
import "../styles/global.css"
import { Container, Label } from "semantic-ui-react"
import useAuth from "../hooks/useAuth"
import Nav from "../components/app/Nav"
const URL = process.env.GATSBY_API_URL

const PostTemplate = ({ data }) => {
  const { state } = useAuth()
  return (
    <Layout>
              <Nav></Nav>
      <Container text>

        <h1>{data.strapiPost.Title}</h1>
        <h3>Category: {data.strapiPost.category.Category_name}</h3>

        <Link to={`/app/authors/User_${data.strapiPost.author.id}`}>
          <Label as="a" color="teal" image>
            <img src={URL.concat(state.user.avatar.url)}></img>
            {data.strapiPost.author.username}
            <Label.Detail>
              {data.strapiPost.author.department}
            </Label.Detail>
          </Label>
        </Link>

        <ReactMarkdown
          source={data.strapiPost.content}
          transformImageUri={uri =>
            uri.startsWith("http") ? uri : `${URL}${uri}`
          }
          className="articleContent"
          escapeHtml={false}
        />
      </Container>
    </Layout>
  )
}

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
        department
      }
    }
  }
`
