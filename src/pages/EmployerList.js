import React, { useEffect, useState }  from 'react'
import EmployerService from '../services/employerService';
import { Icon, Header, Menu, Table } from 'semantic-ui-react'

export default function EmployerList() {
    const [employers, setEmployers] = useState([]);

    useEffect(()=>{
        let employerService = new EmployerService()
        employerService.getAll().then(result=>setEmployers(result.data.data))
    }, [])


    return (
        <div>
            <Header as="h2">
        <Icon  name="list alternate" />
        <Header.Content className="employer" >Employer List</Header.Content>
      </Header >
             <Table celled className="c" style={{border:"2px solid pink"}}>
                <Table.Header >
                    <Table.Row >
                        <Table.HeaderCell >Şirket </Table.HeaderCell>
                        <Table.HeaderCell>Web adresi</Table.HeaderCell>
                        <Table.HeaderCell>Telefon</Table.HeaderCell>


                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        employers.map(employers => (
                            <Table.Row>
                                
                                <Table.Cell>{employers.companyName}</Table.Cell>
                                <Table.Cell>{employers.webAdress}</Table.Cell>
                                <Table.Cell>{employers.phoneNumber}</Table.Cell>

                                
                            </Table.Row>
                        ))
                    }
                </Table.Body>
                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='4'>
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
    )
}
