import React from "react"
import Layout from "../components/layout"
import Login from "../components/Login"
import { Link } from "gatsby"

const LoginPage = ({ location }) => {
  const {routeState } = location
  const redirect = !routeState
    ? `/app`
    : routeState.redirect === "app"
    ? `/app`
    : `/app/${routeState.redirect}`

  return (
    <Layout>
      <div>
        <Login redirect={redirect} />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link to="/">Home</Link>
      </div>
    </Layout>
  )
}
export default LoginPage
