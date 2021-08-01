import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import {Card, Header,Button,Icon,Menu } from "semantic-ui-react";

export default function OptionBox() {
    return (
        <div>
            <Card  style={{ marginLeft: "-15%", marginTop:"250px",height:"100%", width:"20%",backgroundColor: "transparent"}}>
    <Card.Content >
    
      <Card.Header style={{ marginLeft: "0%"}}>
      <h3 className="font-weight-bold primary-color-text">
          <FontAwesomeIcon icon={faUserGraduate} /> İş Arayanlar 
          </h3>
      </Card.Header>
    </Card.Content>
  </Card>

        </div>
    )
}
