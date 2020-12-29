// import ...
import React from "react"
import { navigate } from "gatsby"
import { useAuth} from "../hooks/useAuth"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
    const [state, isLoggedIn] = useAuth()
  if (!isLoggedIn() && location.pathname !== `/app/login`) {
    navigate("/app/login")
    return null
  }

  return <Component {...rest} />
}

export default PrivateRoute