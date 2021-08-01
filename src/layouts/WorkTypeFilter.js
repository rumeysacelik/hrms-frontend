import WorkTypeService from '../services/workTypeService';
import React, { useEffect, useState } from "react";
import { Dropdown, Menu} from "semantic-ui-react";

export default function WorkTypeFilter({onSelect}) {
    const [workTypes, setWorkTypes] = useState([]);

    useEffect(() => {
      let workTypeService = new WorkTypeService();
      workTypeService
        .getAll()
        .then((result) => setWorkTypes(result.data.data));
    }, []);
  
    const workTypeService = workTypes.map((workType) => ({
      key: workType.id,
      text: workType.workType,
      value: workType.id,
    }));

    function handleChange(event,data){
        onSelect(data.value)
        
          }
    return (
        <div>
        <Menu fluid compact icon="labeled" vertical  style={{ borderRadius: "0%"}}>
        <Menu.Item>
        <Menu.Header>Çalışma Tipi</Menu.Header>
        <Menu.Menu>
          <Dropdown
            className="w100"
            placeholder="Çalışma tipi"
            search
            selection
            options={workTypeService}
            onChange={handleChange}
            style={{ border: "2px solid grey" }}
          />
        </Menu.Menu>
      </Menu.Item>
        </Menu>
         
      </div>
  )

}