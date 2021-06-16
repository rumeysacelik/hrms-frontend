import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Menu } from "semantic-ui-react";
import { Container } from "semantic-ui-react";


export default function Navbar() {
  return (
    <div>

<div >
      <Menu  fixed="top" size="large"  >
        <Container >
          <Menu.Item name="building outline" >
            <Icon name="building outline" size="large" className="navbar" />
            HRMS.Bul
          </Menu.Item >
          <Menu.Item name="Home" as={Link} to={"/"} />
          <Menu.Item name="Job Advert" as={Link} to={"/jobAdvertisement"} />
          <Menu.Item name="Companies" as={Link} to={"/employers"}/>
          <Menu.Menu position="right">
            {/* <Dropdown item text="Language">
              <Dropdown.Menu>
                <Dropdown.Item>English</Dropdown.Item>
                <Dropdown.Item>Russian</Dropdown.Item>
                <Dropdown.Item>Spanish</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}

            <Menu.Item>
              <Button.Group className="button">
                <Button primary as={Link} to={"/login"}>Login</Button>
                <Button.Or />
                <Button positive as={Link} to={"/register"}>Register</Button>
              </Button.Group>
              <Button positive as={Link} to={"/postJobAdvertisement"}>İlan oluştur</Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
      
    </div>
    </div>
  );
}
