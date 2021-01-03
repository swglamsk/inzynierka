import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => {
  return (
    <header
      style={{
        background: `Black`,
        marginBottom: `1.45rem`,
      }}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="w-1/2">
            <h1 className="m-0">
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
