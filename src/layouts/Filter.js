import React, { useEffect, useState } from 'react'
import { Dropdown, Menu, Button, Checkbox, Label,Segment } from 'semantic-ui-react'
import CityService from '../services/cityService';
import EmployerService from '../services/employerService';
import JobTitleService from '../services/jobTitleService';
import WorkTypeService from '../services/workTypeService';
import WorkHourService from '../services/workHourService';

export default function Filter({ clickEvent}) {
    const [cities, setCities] = useState([]);

    useEffect(() => {
        let cityService = new CityService();
        cityService.getAll().then(result=> setCities(result.data.data));
    }, []);

    const [cityIndex, setCityIndex] = useState([])
    const handleChangeCity = (e, { value }) => {
        setCityIndex(value)
    }

    const [jobTitle,setJobTitle] = useState([]);

    useEffect(()=>{
        let jobTitleService = new JobTitleService();
        jobTitleService.getAll().then((result)=> setJobTitle(result.data.data));
    },[]);

    const [workHours, setWorkHours] = useState([]);

    useEffect(()=>{
        let workHourService = new WorkHourService();
        workHourService.getAll().then(result => setWorkHours(result.data.data));
    },[]);

    

    const [jobTitleIndex] = useState([])
    const handleChangeJobTitle = (e, { value, checked}) => {
        if(checked){
            jobTitleIndex.push(value)
        }else {
            let index = jobTitleIndex.indexOf(value)
            if(index > -1) {
                jobTitleIndex.splice(index, 1)
            }
        }
    }

    // const positionOption = jobTitle.map((jobTitle) => ({
    //     key: jobTitle.id,
    //     text: jobTitle.title,
    //     value:jobTitle.id,
    // }))

    const [workTypes, setWorkTypes] = useState([]);

    useEffect(()=> {
        let workTypeService = new WorkTypeService()
        workTypeService.getAll().then(result => setWorkTypes(result.data.data))
;
    },[]);

    // const employersOption = employers.map((employers)=> ({
    //     key:employers.id,
    //     text: employers.companyName,
    //     value:employers.id,
    // }))

    const [workTypeIndex] = useState([])
    const handleChangeWorkPlace = (e, { value, checked}) => {
        if(checked){
            workTypeIndex.push(value)
        }else {
            let index = workTypeIndex.indexOf(value)
            if(index > -1) {
                workTypeIndex.splice(index, 1)
            }
        }
    }

    const [workHourIndex] = useState([])
    const handleChangeWorkTime = (e, { value, checked}) => {
        if(checked){
            workHourIndex.push(value)
        }else {
            let index = workHourIndex.indexOf(value)
            if(index > -1) {
                workHourIndex.splice(index, 1)
            }
        }
    }



    return (
        <div >
            <Menu className="w100 p1em " vertical style={{border:"3px solid pink"}} >
        <Menu.Item className="filter"> 
          <Menu.Header >Şehir</Menu.Header>
          <Menu.Menu >
          <Dropdown className="w100" placeholder='Şehir seç' selection
                    search
                    multiple
                    clearable
                    options={cities.map((city, index) => {
                        return { text: city.cityName, key: city.index, value: city.id }
                    })}
                    onChange={handleChangeCity}
                    value={cityIndex}
          style={{border:"2px solid pink"}}/>
          </Menu.Menu>
          
        </Menu.Item>

        <Segment color="pink" raised>
                <Label attached="top" size="large">İş Pozisyonu</Label>
                {
                    jobTitle.map(jobTitle => (
                        <Checkbox
                            key={jobTitle.id}
                            label={jobTitle.title}
                            onChange={handleChangeJobTitle}
                            value={jobTitle.id}
                        />
                    ))
                }
            </Segment>

            <Segment color="pink" raised>
                <Label attached="top" size="large">Çalışma Yeri</Label>
                {
                    workTypes.map(workType => (
                        <Checkbox
                            key={workType.id}
                            label={workType.workType}
                            onChange={handleChangeWorkPlace}
                            value={workType.id}
                        />
                    ))
                }
            </Segment>

            <Segment color="pink" raised>
                <Label attached="top" size="large">Çalışma Süresi</Label>
                {
                    workHours.map(workHour => (
                        <Checkbox
                            key={workHour.id}
                            label={workHour.workHours}
                            onChange={handleChangeWorkTime}
                            value={workHour.id}
                        />
                    ))
                }
            </Segment>
        <Button className="w100" floated="right" >Filtrele <i aria-hidden="true" 
        onClick={() => clickEvent({ cityId: cityIndex, jobTitleId: jobTitleIndex, workTypeId: workTypeIndex, workHourId: workHourIndex})}
        className="search icon"></i></Button>
      </Menu> 

      
        </div>
    )
}
