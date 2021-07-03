import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CandidateCvService from "../services/candidateCvService";
import { Card, Table, Header, Button, Icon } from "semantic-ui-react";
import { useSelector } from "react-redux";
import "reactjs-popup/dist/index.css";
import Popup from "reactjs-popup";
import UpdateLanguage from "./LanguageUpdate";
import UpdateSchools from "./SchoolUpdate";
import TalentUpdate from "./TalentUpdate";

export default function CandidateCvDetail() {
  const {authItem} = useSelector(state => state.auth)

  const [candidateCv, setCandidateCv] = useState([]);

  let { id } = useParams();


  let candidateCvService = new CandidateCvService();
  useEffect(() => {
    let candidateCvService = new CandidateCvService();
    candidateCvService
      .findByCandidateId(1)
      .then((result) => setCandidateCv(result.data.data));
  }, []);

  return (
    <div>
      <div>
        <Card.Group>
          <Card fluid>
            <Card.Content>
              <Card.Header></Card.Header>
              <Card.Meta>
                <strong>{candidateCv.coverLetter}</strong>
              </Card.Meta>
              <Card.Description>
                <Table celled color={"black"}>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Kullanıcı</Table.HeaderCell>
                      <Table.HeaderCell>Bilgiler</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>

                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>
                        <Header as="h4" image>
                          <Header.Content>
                            <a
                              href={candidateCv.github}
                              target={"_blank"}
                              rel="noopener noreferrer"
                            >
                              <Button secondary>
                                <Icon name="github" /> Github
                              </Button>
                            </a>
                          </Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>{candidateCv.githubAddress}</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                      <Table.Cell>
                        <Header as="h4" image>
                          <Header.Content>
                            <a
                              href={candidateCv.linkedin}
                              target={"_blank"}
                              rel="noopener noreferrer"
                            >
                              <Button color="linkedin">
                                <Icon name="linkedin" /> LinkedIn
                              </Button>
                            </a>
                          </Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>{candidateCv.linkedinAddress}</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Card.Description>
            </Card.Content>
            <Card.Content extra></Card.Content>
          </Card>
        </Card.Group>
        <Card fluid>
          <Card.Content header="Biyografi" />
          <Card.Content description={candidateCv.coverLetter} />
        </Card>

        <Card fluid>
        <Card.Content>
          <Card.Header>
          Okuduğu Okullar
          
                            <UpdateSchools cvId={id}/>
                          
          </Card.Header>
        </Card.Content>
          <Table celled color={"black"}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Okul Adı</Table.HeaderCell>
                <Table.HeaderCell>Bölüm</Table.HeaderCell>
                <Table.HeaderCell>Başlangıç Tarihi</Table.HeaderCell>
                <Table.HeaderCell>Mezuniyet Tarihi</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {candidateCv.map((candidateCv) => (
                <Table.Row key={candidateCv.id}>
                  <Table.Cell>{candidateCv?.schools[0].schoolName}</Table.Cell>
                  <Table.Cell>{candidateCv?.schools[0].department}</Table.Cell>
                  <Table.Cell>{candidateCv?.schools[0].entryDate}</Table.Cell>
                  <Table.Cell>
                    {candidateCv?.schools[0].graduationDate}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Card>

        <Card fluid>
          <Card.Content header="Yabancı Diller"/>
          <Card.Header>
            { <Popup trigger={<button className="ui button" style={{marginLeft:"1em"}}> Güncelle </button>} modal>
                            <UpdateLanguage cvId={id}/>
                          </Popup>}
          </Card.Header>
          <Table celled color={"black"}>
            <Table.Header  >
              <Table.Row>
                <Table.HeaderCell>Dil Adı</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {candidateCv.map((candidateCv) => (
                <Table.Row key={candidateCv.id}>
                  <Table.Cell>
                    {candidateCv?.languages[0].language.languagesName }
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Card>

        <Card fluid>
        <Card.Content>
          <Card.Header>
          Yazılım Teknolojileri
          { <Popup trigger={<button className="ui button" style={{marginLeft:"1em"}}> Güncelle </button>} modal>
                            <TalentUpdate cvId={id}/>
                          </Popup>}
          </Card.Header>
        </Card.Content>
          <Table celled color={"black"}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Teknoloji Adı</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {candidateCv.map((candidateCv) => (
                <Table.Row key={candidateCv.id}>
                  <Table.Cell>
                    {candidateCv?.talents[0].talent.talentName}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Card>
      </div>
    </div>
  );
}
