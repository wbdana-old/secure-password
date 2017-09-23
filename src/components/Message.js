import React from 'react'
import { Container, Header, Button } from 'semantic-ui-react'

const Message = (props) => {

  this.handleSubmit = () => {
    props.updateState()
  }

  this.passwordEntered = () => {
    if (props.password === '') {
      return false
    } else {
      return true
    }
  }

  return(
    <Container textAlign='left'>
      {this.passwordEntered() === true && <Header size='large'>Your password is {props.password}</Header>}
      {this.passwordEntered() === true && <Header size='medium'>Not so smart, huh?</Header>}
      {this.passwordEntered() === true && <p>Is your password secure? Of course not. You just entered it on a random website.</p>}
      {this.passwordEntered() === true && <p>I am not going to do anything with it (I am not even storing it), but please be more careful! Note, of course, that you cannot verify my claim, so you must consider this password compromised. Please change it.</p>}
      {this.passwordEntered() === false && <Header size='large'>You entered no password!</Header>}
      {this.passwordEntered() === false && <Header size='medium'>Pretty smart of you!</Header>}
      {this.passwordEntered() === false && <p>Good job not entering your password on a random website! Here are some security tips for you anyway. (Had you entered a password, I would not have saved or done anything with it. This site has no back end :)</p>}
        <ul>
          <li>Use a different password for each site.</li>
          <li>Do not enter your password on random websites like this one.</li>
          <li>Double check every URL, especially when visiting unfamiliar sites.</li>
          <li>Use HTTPS whenever possible (rather than HTTP).</li>
          <li>Do not click on untrusted links in emails.</li>
        </ul>
      <br/>
      <Button id='button' onClick={this.handleSubmit}>Reset</Button>
    </Container>
  )
}

export default Message
