import React from 'react'
import { Grid } from "semantic-ui-react";
import CandidateList from '../pages/CandidateList';
import JobAdvertisement from '../pages/JobAdvertisement';

export default function Section() {
    return (
        <div>
             <div>
             <div>
            <Grid >
                <Grid.Row>
                    <Grid.Column size={12}  >
                        <CandidateList />
                        <JobAdvertisement/>
                    </Grid.Column>
                </Grid.Row>
                
            </Grid>
        </div>
    </div>
        </div>
    )
}
