// import React, { useEffect, useState } from 'react'
// import CandidateLanguageService from '../services/candidateLanguageService';
// import { Card, Table, Button, Icon, Form, Grid, Dropdown } from "semantic-ui-react";
// import * as Yup from "yup";
// import { useFormik } from "formik";

// export default function LanguageUpdate() {
//     const [languages, setLanguages] = useState([]);

//     let candidateLanguageService = new CandidateLanguageService();
  
//     useEffect(() => {
//       let candidateLanguageService = new CandidateLanguageService();
//       candidateLanguageService.findByCandidateId(1).then((result) => {
//         setLanguages(result.data.data);
//       });
//     },[]);
//     let languageAddSchema = Yup.object().shape({
//       languagesName: Yup.string()
//         .required("Bu alan zorunludur")
//         .min(2, "En az 2 karakter uzunlugunda olmalıdır"),
//       level: Yup.number()
//         .min(1, "1 Den az olamaz")
//         .max(5, "5 ten fazla olamaz")
//         .required("Bu alan zorunludur"),
//     });
  
//     const formik = useFormik({
//       initialValues: {
//         languagesName: "",
//         level: "",
//       },
//       validationSchema: languageAddSchema,
//       onSubmit: (values) => {
//           values=1;
//         candidateLanguageService
//           .add(values)
//           .then((result) => {
//             alert(result.data.message);
//           })
//           .catch((result) => {
//             alert(result.response.data.message);
//           });
//       },
//     });
  
//     const levels=[1,2,3,4,5]
//     const levelOption = levels.map((level) => ({
//         key: level,
//         text: level,
//         value: level
//     }))
  
//     const handleChangeSemantic = (value, fieldName) => {
//       formik.setFieldValue(fieldName, value);
//     }
  
//     const handleDeleteLanguage = (languageId) => {
//         candidateLanguageService.deleteLanguage(languageId).then((result) => {
//             alert(result.data.message)
//         }).catch((result) => {
//             alert(result.response.data.message)
//         })
//     }
  
//     return (
//       <div>
//         <Card fluid color={"black"}>
//           <Card.Content header="Bilinen Diller" />
//           <Table celled color={"black"}>
//             <Table.Header>
//               <Table.Row>
//                 <Table.HeaderCell>Dil</Table.HeaderCell>
//                 <Table.HeaderCell>Seviye</Table.HeaderCell>
//                 <Table.HeaderCell>Sil</Table.HeaderCell>
//               </Table.Row>
//             </Table.Header>
  
//             <Table.Body>
//               {languages?.map((language) => (
//                 <Table.Row key={language.id}>
//                   <Table.Cell>{language.languagesName}</Table.Cell>
//                   <Table.Cell>{language.level}</Table.Cell>
//                   <Table.Cell>
//                     <Button color="red" onClick={() => handleDeleteLanguage(language.id)}>
//                       <Icon name="x" />
//                     </Button>
//                   </Table.Cell>
//                 </Table.Row>
//               ))}
//             </Table.Body>
//           </Table>
//         </Card>
//         {/* candidateCv?.languages[0].language.languagesName */}
  
//         <Card fluid color={"black"}>
//           <Card.Content header="Dil Ekle" />
//           <Card.Content>
//             <Form onSubmit={formik.handleSubmit}>
//               <Grid stackable>
//                 <Grid.Column width={8}>
//                   <label>
//                     <b>Dil Adı</b>
//                   </label>
//                   <Form.Input
//                     fluid
//                     placeholder="Dil Adı"
//                     type="text"
//                     name="languagesName"
//                     value={formik.values.languagesName}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                   />
//                   {formik.errors.languagesName && formik.touched.languagesName && (
//                   <div className={"ui pointing red basic label"}>
//                   {formik.errors.languagesName}
//                 </div>
//                 )}
//                 </Grid.Column>
//                 <Grid.Column width={8}>
//                   <label>
//                     <b>Seviye</b>
//                   </label>
//                   <Dropdown
//                       clearable
//                       item
//                       placeholder="Seviye"
//                       search
//                       selection
//                       fluid
//                       options={levelOption}
//                       onChange={(event, data) => {
//                           handleChangeSemantic(data.value, "level")
//                       }}
//                       value={formik.values.level}
//                       onBlur={formik.handleBlur}
//                       name="level"
//                   />
//                   {formik.errors.level && formik.touched.level && (
//                   <div className={"ui pointing red basic label"}>
//                   {formik.errors.level}
//                 </div>
//                 )}
//                 </Grid.Column>
//               </Grid>
//               <div style={{ marginTop: "1em" }}>
//                 <Button fluid color="green" type="submit">
//                   Ekle
//                 </Button>
//               </div>
//             </Form>
//           </Card.Content>
//         </Card>
//       </div>
//     );
//   }