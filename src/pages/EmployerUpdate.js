import React from "react";
import { Formik } from "formik";
import {
  Container,
  Segment,
  Card,
  Icon,
  Label,
  Table,
  Button,
  Divider,
  Modal,
  Menu,
} from "semantic-ui-react";
import EmployerUpdateService from "../services/employerUpdateService";
import EmployerService from "../services/employerService";

function EmployerUpdate() {
  const id = 2;
  const [employerData, setEmployerData] = React.useState({});
  const [updateStatus, setUpdateStatus] = React.useState(false);
  let employerService = new EmployerService();

  let employerUpdateService = new EmployerUpdateService();
  React.useEffect(() => {
    employerService.findById(id).then((data) => {
      setEmployerData(data.data.data);
      //console.log(employerData);
    });
    employerUpdateService.findById(id).then((res) => {
      if (res.data.data != null) {
        setUpdateStatus(true);
      } else {
        setUpdateStatus(false);
      }
    });
  }, [employerData]);

  return (
    <div>
      {/* <Button
                type="submit"
                animated
                basic
                color="orange"
                size="massive"
                style={{ marginBottom: "1em" }}
              >
                <Button.Content visible>Güncelle</Button.Content>
                <Button.Content hidden>
                  <Icon name="edit" />
                </Button.Content>
              </Button> */}

      <Card style={{ margin: "auto" }}>
        <Modal.Header>Şirket Bilgi Güncelleme
        <Icon name="edit" />
        </Modal.Header>
        
      </Card>
      <Menu
        header={"İşveren Bilgilerim"}
        subtext={"Şirket bilgilerini buradan düzenleyebilirsin"}
      >
        <div className="">
          {!updateStatus && (
            <Formik
              initialValues={{
                company_name: employerData.companyName || "",
                webAddress: employerData.webAdress || "",
                phoneNumber: employerData.phoneNumber || "",
                schoolName: "",
              }}
              enableReinitialize={true}
              onSubmit={(
                values,
                { setSubmitting, setErrors, setStatus, resetForm }
              ) => {
                setSubmitting(false);
                employerUpdateService.update(id, values).then((res) => {
                  console.log(res);
                });
              }}
            >
              {({
                values,
                touched,
                errors,
                dirty,
                isSubmitting,
                handleSubmit,
                handleReset,
                handleBlur,
                handleChange,
              }) => (
                <form onSubmit={handleSubmit} className="d-flex w-100">
                  <div className="d-flex flex-column w-100">
                    <div className="d-flex " style={{ margin: 10 }}>
                      <div
                        className="d-flex flex-column w-100"
                        style={{ marginRight: 10 }}
                      >
                        <span>Şirket Adı:</span>
                        <input
                          name="company_name"
                          style={{ marginLeft: "500px" }}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.company_name}
                          type="text"
                          className="roundedinput"
                        />
                      </div>
                      {/* <div className="d-flex flex-column w-100">
                      <span>Sektör</span>
                     <input
                     name="industry"
                     
                     onChange={handleChange}
                     onBlur={handleBlur}
                     value={values.industry}
                        type="text"
                        className="roundedinput"
                      />
                      </div> */}
                    </div>
                    <div className="d-flex " style={{ margin: 10 }}>
                      {/* <div className="d-flex flex-column w-100" style={{marginRight:10}}>
                  <span>Kuruluş Tarihi</span>
                  <input
                       onChange={handleChange}
                       onBlur={handleBlur}
                       value={values.foundYear}
                       name="foundYear"
                        class="form-control"
                        type="date"
                      />
                      </div> */}
                      <div className="d-flex flex-column w-100">
                        <span>Web Address</span>
                        <input
                          name="webAddress:"
                          style={{ marginLeft: "500px" }}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.webAddress}
                          type="text"
                          className="roundedinput"
                        />
                      </div>
                    </div>
                    <div className="d-flex " style={{ margin: 10 }}>
                      <div className="d-flex flex-column w-100">
                        <span>Telefon Numarası: </span>
                        <input
                          name="phoneNumber"
                          style={{ marginLeft: "460px" }}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.phoneNumber}
                          type="text"
                          className="roundedinput"
                        />
                      </div>
                    </div>
                    <div className="d-flex w-100 align-items-center justify-content-center mtop-10">
                      <button
                        type="submit"
                        animated
                        basic
                        color="orange !important"
                        size="massive"
                        disabled={!dirty || isSubmitting}
                        className="btn-talent"
                        style={{ width: "100%", marginRight: 10 }}
                      >
                        <Button.Content visible>Güncelle</Button.Content>
                        <Button.Content hidden>
                          <Icon name="edit" />
                        </Button.Content>
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </Formik>
          )}
          {updateStatus && (
            <div className="d-flex justify-content-center align-items-center">
              <h5>Güncelleme onayı bekliyor</h5>
            </div>
          )}
        </div>
      </Menu>

      <Menu
        header={"Hesap Bilgileri"}
        subtext={"Email ve Şifre bilgilerini değiştirebilirsin"}
      ></Menu>
    </div>
  );
}

export default EmployerUpdate;
