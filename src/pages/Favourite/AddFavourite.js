import React from 'react'
import { Formik, Form } from "formik";
import { Button,Rating } from "semantic-ui-react";
import FavouriteService from '../../services/favouriteService'


function AddFavourite({data,jobId, onClick}) {
    const job = data.find(j => j.jobAdvertisement.id === jobId)
    return (
      <div  >
  
     {job && <Button icon="heart" onClick={
        (e) => {
            !job ? onClick({
                "candidateId": 1,
                "jobAdvertisementId": jobId
              }):onClick({
                "candidateId": 1,
                "jobAdvertisementId": jobId
              },true)
        }

    } type="submit" color="red"/> }
     {!job && <Button icon="heart" onClick={
        (e) => {
            !job ? onClick({
                "candidateId": 1,
                "jobAdvertisementId": jobId
              }):onClick({
                "candidateId": 1,
                "jobAdvertisementId": jobId
              },true)
        }

    } type="submit"  color="grey"/> }
    </div>
    )
}

export default AddFavourite