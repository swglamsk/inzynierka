import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
const Header = ({ siteTitle }) => {
  return (
    <header
      style={{
        background: `teal`,
        marginBottom: `1rem`,
        height: `60px`
      }}
    >
      <div style={{ justifyContent: "center", display: "flex" }}>
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="w-1/2">
              <h1 style={{fontSize:"3rem"}}>
                <Link
                  to="/"
                  style={{
                    color: `white`,
                    textDecoration: `none`,
                  }}
                >
                  {siteTitle}
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
