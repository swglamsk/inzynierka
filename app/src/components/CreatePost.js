import React, { useState, useContext } from "react"
import MDEditor from "@uiw/react-md-editor"
import axios from "axios"
import { useStaticQuery, graphql } from "gatsby"
import { Form, Dropdown, Button } from "semantic-ui-react"

import useAuth from "../hooks/useAuth"
const apiURL = process.env.GATSBY_API_URL
export const CreatePost = () => {
  const [title, setTitle] = useState(null)
  const [content, setContent] = useState(null)
  const [category, setCategory] = useState(null)
  const user = useAuth().state.user.id
  const data = useStaticQuery(graphql`
    {
      allStrapiCategory {
        edges {
          node {
            Category_name
            id
          }
        }
      }
    }
  `)
  const categories = data.allStrapiCategory.edges.map(element => ({
    key: element.node.id,
    text: element.node.Category_name,
    value: element.node.id,
  }))
  const handleSubmit = async () => {
    await axios
      .post(`${apiURL}/posts`, {
        Title: title,
        author: user,
        category: category.toString(),
        content: content,
      })
      .then(response => {
        if (!!response) {
          console.log(response)
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <Form onSubmit={() => handleSubmit()}>
      <div style={{ marginTop: "10px" }}>
        <Form.Field required>
          <label>Title:</label>
          <input
            placeholder="Title"
            onChange={data => setTitle(data.target.value)}
          />
        </Form.Field>
        <Form.Field required>
          <label>Category:</label>
          <Dropdown
            placeholder="select category"
            fluid
            selection
            options={categories}
            onChange={(e, { value }) =>
              setCategory({ value }.value.toString().split("_")[1])
            }
          />
        </Form.Field>
        <Form.Field>
          <label>Your post:</label>
          <MDEditor value={content} onChange={setContent} />
          <div style={{ marginTop: "10px" }}>
            <Button type="submit">Add post</Button>
          </div>
        </Form.Field>
      </div>
    </Form>
  )
}
export default CreatePost
