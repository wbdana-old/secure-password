import React from 'react'
import { Container, Form, Button } from 'semantic-ui-react'


const PasswordForm = (props) => {

  this.handleSubmit = () => {
    props.updateState()
  }

  this.handleChange = (event) => {
    props.updatePassword(event.target.value)
  }

  return(
    <Container>
      <Form onSubmit={this.handleSubmit}>
        <Form.Field onChange={this.handleChange}>
          <label>Input your password here:</label>
          <input placeholder='Password' />
        </Form.Field>
        <Button id='button' type='submit'>Evaluate Security</Button>
      </Form>
    </Container>
  )
}

export default PasswordForm
