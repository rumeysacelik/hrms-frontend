import React from 'react'
import WorkHourService from '../services/workHourService';
import { Dropdown, Menu} from "semantic-ui-react";

export default function WorkHour() {
    const [workHours, setWorkHours] = useState([]);

    useEffect(() => {
      let workHourService = new WorkHourService();
      workHourService
        .getAll()
        .then((result) => setWorkHours(result.data.data));
    }, []);
  
    const workHourService = workHours.map((workHour) => ({
      key: workHour.id,
      text: workHour.workHours,
      value: workHour.id,
    }));

    function handleChange(event,data){
        onSelect(data.value)
        
          }
    return (
        <div>
        <Menu fluid compact icon="labeled" vertical>
        <Menu.Item>
        <Menu.Header>Çalışma Tipi</Menu.Header>
        <Menu.Menu>
          <Dropdown
            className="w100"
            placeholder="Çalışma tipi"
            search
            selection
            options={workHourService}
            onChange={handleChange}
            style={{ border: "2px solid grey" }}
          />
        </Menu.Menu>
      </Menu.Item>
        </Menu>
         
      </div>
  )

}