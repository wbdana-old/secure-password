import React from 'react'
import { Form, Checkbox, Button } from 'semantic-ui-react'


const PasswordForm = (props) => {

  this.handleSubmit = () => {
    props.updateState()
  }

  return(
    <Form onSubmit={this.handleSubmit}>
      <Form.Field>
        <label>Input your password here:</label>
        <input placeholder='Password' />
      </Form.Field>
      <Form.Field>
        <Checkbox label='I agree to the Terms and Conditions' />
      </Form.Field>
      <Button type='submit'>Evaluate Security</Button>
    </Form>
  )
}

export default PasswordForm
