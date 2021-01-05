import React from "react"
import { Link, navigate } from "gatsby"
import { Menu } from "semantic-ui-react"
import useAuth from "../../hooks/useAuth"
import SearchBar from "../SearchBar"
const Nav = () => {
  const { state, logout, isAuthenticated } = useAuth()
  const handleLogout = e => {
    e.preventDefault()
    logout()
  }
  return (
    <div style={{ display: "flex", justifyContent: "center", marginBottom:"20px"}}>
      <Menu compact secondary>
        <Menu.Item link>
          <Link to="/app/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item link onClick={() => {navigate(`/app/authors/User_${state.user.id}`)}}>
    <Link>Account</Link>
        </Menu.Item>

        <Menu.Item link>
          <Link to="/app/panel">Add post</Link>
        </Menu.Item>
        <Menu.Item>
          <div className="w-1/2 text-right">
            {isAuthenticated ? (
              <a onClick={handleLogout} className="text-white" href="/">
                Logout
              </a>
            ) : (
              <Link to="/login" className="text-white">
                Login
              </Link>
            )}
          </div>
        </Menu.Item>
        <Menu.Item>
          <SearchBar></SearchBar>
        </Menu.Item>
      </Menu>
    </div>
  )
}
export default Nav
