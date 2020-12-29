import React from "react"
import { graphql, Link, navigate } from "gatsby"
import {App} from "./app"
import Layout from "../components/layout"

const IndexPage = ({data}) => {
  navigate('/login')
  return(<div></div>
  )
}

export default IndexPage
