import React, { Component } from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import {NavLink} from 'react-router-dom'
class NavBar extends Component {
  render() {
    return (
      <Menu inverted fixed="top">
        <Container>
        <Menu.Item as={NavLink} to='/' name="Home" />
          <Menu.Item as={NavLink} to='/calendar' name="Calendar" />
          <Menu.Item position="right">
            <Button basic inverted content="Login" />
            <Button
              basic
              inverted
              content="Sign Out"
              style={{ marginLeft: '0.5em' }}
            />
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}

export default NavBar;
