import React, { Component } from "react";
import { Menu, Container, Button, Popup } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";
class NavBar extends Component {
  render() {
    return (
      <Menu inverted fixed="top">
        <Container>
          <Popup
            trigger={<Menu.Item as={Link} to="/" icon="home" />}
            content="Home"
          />
          <Popup
            trigger={<Menu.Item as={NavLink} to="/calendar" icon="calendar" />}
            content="Calendar"
          />
          <Popup
            trigger={<Menu.Item as={NavLink} to="/inbox" icon="inbox" />}
            content="Messages"
          />
          <Menu.Item position="right">
            <Button basic inverted content="Login" />
            <Button
              basic
              inverted
              content="Sign Out"
              style={{ marginLeft: "0.5em" }}
            />
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}

export default NavBar;
