import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import JobAdvertisementService from "../services/jobAdvertisementService";
import { Header, Icon, Table, Button, Grid, Card } from "semantic-ui-react";
import jobAdvertisementService from '../services/jobAdvertisementService';

export default function JobAdvertisementDetail() {
    let {id} = useParams();
    


    const [jobAdvertisement, setJobAdvertisement] =  useState([]);
    useEffect(()=>{
        let jobAdvertisementService = new JobAdvertisementService();
        jobAdvertisementService.getOneById(id).then((result)=>setJobAdvertisement(result.data.data));
    }, [id])
    return (
      <div>
      
        <Card fluid color={"black"}>
          <Card.Content header="Açıklama" />
          <Card.Content>{jobAdvertisement.description}</Card.Content>
        </Card>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={6}>
              <Table celled color={"black"} stackable>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>İş veren</Table.HeaderCell>
                    <Table.HeaderCell>Bilgiler</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                {jobAdvertisement.map((jobAdvertisement) => (
                  <Table.Body key={jobAdvertisement.id}>
                    <Table.Row textAlign={"left"}>
                      <Table.Cell>
                        <Header as="h4" image>
                          <Header.Content>
                            <Icon name="building" />
                            Şirket Adı
                          </Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>
                        {jobAdvertisement.employer?.companyName}
                      </Table.Cell>
                    </Table.Row>

                    <Table.Row textAlign={"left"}>
                      <Table.Cell>
                        <Header as="h4" image>
                          <Header.Content>
                            <Icon name="mail" />
                            Email
                          </Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>
                        {jobAdvertisement.employer?.email}
                      </Table.Cell>
                    </Table.Row>

                    <Table.Row textAlign={"left"}>
                      <Table.Cell>
                        <Header as="h4" image>
                          <Header.Content>
                            <Icon name="phone" />
                            Telefon
                          </Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>
                        {jobAdvertisement.employer?.phoneNumber}
                      </Table.Cell>
                    </Table.Row>

                    <Table.Row textAlign={"left"}>
                      <Table.Cell>
                        <Header as="h4" image>
                          <Header.Content>
                            <Icon name="world" />
                            Web Sitesi
                          </Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>
                        {jobAdvertisement.employer?.webAdress}
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                ))}
              </Table>
            </Grid.Column>
            <Grid.Column width={10}>
              <Table celled fixed singleLine color={"black"}>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>İş İlanı</Table.HeaderCell>
                    <Table.HeaderCell>Detaylar</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                  {jobAdvertisement.map(jobAdvertisement=>(

                  
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>İş Pozisyonu</Table.Cell>
                    <Table.Cell>{jobAdvertisement.jobtitle?.title}</Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.Cell>Şehir</Table.Cell>
                    <Table.Cell>{jobAdvertisement.city?.cityName}</Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.Cell>Çalışma Yeri</Table.Cell>
                    <Table.Cell>{jobAdvertisement.workType?.workType}</Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.Cell>Çalışma Zamanı</Table.Cell>
                    <Table.Cell>{jobAdvertisement.workHour?.workHours}</Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.Cell>Minimum Maaş</Table.Cell>
                    <Table.Cell>{jobAdvertisement.minSalary}</Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.Cell>Maksimum Maaş</Table.Cell>
                    <Table.Cell>{jobAdvertisement.maxSalary}</Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.Cell>Açık Pozisyonlar</Table.Cell>
                    <Table.Cell>{jobAdvertisement.quota}</Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.Cell>Yayınlanma Tarihi</Table.Cell>
                    <Table.Cell>{jobAdvertisement.createdDate}</Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.Cell>Son Başvuru Tarihi</Table.Cell>
                    <Table.Cell>
                      {jobAdvertisement.appealExpirationDate}
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
                ))}
              </Table>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        
)
      </div>

      
    
    )
}
