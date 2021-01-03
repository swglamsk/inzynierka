import React, { useEffect } from "react"
import { navigate } from "gatsby"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import Account from "../components/app/Account"
import Dashboard from "../components/app/Dashboard"
import Nav from "../components/app/Nav"
import useAuth from "../hooks/useAuth"
import Panel from "../components/app/Panel"
const App = ({ location }) => {
  const { state, isAuthenticated } = useAuth()
  const redirect = location.pathname.split("/").pop()
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login", { state: { redirect } })
    }
  }, [isAuthenticated, redirect])
  return (
    <Layout>
      <Nav />
      <Router basepath="/app">
        <Account path="/account" />
        <Dashboard path="/dashboard" />
        <Panel path="/panel" />
      </Router>
    </Layout>
  )
}
export default App
