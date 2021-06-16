import React, { useEffect, useState } from "react";
import { Icon, Header, Menu, Table, Button } from "semantic-ui-react";
import JobAdvertisementService from "../services/jobAdvertisementService";
import Filter from "../layouts/Filter";
import { Link } from "react-router-dom";

export default function JobAdvertisement() {
  const [jobAdvertisement, setJobAdvertisement] = useState([]);
  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getAll()
      .then((result) => setJobAdvertisement(result.data.data));
  }, []);

  return (
    <div>
      <div style={{ marginLeft: "90px" }}></div>

      <Header as="h2">
        <Icon name="list alternate" />
        <Header.Content className="jobAdvert">
          JobAdvertisement List
        </Header.Content>
      </Header>
      <Table celled className="c" style={{ border: "2px solid pink" }}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Açıklama</Table.HeaderCell>
            <Table.HeaderCell>Şirket</Table.HeaderCell>
            <Table.HeaderCell>Kontenjan</Table.HeaderCell>
            <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Detaylar</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdvertisement.map((jobAdvertisement) => (
            <Table.Row key={jobAdvertisement.id}>
              <Table.Cell>{jobAdvertisement.description}</Table.Cell>
              <Table.Cell>{jobAdvertisement.employer.companyName}</Table.Cell>
              <Table.Cell>{jobAdvertisement.quota}</Table.Cell>
              <Table.Cell>{jobAdvertisement.appealExpirationDate}</Table.Cell>
              <Table.Cell>
                <Button
                  as={Link}
                  to={`/jobadvertisement/${jobAdvertisement.id}`}
                  content="Detayları Gör"
                  icon="right arrow"
                  labelPosition="right"
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="5">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
      <Filter></Filter>
      <br></br>
    </div>
  );
}
