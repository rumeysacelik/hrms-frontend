import React, { useEffect, useState } from 'react'
import CandidateSchoolService from '../services/candidateSchoolService';
import {
  Button,
  Form,
  Grid,
  GridColumn,
  Label,
  Modal,
  Icon,
} from "semantic-ui-react";
import swal from "sweetalert";
import * as Yup from "yup";
import { useFormik } from "formik";

export default function SchoolUpdate({ schools }) {
  const [open, setOpen] = useState(true);

  //  console.log(education)
  //candidateCv?.schools[0].schoolName
    
    const { values, errors, handleChange, handleSubmit, touched } = useFormik({
      initialValues: {
        id: schools?.id,
        candidate: schools?.candidate,
        schoolName: schools?.schoolName,
        department: schools?.department,
        entryDate: schools?.entryDate,
        graduationDate: schools?.graduationDate,
      },
      enableReinitialize:true,
      validationSchema: Yup.object({
        schoolName: Yup.string().required("Okul adı boş bırakılamaz!"),
        department: Yup.string().required("Bölüm boş bırakılamaz!"),
        entryDate:  Yup.number().required("Başlama tarihi bos bırakılamaz!"),
        graduationDate: Yup.number(),
      }),
      onSubmit: (values) => {
        let candidateSchoolService = new CandidateSchoolService();
       // console.log(values);
  
       candidateSchoolService
          .add(values).then(swal(`${values.schools?.schoolName}`,"Update Edildi", "success"))
          window.location.reload();
      },
    });
    return (
      <div>
        <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          trigger={
            <Button
              floated="right"
              positive
              style={{ marginBottom: ".5em", marginRight: ".5em" }}
            >
              <Icon name="pencil"></Icon>Düzenle
            </Button>
          }
        >
          <Modal.Header>Eğitim Güncelle</Modal.Header>
          <Modal.Description>
            <Form
              onSubmit={handleSubmit}
              style={{ marginTop: "1em", marginLeft: "1em", marginBottom: "1em" }}
            >
              <Grid stackable>
                <GridColumn width={14}>
                  <Form.Field>
                    <label>Okul Adı</label>
                    <input
                      name="schoolName"
                      placeholder="Okul Adı"
                      value={values.schools?.schoolName}
                      onChange={handleChange}
                    />
                    {errors.schoolName && touched.schoolName && (
                      <Label basic color="red" pointing>
                        {errors.schoolName}
                      </Label>
                    )}
                  </Form.Field>
                </GridColumn>
                <GridColumn width={14}>
                  <Form.Field>
                    <label>DepartmentName</label>
                    <input
                      name="department"
                      type="text"
                      placeholder="Okul Adı"
                      value={values.schools?.department}
                      onChange={handleChange}
                    />
                    {errors.department && touched.department && (
                      <Label basic color="red" pointing>
                        {errors.department}
                      </Label>
                    )}
                  </Form.Field>
                </GridColumn>
                <GridColumn width={7}>
                  <Form.Field>
                    <label>Başlama Tarihi</label>
                    <input
                      name="entryDate"
                      // type="date"
                      value={values.schools?.entryDate}
                      onChange={handleChange}
                    />
                    {errors.entryDate && touched.entryDate && (
                      <Label basic color="red" pointing>
                        {errors.entryDate}
                      </Label>
                    )}
                  </Form.Field>
                </GridColumn>
                <GridColumn width={7}>
                  <Form.Field>
                    <label>Bitiş Tarihi</label>
                    <input
                      name="graduationYear"
                      
                      // type="date"
                      value={values.schools?.graduationDate}
                      onChange={handleChange}
                    />
                    {errors.graduationDate && touched.graduationDate && (
                      <Label basic color="red" pointing>
                        {errors.graduationDate}
                      </Label>
                    )}
                  </Form.Field>
                </GridColumn>
              </Grid>
              <Modal.Actions>
                <Button color="red" onClick={() => setOpen(false)}>
                  Vazgeç
                </Button>
                <Button
                  type="submit"
                  color="teal"
                  style={{ marginLeft: "22em", marginTop: "1em" }}
                >
                  Güncelle
                </Button>
              </Modal.Actions>
            </Form>
          </Modal.Description>
        </Modal>
      </div>
    );
  }