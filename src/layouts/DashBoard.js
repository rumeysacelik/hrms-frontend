import React from "react";
import Section from "./Section";
import { Grid } from "semantic-ui-react";
import Filter from "./Filter";
import { Route } from "react-router";
import JobAdvertisement from "../pages/JobAdvertisement";
import CandidateList from "../pages/CandidateList";
import SideBar from "./SideBar";
import EmployerList from "../pages/EmployerList";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PostJobAdvertisement from "../pages/PostJobAdvertisement";
import JobAdvertisementDetail from "../pages/JobAdvertisementDetail";

export default function DashBoard() {
  return (
    <div>
      <Navbar />

      <div>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={2}></Grid.Column>

            <Grid.Column width={14}>
              <Section />
            </Grid.Column>

            <SideBar></SideBar>

            <Grid.Column width={12}>
              <Route />
              <Route exact path="/" component={CandidateList} />
              <Route exact path="/candidates" component={CandidateList} />
              <Route exact path="/jobAdvertisement" component={JobAdvertisement} />
              <Route exact path="/employers" component={EmployerList} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/postJobAdvertisement" component={PostJobAdvertisement} />
              <Route exact path="/jobAdvertisementDetail" component={JobAdvertisementDetail} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
      <Grid></Grid>
    </div>
  );
}
