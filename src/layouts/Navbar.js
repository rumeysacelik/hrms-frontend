import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Menu } from "semantic-ui-react";
import { Container } from "semantic-ui-react";
import { ReactComponent as Image } from './undraw_My_documents_re_13dc.svg';


export default function Navbar() {
  return (
    <div>

<div  >
      <Menu  fixed="top" size="large"  >
      
        <Container >
          <Menu.Item name="building outline" >
            <Icon name="building outline" size="large" className="navbar" />
            <Image style={{height:"70%", width:"70%", position:"absolute", marginLeft:"-100px"}} />
         
            HRMS
           
          </Menu.Item >
          <Menu.Item className="p" name="  Home" as={Link} to={"/"} />
          <Menu.Item className="p" name="Job Advert" as={Link} to={"/jobAdvertisement"} />
          <Menu.Item className="p"name="  Companies" as={Link} to={"/employers"}/>
          <Menu.Menu position="right">
         

            <Menu.Item>
              <Button.Group className="navbutton">
                <Button primary as={Link} to={"/login"}>Giriş Yap</Button>
                <Button.Or />
                <Button danger as={Link}  to={"/register"}>Kayıt Ol</Button>
              </Button.Group>
              <Button primary as={Link} to={"/postJobAdvertisement"} >İlan oluştur</Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
      
    </div>
    </div>
  );
}
