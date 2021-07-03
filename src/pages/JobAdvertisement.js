import React, {
  useEffect,
  useState,
  useDispatch,
  useParams,
} from "react";
import { Link } from "react-router-dom";
import {
  Icon,
  Menu,
  Table,
  Button,
  Radio,
  Segment,
  GridColumn,
  GridRow,
  Rating,
  Header
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

  let jobAdvertisementService = new JobAdvertisementService();
  let favouriteService = new FavouriteService();
  
  const [candidateFavJobAds, setCandidateFavJobAds] = useState([]);

  useEffect(()=> {
    favouriteService.findByCandidateId(1).then((result)=> {
      setCandidateFavJobAds(result.data.data)
     // console.log(result.data.data)
    })

  },[candidateFavJobAds])

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

  const saveToDB = (object,bool) => {
    if(bool){
      favouriteService.delete(object.candidateId,object.jobAdvertisementId)
      return;
    }
    else{
      favouriteService.add(object)
    }
  }

  return (
    <div>
      <div style={{ marginLeft: "90px" }}></div>
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
      <Table celled className="c" style={{ border: "2px solid pink" }}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Şirket</Table.HeaderCell>
            <Table.HeaderCell>Şehir</Table.HeaderCell>
            <Table.HeaderCell>Pozisyon</Table.HeaderCell>
            <Table.HeaderCell>Çalışma Şekli</Table.HeaderCell>
            <Table.HeaderCell>Çalışma Saati</Table.HeaderCell>
            <Table.HeaderCell>Detaylar</Table.HeaderCell>
            <Table.HeaderCell>Favori ekle</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {filteredJobAdverts
            ? filteredJobAdverts.map((jobAdvertisement) => (
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
              ))
            : adverts.map((jobAdvertisement) => (
                <Table.Row key={jobAdvertisement.id}>
                  <Table.Cell>{jobAdvertisement.employer.companyName}</Table.Cell>
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
                  </Table.Cell>
                  <Table.Cell>
                    {/* <Segment compact>
                      
                    </Segment> */}
                    <AddFavourite

                        onClick={saveHandler}
                        data={candidateFavJobAds}
                        jobId={jobAdvertisement.id}

                        onClick={saveToDB}
                  
                  
                      ></AddFavourite>
                  </Table.Cell>
                </Table.Row>
              ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="7">
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
