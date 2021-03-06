import React from 'react'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button } from "semantic-ui-react";
import CandidateCvService from '../../services/candidateCvService';
import HrmsTextInput from "../../utilities/customFormControls/HrmsTextInput"

export default function UpdateCvList() {
    const initialValues = {
        id: 1,
        avatarUrl: "",
        coverLetter: "",
        githubAddress: "",
        linkedinAddress: "",
      };
    
      const schema = Yup.object({
        avatarUrl: Yup.string().url(),
        coverLetter: Yup.string().required(),
        githubAddress: Yup.string().url(),
        linkedinAddress: Yup.string().url(),
      });
    
      return (
        <div>
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
              let candidateCvService = new CandidateCvService();
              values.id=1
              candidateCvService
                .update(values)
                .then((result) => console.log(result.data.data));
            }}
          >
            <Form className="ui form">
              <HrmsTextInput name="avatarUrl" placeholder="Resim Url" />
              <HrmsTextInput name="coverLetter" placeholder="coverLetter" />
              <HrmsTextInput name="githubAddress" placeholder="githubAddress" />
              <HrmsTextInput name="linkedinAddress" placeholder="linkedinAddress" />
              <Button color="green" type="submit">
                Update
              </Button>
            </Form>
          </Formik>
        </div>
      );
    }