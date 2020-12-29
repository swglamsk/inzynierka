import React from "react"
import { Link } from "gatsby"

const Nav = () => {
  return (
    <ul className="flex">
      <li className="mx-2 px-2">
        <Link to="/app/dashboard">Dashboard</Link>
      </li>
      <li className="mx-2 px-2">
        <Link to="/app/account">Account</Link>
      </li>
    </ul>
  )
}
export default Nav