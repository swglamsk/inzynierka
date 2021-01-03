import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import "semantic-ui-css/semantic.min.css"
const IndexPage = ({ data }) => (
  <Layout>
    <Link to="/app">Go to App</Link>
  </Layout>
)

export default IndexPage
