import React, { useEffect, useState } from 'react'
import CandidateTalentService from '../services/candidateTalentService';
import { Card, Table, Button, Icon, Form, Grid } from "semantic-ui-react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useHistory } from 'react-router-dom';
import swal from "sweetalert";


export default function TalentUpdate() {
    const [talents, setTalents] = useState([]);

  let candidateTalentService = new CandidateTalentService();
  useEffect(() => {
    let candidateTalentService = new CandidateTalentService();
    candidateTalentService.findByCandidateId(1).then((result) => {
        setTalents(result.data.data);
    });
  },[1]);

  let technologyAddSchema = Yup.object().shape({
    name: Yup.string()
      .required("Bu alan zorunludur")
      .min(2, "Minimum 2 karakter uzunlugunda olmalıdır"),
  });
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      talent: "",
    },
    validationSchema: technologyAddSchema,
    onSubmit: (values) => {
      let candidateTalentService = new CandidateTalentService();
      candidateTalentService.update(values).then((result) => console.log(result.data.data));
      swal("Başarılı!", "Yetenek bilgisi güncellendi!", "success");
      history.push("/cvs/1");
    },
  });

  const handleDeleteTechnology = (talentId) => {
    candidateTalentService.deleteTalent(talentId).then((result) => {
          alert(result.data.message)
      }).catch((result) => {
          alert(result.response.message)
      })
  }

  return (
    <div>
      <Grid stackable>
        <Grid.Column width={8}>
          <Card fluid color={"black"}>
            <Card.Content header={"Teknoloji Ekle"} />
            <Card.Content>
              <Form onSubmit={formik.handleSubmit}>
                <label>
                  <b>Teknoloji Adı</b>
                </label>
                <Form.Input
                  fluid
                  placeholder="Teknoloji Adı"
                  type="text"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.name && formik.touched.name && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.name}
                  </div>
                )}
                <Button fluid color="green" type="submit">Ekle</Button>
              </Form>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column width={8}>
          <Table celled color={"black"}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Teknoloji</Table.HeaderCell>
                <Table.HeaderCell>Sil</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {talents.map((talent) => (
                <Table.Row key={talent.id}>
                  <Table.Cell>{talent.talentName}</Table.Cell>
                  {/* {candidateCv?.talents[0].talent.talentName} */}
                  <Table.Cell>
                    <Button color="red" onClick={() => handleDeleteTechnology(talent.id)}>
                      <Icon name="x" />
                    </Button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid>
    </div>
  );
}