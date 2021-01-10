import React from "react"
import { Container, Divider, Header, Icon } from "semantic-ui-react"

const Footer = () => {
  return (

      <Container textAlign="center" inverted>
        <Divider  section />
        <Header as="h5"  color="white"> 
          2020 
          <Icon name="copyright outline"></Icon>
          Delivered by: Jakub Modzelewski
        </Header>
      </Container>

  )
}
export default Footer
