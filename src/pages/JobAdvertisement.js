import React, { useEffect, useState, useDispatch, useParams } from "react";
import { Link } from "react-router-dom";
import {
  Icon,
  Menu,
  Table,
  Button,
  Segment,
  GridColumn,
  GridRow,
  Pagination,
  Header,
  Card,
  Label,
} from "semantic-ui-react";
import JobAdvertisementService from "../services/jobAdvertisementService";
import CityFilter from "../layouts/CityFilter";
import WorkTypeFilter from "../layouts/WorkTypeFilter";
import AddFavourite from "./Favourite/AddFavourite";
import FavouriteService from "../services/favouriteService";

import { toast } from "react-toastify";

export default function JobAdvertisement() {
  const [adverts, setAdverts] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedWorkType, setSelectedWorkType] = useState(null);
  const [filteredJobAdverts, setFilteredJobAdverts] = useState(null); //filtrelenmiş state

  const [activePage, setActivePage] = useState(1);
  const [pageSize, setPageSize] = useState(2);

  let jobAdvertisementService = new JobAdvertisementService();
  let favouriteService = new FavouriteService();

  const [candidateFavJobAds, setCandidateFavJobAds] = useState([]);

  useEffect(() => {
    jobAdvertisementService
      .getConfirmedJobAdsWithPageable(activePage, pageSize)
      .then((result) => setAdverts(result.data.data));
  }, [activePage, pageSize]);

  useEffect(() => {
    favouriteService.findByCandidateId(1).then((result) => {
      setCandidateFavJobAds(result.data.data);
      // console.log(result.data.data)
    });
  }, [candidateFavJobAds]);

  useEffect(() => {
    jobAdvertisementService.getAll().then((result) => {
      setAdverts(result.data.data);
    });
  }, [adverts]);

  useEffect(() => {
    let filteredJobByJobAdverts;
    if (selectedCity && selectedWorkType) {
      filteredJobByJobAdverts = adverts.filter(
        (jobAdvert) =>
          jobAdvert.city.id === selectedCity &&
          jobAdvert.workType.id === selectedWorkType
      );
    } else if (selectedCity) {
      filteredJobByJobAdverts = adverts.filter(
        (jobAdvert) => jobAdvert.city.id === selectedCity
      );
    } else if (selectedWorkType) {
      filteredJobByJobAdverts = adverts.filter(
        (jobAdvert) => jobAdvert.workType.id === selectedWorkType
      );
    } else {
      filteredJobByJobAdverts = null;
    }
    setFilteredJobAdverts(filteredJobByJobAdverts);
  }, [selectedCity, selectedWorkType]);

  const saveHandler = (object) => {
    console.log(object);
    favouriteService
      .add(object)
      .then(
        (result) => console.log(result),
        toast.success("Favorilere Eklendi")
      );
  };

  const onChange = (e, pageInfo) => {
    setActivePage(pageInfo.activePage);
  };

  let pageAble = (pageNo) => {
    setPageSize(pageNo);
  };

  const saveToDB = (object, bool) => {
    if (bool) {
      favouriteService.delete(object.candidateId, object.jobAdvertisementId);
      return;
    } else {
      favouriteService.add(object);
    }
  };

  return (
    <div className="jobAdPage">
      <GridRow columns={3}>
        <GridColumn>
          {" "}
          <CityFilter onSelect={handleSelectCity} />
        </GridColumn>
        <GridColumn>
          {" "}
          <WorkTypeFilter onSelect={handleSelectWorkType} />
        </GridColumn>
      </GridRow>
      <Header as="h2">
        <Icon name="list alternate" />
        <Header.Content className="jobAdvert">
          JobAdvertisement List
        </Header.Content>
      </Header>
      {/* <Table celled className="c" style={{ border: "2px solid pink" }}> */}
      {/* <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Şirket</Table.HeaderCell>
            <Table.HeaderCell>Şehir</Table.HeaderCell>
            <Table.HeaderCell>Pozisyon</Table.HeaderCell>
            <Table.HeaderCell>Çalışma Şekli</Table.HeaderCell>
            <Table.HeaderCell>Çalışma Saati</Table.HeaderCell>
            <Table.HeaderCell>Detaylar</Table.HeaderCell>
            <Table.HeaderCell>Favori ekle</Table.HeaderCell>
          </Table.Row>
        </Table.Header> */}

      {/* <Table.Body> */}



      {filteredJobAdverts
        ? filteredJobAdverts.map((jobAdvertisement) => (
          <Table>
            <Table.Row key={jobAdvertisement.id}>
              <Table.Cell>{jobAdvertisement.employer.companyName}</Table.Cell>
              <Table.Cell>{jobAdvertisement.city.cityName}</Table.Cell>
              <Table.Cell>{jobAdvertisement?.jobtitle.title}</Table.Cell>
              <Table.Cell>{jobAdvertisement.workType.workType}</Table.Cell>
              <Table.Cell>{jobAdvertisement.workHour.workHours}</Table.Cell>
              <Table.Cell>
                {" "}
                <Link to={`/jobads/${jobAdvertisement.id}`}>
                  <Button color="grey">Details</Button>
                </Link>
              </Table.Cell>
            </Table.Row>
            </Table>
          ))
        : adverts.map((jobAdvertisement) => (
            <Card.Content key={jobAdvertisement.id}>
              {/* <Table.Cell>{jobAdvertisement.employer.companyName}</Table.Cell>
                  <Table.Cell>{jobAdvertisement.city.cityName}</Table.Cell>
                  <Table.Cell>{jobAdvertisement.jobtitle.title}</Table.Cell>
                  <Table.Cell>{jobAdvertisement.workType.workType}</Table.Cell>
                  <Table.Cell>{jobAdvertisement.workHour.workHours}</Table.Cell>
                  <Table.Cell>
                     <Button
                  as={Link}
                  to={`/jobads/${jobAdvertisement.id}`}
                  content="Detayları Gör"
                  icon="right arrow"
                  labelPosition="right"
                />
                  </Table.Cell> */}

              <Card style={{ marginLeft: "30%" }}>
                <AddFavourite
                  style={{ marginLeft: "44%", marginTop: "1%" }}
                  onClick={saveHandler}
                  data={candidateFavJobAds}
                  jobId={jobAdvertisement.id}
                  onClick={saveToDB}
                ></AddFavourite>
                <Card.Content>
                  <Card.Header style={{ marginLeft: "30%" }}>
                    {jobAdvertisement.jobtitle.title}
                  </Card.Header>
                  <Card.Meta style={{ marginLeft: "43%" }}>
                    {jobAdvertisement.employer.companyName}
                  </Card.Meta>
                  <Card.Meta style={{ marginLeft: "44%", marginTop: "1%" }}>
                    <Icon name="map marker alternate" />
                    {jobAdvertisement.city.cityName}
                  </Card.Meta>
                  <Card.Meta style={{ marginLeft: "43%" }}>
                    {jobAdvertisement.workType.workType}
                  </Card.Meta>
                </Card.Content>

                <Label
                  style={{
                    marginLeft: "5%",
                    color: "purple",
                    marginTop: "3px",
                  }}
                >
                  <Card.Description>
                    {jobAdvertisement.workHour.workHours}
                  </Card.Description>
                </Label>
              </Card>

              <br></br>
          
              {/* <Segment compact>
                      
                    </Segment> */}
              {/* <AddFavourite

                        onClick={saveHandler}
                        data={candidateFavJobAds}
                        jobId={jobAdvertisement.id}

                        onClick={saveToDB}
                  
                  
                      ></AddFavourite> */}
            </Card.Content>
          ))}
      {/* </Table.Body> */}

      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan="6">
            <Menu floated="right" pagination>
              <Menu.Item as="a" icon>
                <Pagination
                  activePage={activePage}
                  onPageChange={onChange}
                  totalPages={10}
                />
                <p></p>

                <Button.Group>
                  <Button onClick={() => pageAble(10)}>10</Button>
                  <Button.Or />
                  <Button onClick={() => pageAble(20)}>20</Button>
                  <Button.Or />
                  <Button>50</Button>
                  <Button.Or />
                  <Button>100</Button>
                </Button.Group>
              </Menu.Item>
            </Menu>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
      {/* </Table>   {/* </Table> */}
      {/* <Filter></Filter> */}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      </div>
  );
  function handleSelectWorkType(workTypeId) {
    setSelectedWorkType(workTypeId);
  }

  function handleSelectCity(cityId) {
    setSelectedCity(cityId);
  }
}
