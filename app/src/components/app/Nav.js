import React from "react"
import { Link } from "gatsby"
import { Menu } from "semantic-ui-react"
import useAuth from "../../hooks/useAuth"

const Nav = () => {
  const { logout, isAuthenticated } = useAuth()
  const handleLogout = e => {
    e.preventDefault()
    logout()
  }
  return (
    <Menu compact>
      <Menu.Item link>
        <Link to="/app/dashboard">Dashboard</Link>
      </Menu.Item>
      <Menu.Item link>
        <Link to="/app/account">Account</Link>
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
    </Menu>
  )
}
export default Nav
