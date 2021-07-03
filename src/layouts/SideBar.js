import React from "react";
import { Link } from "react-router-dom";
import { Icon, Menu,Segment } from "semantic-ui-react";

export default function SideBar() {
  return (
    <div >

      <Menu fluid compact icon="labeled" vertical>
        <Menu.Item as={Link} to={"/jobAdvertisement"} >
            <Icon name="list" />
            İş ilanları        
        </Menu.Item>

        <Menu.Item as={Link} to={"/employers"}>
            <Icon name="factory" />
            İş verenler       
        </Menu.Item>

        <Menu.Item as={Link} to={"/candidates"}>
          <Icon name="user" />
          Kullanıcılar
        </Menu.Item>

        <Menu.Item as={Link} to={"/cvs"}>
          <Icon name="book" />
          Cv'ler
        </Menu.Item>

      </Menu>
      
    </div>
  );
}
