import React, { useEffect, useState } from 'react'
import { Dropdown, Menu, Button } from 'semantic-ui-react'
import CityService from '../services/cityService';
import EmployerService from '../services/employerService';
import JobTitleService from '../services/jobTitleService';

export default function Filter() {
    const [cities, setCities] = useState([]);

    useEffect(() => {
        let cityService = new CityService();
        cityService.getAll().then((result)=> setCities(result.data.data));
    }, []);

    const cityOption = cities.map((city)=>({
        key: city.id ,
        text:city.cityName,
        value:city.id,
    }))

    const [jobTitle,setJobTitle] = useState([]);

    useEffect(()=>{
        let jobTitleService = new JobTitleService();
        jobTitleService.getAll().then((result)=> setJobTitle(result.data.data));
    },[]);

    const positionOption = jobTitle.map((jobTitle) => ({
        key: jobTitle.id,
        text: jobTitle.title,
        value:jobTitle.id,
    }))

    const[employers,setEmployers] = useState([]);

    useEffect(()=> {
        let employerService= new EmployerService();
        employerService.getAll().then((result) => setEmployers(result.data.data));
    },[]);

    const employersOption = employers.map((employers)=> ({
        key:employers.id,
        text: employers.companyName,
        value:employers.id,
    }))

    return (
        <div >
            <Menu className="w100 p1em " vertical style={{border:"3px solid pink"}} >
        <Menu.Item className="filter"> 
          <Menu.Header >Şehir</Menu.Header>
          <Menu.Menu >
          <Dropdown className="w100" placeholder='Şehir seç' search selection options={cityOption} style={{border:"2px solid pink"}}/>
          </Menu.Menu>
          
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Pozisyon</Menu.Header>
          <Menu.Menu>
          <Dropdown className="w100" placeholder='Pozisyon seç' search selection options={positionOption} style={{border:"2px solid pink"}}/>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Şirket</Menu.Header>
          <Menu.Menu>
          <Dropdown className="w100" placeholder='Şirket seç' search selection options={employersOption} style={{border:"2px solid pink"}}/>
          </Menu.Menu >
        </Menu.Item >
        <Button className="w100" floated="right" >Filtrele <i aria-hidden="true" className="search icon"></i></Button>
      </Menu> 
        </div>
    )
}
