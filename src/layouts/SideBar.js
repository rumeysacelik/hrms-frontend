import React from "react";
import { Link } from "react-router-dom";
import { Icon, Menu,Segment } from "semantic-ui-react";

export default function SideBar() {
  return (
    <div >

      <Menu fluid compact icon="labeled" vertical >
        <Menu.Item as={Link} to={"/jobAdvertisement"} >
            <Icon name="list" className="Icon" />
            İş ilanları        
        </Menu.Item>

        <Menu.Item as={Link} to={"/employers"}>
            <Icon name="factory" className="Icon"/>
            İş verenler       
        </Menu.Item>

        <Menu.Item as={Link} to={"/candidates"}>
          <Icon name="user" className="Icon"/>
          Kullanıcılar
        </Menu.Item>

        <Menu.Item as={Link} to={"/cvs"}>
          <Icon name="book" className="Icon"/>
          Cv'ler
        </Menu.Item>

      </Menu>
      
    </div>
  );
}
