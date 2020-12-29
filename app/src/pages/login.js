import React from "react"
import Layout from "../components/layout"
import Login from "../components/Login"
import {Link} from 'gatsby'
 
const LoginPage = ({ location }) => {
  const { state, routeState } = location
  const redirect = !routeState
    ? `/app`
    : routeState.redirect === "app"
    ? `/app`
    : `/app/${routeState.redirect}`

  return (
    <Layout>
      <h1>Login</h1>
      <div>
        <Login redirect={redirect} />
      </div>
      <Link to="/">Home</Link>
    </Layout>
  )
}
export default LoginPage
