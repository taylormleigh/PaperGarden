import React from "react"
import Header from "./header"
import Footer from "./footer"

const bgStyle = {
  backgroundColor: `#ffffff`,
  margin: `0 auto`,
  maxWidth: 920,
  minHeight: `70vh`,
  maxHeight: `70vh`,
  overflow: `auto`,
  padding: `40px`,
  boxShadow: `0px 0px 40px 20px #000000`,
};

const divStyle = {
  padding: `8px`,
}


const Layout = ({children}) => {
  return (
    <>
      <Header />
        <div className="container">
          <main>{children}</main>
        </div>
      <Footer />
    </>
  )
}

export default Layout
