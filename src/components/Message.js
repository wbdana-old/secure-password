import React from 'react'
import { Container, Header, Button } from 'semantic-ui-react'

const Message = (props) => {

  this.handleSubmit = () => {
    props.updateState()
  }

  return(
    <Container>
      <Header>Not so smart, huh?</Header>
      <Button onClick={this.handleSubmit}>Reset</Button>
    </Container>
  )
}

export default Message
