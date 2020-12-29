import React from "react"
import {Link, graphql} from "gatsby"
import Layout from "../components/layout"


const PostTemplate = ({data}) =>(
        <div>
                    <h1>{data.strapiArticle.Title}</h1>
        <h3>{data.strapiArticle.category.Category_Name}</h3>
        <p>by <Link to={`/authors/User_${data.strapiArticle.author.id}`}>{data.strapiArticle.author.username}</Link></p>
        <p>{data.strapiArticle.content}</p>

        </div>

)

export default PostTemplate

export const query = graphql`
  query PostTemplate($id: String!){
    strapiPost(id: {eq: $id}) {
      content
      Title
      category {
        Category_name
      }
      author {
        username
      }
    }
  }
`

