import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom';

import { Header, Image, Table,Menu, Icon, Button } from "semantic-ui-react";
import CandidateCvService from '../services/candidateCvService';

export default function CandidateCv() {
    const [candidateCv , setCandidateCv] = useState([]);

    let {id} = useParams();
  useEffect(() => {
    let candidateCvService = new CandidateCvService();
    candidateCvService.findByCandidateId(1).then((result) => setCandidateCv(result.data.data));
  }, []);


    return (
        <div>
            <div>
             <Header as="h2">
        <Icon  name="list alternate" />
        <Header.Content className="candidate" >Candidate List</Header.Content>
      </Header >
             <Table celled className="c" style={{border:"2px solid pink"}}>
                <Table.Header >
                    <Table.Row >
                        <Table.HeaderCell>Okul</Table.HeaderCell>
                        <Table.HeaderCell>Diller</Table.HeaderCell>
                        <Table.HeaderCell>Başlangıç tarihi</Table.HeaderCell>
                        <Table.HeaderCell>Yetenekler</Table.HeaderCell>
                        <Table.HeaderCell>Ön söz</Table.HeaderCell>
                        <Table.HeaderCell>Güncelle</Table.HeaderCell>
                        <Table.HeaderCell>Detaylar</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        candidateCv.map(candidateCv => (
                            <Table.Row key={candidateCv.id}>
                                
                                <Table.Cell>{candidateCv?.schools[0].schoolName}</Table.Cell>
                                <Table.Cell>{candidateCv?.languages[0].language.languagesName}</Table.Cell>
                                <Table.Cell>{candidateCv?.schools[0].entryDate}</Table.Cell>
                                <Table.Cell>{candidateCv?.schools[0].graduationDate}</Table.Cell>
                                <Table.Cell>{candidateCv?.coverLetter}</Table.Cell>
                                <Table.Cell>
                                <Button
                // as={Link}
                to={`/update/${candidateCv.id}`}
                content="Güncelle"
                icon="right arrow"
                labelPosition="right"
                />
                                </Table.Cell>

                                <Table.Cell>
                                <Button
                  as={Link}
                  to={`/cvs/${candidateCv.id}`}
                  content="Detaylar"
                  icon="right arrow"
                  labelPosition="right"
                />
                </Table.Cell>
                
                                
                            </Table.Row>
                        ))
                    }
                </Table.Body>
                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='8'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table> 

            <br></br>
        </div>
        </div>
    )
}
