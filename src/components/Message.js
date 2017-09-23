import React from 'react'
import { Container, Header, Button, List } from 'semantic-ui-react'

const Message = (props) => {

  this.handleSubmit = () => {
    props.updateState()
  }

  return(
    <Container>
      <Header size='large'>Your password is {props.password}</Header>
      <Header size='medium'>Not so smart, huh?</Header>
      <p>Is your password secure? Of course not. You just entered it on a random website.</p>
      <p>I am not going to do anything with it (I am not even storing it), but please be more careful! Besides, you cannot even guarantee this, so you must consider this password compromised.</p>
      <Container>
        <List>
          <List.Item>Use a different password for each site.</List.Item>
          <List.Item>Do not enter your password on random websites like this one.</List.Item>
          <List.Item>Double check every URL, especially when visiting unfamiliar sites.</List.Item>
          <List.Item>Use HTTPS whenever possible (rather than HTTP).</List.Item>
          <List.Item>Do not click on untrusted links in emails.</List.Item>
        </List>
      </Container>
      <br/><br/>
      <Button id='button' onClick={this.handleSubmit}>Reset</Button>
    </Container>
  )
}

export default Message
