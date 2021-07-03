import React, { useEffect, useState } from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Dropdown, Input, TextArea, Card, Form, Grid } from "semantic-ui-react";
import CityService from "../services/cityService";
import JobAdvertisementService from '../services/jobAdvertisementService';
import WorkHourService from '../services/workHourService';
import WorkTypeService from '../services/workTypeService';
import JobTitleService from '../services/jobTitleService';
import { useHistory } from 'react-router-dom';


export default function PostJobAdvertisement() {
    let jobAdvertisementService = new JobAdvertisementService();
    

  const JobAdvertAddSchema = Yup.object().shape({
      
    appealExpirationDate: Yup.date().nullable().required("Bu alanın doldurulması zorunludur"),
    description: Yup.string().required("Bu alanın doldurulması zorunludur"),
    jobtitleId: Yup.string().required("Bu alanın doldurulması zorunludur"),
    workHourId: Yup.string().required("Bu alanın doldurulması zorunludur"),
    workTypeId: Yup.string().required("Bu alanın doldurulması zorunludur"),
    quota: Yup.string().required("Pozisyon sayısı zorunludur").min(1,"Pozisyon sayısı 1 den küçük olamaz"),
    cityId: Yup.string().required("Bu alanın doldurulması zorunludur"),
    minSalary: Yup.number().min(0,"0 Dan az olamaz").required("Bu alan zorunludur"),
    maxSalary: Yup.number().min(0,"0 Dan az olamaz").required("Bu alan zorunludur")
    
  });

  const history = useHistory();

  
  const formik = useFormik({
    initialValues: {
      description: "",
      jobtitleId: "",
      workHourId: "",
      workTypeId: "",
      quota: "",
      cityId: "",
      minSalary: "",
      maxSalary: "",
      appealExpirationDate: "",
      
    },
    
    validationSchema: JobAdvertAddSchema,
    
    onSubmit: (values) => {
      
      values.employerId= 2;
      console.log(values)
      jobAdvertisementService.add(values).then((result) => console.log(result.data));
      alert("İş ilanı eklendi onayın ardından listelenecektir");
      history.push("/jobadvertisement");
    },
  });
 
  const [workHours, setWorkHours] = useState([]);
  const [workTypes, setWorkTypes] = useState([]);
  const [cities, setCities] = useState([]);
  const [jobTitles, setJobTitles] = useState([]);

  useEffect(() => {
    let workHourService = new WorkHourService();
    let workTypeService = new WorkTypeService();
    let cityService = new CityService();
    let jobTitleService = new JobTitleService();

    workHourService.getAll().then((result) => setWorkHours(result.data.data));
    workTypeService.getAll().then((result) => setWorkTypes(result.data.data));
    cityService.getAll().then((result) => setCities(result.data.data));
    jobTitleService.getAll().then((result) => setJobTitles(result.data.data));
  }, []);

  const workTimeOption = workHours.map((workHour, index) => ({
    key: index,
    text: workHour.workHours,
    value: workHour.id, 
  }));
  const workPlaceOption = workTypes.map((workType, index) => ({
    key: index,
    text: workType.workType,
    value: workType.id,
  }));
  const cityOption = cities.map((city, index) => ({
    key: index,
    text: city.cityName,
    value: city.id,
  }));
  const jobPositionOption = jobTitles.map((jobTitle, index) => ({
    key: index,
    text: jobTitle.title,
    value: jobTitle.id,
  }));

  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  }

  return (
    <div>
      <Card fluid>
      <Card.Content header='İş ilanı Ekle' />
      <Card.Content>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Field style={{marginBottom: "1rem"}}>
        <Dropdown
          clearable
          item
          placeholder="İş pozisyonu"
          search
          selection
          onChange={(event, data) =>
            handleChangeSemantic(data.value, "jobtitleId")
          }
          onBlur={formik.onBlur}
          id="jobtitleId"
          value={formik.values.jobtitleId}
          options={jobPositionOption}
          />
          {formik.errors.jobtitleId && formik.touched.jobtitleId &&(
            <div className={"ui pointing red basic label"}>
              {formik.errors.jobtitleId}
            </div>
          )}
          </Form.Field>
          <Form.Field>
            <Dropdown
              clearable
              item
              placeholder="Şehir"
              search
              selection
              onChange={(event, data) =>
                handleChangeSemantic(data.value, "cityId")
              }
              onBlur={formik.onBlur}
              id="cityId"
              value={formik.values.cityId}
              options={cityOption}
              />
              {formik.errors.cityId && formik.touched.cityId && (
                <div className={"ui pointing red basic label"}>
                {formik.errors.cityId}
              </div>
              )}
          </Form.Field>
          <Form.Field>
          <Dropdown
                  clearable
                  item
                  placeholder="Çalışma yeri"
                  search
                  selection
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "workTypeId")
                  }
                  onBlur={formik.onBlur}
                  id="workTypeId"
                  value={formik.values.workTypeId}
                  options={workPlaceOption}
                />
                {formik.errors.workTypeId && formik.touched.workTypeId && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.workTypeId}
                  </div>
                )}
          </Form.Field>
          <Form.Field>
                <Dropdown
                  clearable
                  item
                  placeholder="Çalışma Süresi"
                  search
                  selection
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "workHourId")
                  }
                  onBlur={formik.onBlur}
                  id="workHourId"
                  value={formik.values.workHourId}
                  options={workTimeOption}
                />
                {formik.errors.workHourId && formik.touched.workHourId && (
                  <div className={"ui pointing red basic label"}>{formik.errors.workHourId}</div>
                )}
              </Form.Field>
              <Form.Field>
              <Grid stackable>
              <Grid.Column width={8}>
                <Input
                  style={{ width: "100%" }}
                  type="number"
                  placeholder="Minimum Maaş Aralığı"
                  value={formik.values.minSalary}
                  name="minSalary"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                </Input>
                {formik.errors.minSalary && formik.touched.minSalary && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.minSalary}
                  </div>
                )}
                </Grid.Column>
                <Grid.Column width={8}>
                <Input
                  style={{ width: "100%" }}
                  type="number"
                  placeholder="Maksimum Maaş Aralığı"
                  value={formik.values.maxSalary}
                  name="maxSalary"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                </Input>
                {formik.errors.maxSalary && formik.touched.maxSalary && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.maxSalary}
                  </div>
                )}
                </Grid.Column>
                </Grid>
              </Form.Field>

              <Form.Field>
              <Grid stackable>
              <Grid.Column width={8}>
                <Input
                  style={{ width: "100%" }}
                  id="quota"
                  name="quota"
                  error={Boolean(formik.errors.quota)}
                  onChange={formik.handleChange}
                  value={formik.values.quota}
                  onBlur={formik.handleBlur}
                  type="number"
                  placeholder="Açık Pozisyon sayısı"
                />
                {formik.errors.quota && formik.touched.quota && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.quota}
                  </div>
                )}
                </Grid.Column>
                <Grid.Column width={8}>
                <Input
                  style={{ width: "100%" }}
                   type="datetime-local"
                  error={Boolean(formik.errors.appealExpirationDate)}
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "appealExpirationDate")
                  }
                  value={formik.values.appealExpirationDate}
                  onBlur={formik.handleBlur}
                  name="appealExpirationDate"
                  placeholder="Son başvuru tarihi"
                />
                {formik.errors.appealExpirationDate && formik.touched.appealExpirationDate && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.appealExpirationDate}
                  </div>
                )}
                </Grid.Column>
                </Grid>
              </Form.Field>

              <Form.Field>
                <TextArea
                  placeholder="Açıklama"
                  style={{ minHeight: 100 }}
                  error={Boolean(formik.errors.description).toString()}
                  value={formik.values.description}
                  name="description"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.description && formik.touched.description && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.description}
                  </div>
                )}
              </Form.Field>
              <Button
                content="Ekle"
                labelPosition="right"
                icon="add"
                positive
                type="submit"
                style={{ marginLeft: "20px" }}
              />
      </Form>
      </Card.Content>
      </Card>
    </div>
    )
}
