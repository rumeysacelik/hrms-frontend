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
import PostCandidateCv from "../pages/PostCandidateCv";
import JobAdvertisementDetail from "../pages/JobAdvertisementDetail";
import Cvs from "../pages/Cvs";
import CandidateCv from "../pages/CandidateCv";
import CandidateCvDetail from "../pages/CandidateCvDetail";
import UpdateSchool from "../pages/Cv/UpdateSchool";
import UpdateLanguage from "../pages/Cv/UpdateLanguage";
import UpdateExperience from "../pages/Cv/UpdateExperience";
import UpdateCv from "../pages/Cv/UpdateCv";
import UpdateCvList from "../pages/Cv/UpdateCvList";


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
              <Route exact path="/jobads/:id" component={JobAdvertisementDetail}/>
              <Route exact path="/cvs" component={CandidateCv}/>
              <Route exact path="/cvs/:id" component={CandidateCvDetail}/>
              <Route exact path="/update" component={PostCandidateCv}/>
              <Route path="/schoolUpdate" component={UpdateSchool} />
              <Route path="/langUpdate" component={UpdateLanguage} />
              <Route path="/experienceUpdate" component={UpdateExperience} />
              <Route path="/cvs/edit/:id" component={UpdateCv} />
              <Route path="/candidateUpdate" component={UpdateCvList} />

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
      <Grid></Grid>
    </div>
  );
}
