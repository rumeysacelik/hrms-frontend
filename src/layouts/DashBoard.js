import React from 'react'
import Section from './Section'
import { Grid } from "semantic-ui-react";
import SideBar from './SideBar';
import Footer from './Footer';
import Filter from './Filter';

export default function DashBoard() {
    return (
        <div>
            <div>
            <Grid>
        <Grid.Row >
        
          <Grid.Column width={2}>
          
          </Grid.Column>
          
          <Grid.Column width={14} >
          <Section/>
          
          </Grid.Column>
          <Filter></Filter>
          
        </Grid.Row>
        
      </Grid>
      
     
      
    </div>
    <Grid>
    
    </Grid>
    
        </div>
    )
}
