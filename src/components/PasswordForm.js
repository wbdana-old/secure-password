import React from 'react'
import { Form, Checkbox, Button } from 'semantic-ui-react'


const PasswordForm = (props) => {

  this.handleSubmit = () => {
    props.updateState()
  }

  this.handleChange = (event) => {
    props.updatePassword(event.target.value)
  }

  return(
    <Form onSubmit={this.handleSubmit}>
      <Form.Field onChange={this.handleChange}>
        <label>Input your password here:</label>
        <input placeholder='Password' />
      </Form.Field>
      <Form.Field>
        <Checkbox label='I agree to the Terms and Conditions' />
      </Form.Field>
      <Button id='button' type='submit'>Evaluate Security</Button>
    </Form>
  )
}

export default PasswordForm
