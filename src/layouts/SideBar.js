import React from "react";
import {  Icon, Menu } from 'semantic-ui-react'

export default function SideBar() {
  return (
    <div>
      
      <div>
      <Menu inverted icon="labeled" vertical>
        <Menu.Item
          name="user"
        >
          <Icon name="user" />
          Job Titles
        </Menu.Item>

        <Menu.Item
          name="user"
        >
          <Icon name="user" />
          Candidates
        </Menu.Item>

        <Menu.Item
          name="user"
        >
          <Icon name="user" />
          Employers
        </Menu.Item>
      </Menu>
    </div>


    </div>
  );
}
