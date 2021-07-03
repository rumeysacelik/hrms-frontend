import React, { useEffect, useState } from 'react';
import CandidateCvService from "../services/candidateCvService";
import { Header, Image, Table, Button, Icon } from "semantic-ui-react";
import { Link, useParams } from "react-router-dom";

export default function Cvs() {

  const [candidateCv , setCandidateCv] = useState([]);

  let {id} = useParams();
useEffect(() => {
  let candidateCvService = new CandidateCvService();
  candidateCvService.findByCandidateId(1).then((result) => setCandidateCv(result.data.data));
}, []);

  
    return (
      <div>
      <Table celled color={"black"}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>İş Arayan</Table.HeaderCell>
           
            <Table.HeaderCell>Detaylar</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          
            <Table.Row >
              <Table.Cell>
                
              </Table.Cell>
              <Table.Cell>
                {candidateCv.talents.map((talent) => (
                  <p >{candidateCv?.talents[0].talent.talentName}</p>
                ))}
              </Table.Cell>

              <Table.Cell>
                {candidateCv.candidateCv.map((candidateCv) => (
                  <p >{candidateCv?.languages[0].language.languagesName}</p>
                ))}
              </Table.Cell>

              <Table.Cell>
                <a href={candidateCv.githubAddress} target={"_blank"} rel="noopener noreferrer">
                  <Button secondary>
                    <Icon name="github" /> Github
                  </Button>
                </a>
              </Table.Cell>

              <Table.Cell>
                <a href={candidateCv.linkedinAddress} target={"_blank"} rel="noopener noreferrer">
                  <Button color="linkedin">
                    <Icon name="linkedin" /> LinkedIn
                  </Button>
                </a>
              </Table.Cell>

              <Table.Cell>
                <Button animated as={Link} to={`/cvs/${candidateCv.candidate.id}`}>
                  <Button.Content visible>Detayları Gör</Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>
              </Table.Cell>
            </Table.Row>
          )
        </Table.Body>
      </Table>
    </div>
    )
}
