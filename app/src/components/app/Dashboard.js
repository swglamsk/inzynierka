import React from "react"
import { Layout } from "../layout"
import { Img, useStaticQuery, graphql, Link } from "gatsby"
import ReactMarkdown from "react-markdown"
import "../../styles/global.css"
import { Container, Item, Label } from "semantic-ui-react"

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
              department
              avatar {
                childImageSharp {
                  fluid(maxHeight: 200, maxWidth: 200) {
                    base64
                    tracedSVG
                    srcWebp
                    srcSetWebp
                    originalImg
                    originalName
                  }
                }
              }
            }

          }
        }
      }
    }
  `)

  return (
    <Container text>
      <Item.Group divided relaxed unstackable>
        {data.allStrapiPost.edges.map(post => (
          <Item key={post.node.id}>
            <Item.Content>
              <Item.Header as="a">
                <Link to={`/app/${post.node.id}`}>{post.node.Title}</Link>
              </Item.Header>
              <Item.Meta>
                <Label as="a" color="teal" image>
                  <Img fluid={post.node.author.avatar.childImageSharp.fluid}/>
                  {post.node.author.username}
                  <Label.Detail>{post.node.author.department}</Label.Detail>
                </Label>
              </Item.Meta>

              <Item.Description>
                <ReactMarkdown
                  source={post.node.content.substring(0, 500).concat("...")}
                  transformImageUri={uri =>
                    uri.startsWith("http") ? uri : `${apiURL}${uri}`
                  }
                  className="indexArticle"
                  escapeHtml={false}
                />
              </Item.Description>

              <Link to={`/app/${post.node.id}`}>Read more</Link>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Container>
  )
}
export default Dashboard
