import React from 'react'
import { Menu, Header } from 'semantic-ui-react'

const NavBar = () => {

  return(
    <Menu className='NavBar'>
      <Menu.Item className='main'>
        <Header size='large'>How Secure is My Password?</Header>
      </Menu.Item>
      <Menu.Item className='sub'>
        <Header size='medium'>Find out here...</Header>
      </Menu.Item>
    </Menu>
  )
}

export default NavBar
