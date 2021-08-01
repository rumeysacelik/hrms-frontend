import React from "react";
import { Card, Header, Button, Icon, Menu } from "semantic-ui-react";
import { ReactComponent as NewImage } from "./undraw_Organize_resume_re_k45b.svg";
import { ReactComponent as Image } from "./undraw_feeling_proud_qne1.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGraduate,
  faListUl,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import OptionBox from "./OptionBox";
export default function HomePage() {
  return (
    <div>
      <div>
        <Card.Group >
          <Card
            style={{
              marginLeft: "-10%",
              marginTop: "250px",
              height: "100%",
              width: "20%",
              backgroundColor: "transparent",
            }}
          >
            <Card.Content>
              <Card.Header
                style={{ marginLeft: "0%" }}
                as={Link}
                to={"/candidates"}
              >
                <h3 className="font-weight-bold primary-color-text">
                  <FontAwesomeIcon icon={faUserGraduate} /> İş Arayanlar
                </h3>
              </Card.Header>
            </Card.Content>
          </Card>

          <Card
            style={{
              marginLeft: "30%",
              marginTop: "250px",
              height: "100%",
              width: "20%",
              backgroundColor: "transparent",
            }}
          >
            <Card.Content>
              <Card.Header style={{ marginLeft: "0%" }}
              as={Link}
              to={"/employers"}>
                <h3 className="font-weight-bold primary-color-text">
                  <FontAwesomeIcon icon={faUserTie} /> İş Verenler
                </h3>
              </Card.Header>
            </Card.Content>
          </Card>

          <Card
            style={{
              marginLeft: "-46%",
              marginTop: "250px",
              height: "100%",
              width: "20%",
              backgroundColor: "transparent",
            }}
          >
            <Card.Content>
              <Card.Header style={{ marginLeft: "0%" }}
              as={Link}
              to={"/jobAdvertisement"}>
                <h3 
               style={{color:"black"}} className="font-weight-bold primary-color-text">
                  <FontAwesomeIcon icon={faListUl} /> İş İlanları
                </h3>
              </Card.Header>
            </Card.Content>
          </Card>
        </Card.Group>

        {/* <OptionBox/> */}
      </div>
      <div>
        {/* <Menu.Item as={Link} to={"/jobAdvertisement"} >
            <Icon name="list" className="Icon" />
            İş ilanları  
                  
        </Menu.Item> */}

        <Card className="textInput">Hayalindeki İşi Bul</Card>
        
        <Button
          content="Pozisyon, Firma Adı,Sektör..."
          style={{
            height: "30%",
            width: "30%",
            marginLeft: "-300px",
            marginTop: "0px",
          }}
        />
        <Icon name="search" style={{ marginLeft: "-30px" }} />

        {/* <Card style={{marginLeft:"550px", border:"0", width:"70%"}}> */}
        {/* <Card.Content s>
        // <img src={image} alt="Logo" style={{height:"100%", width:"100%"}}/>
        </Card.Content> */}

        <NewImage
          style={{
            height: "70%",
            width: "70%",
            marginLeft: "700px",
            marginTop: "-100px",
          }}
        />
        {/* </Card> */}
      </div>
    </div>
  );
}
