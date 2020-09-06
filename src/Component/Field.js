import React from "react";
import { Form, Field } from "@availity/form";
import * as yup from "yup";


export default function Field() {
  return (
    <Form
      initialValues={{
        hello: ""
      }}
      onSubmit={values => alert(JSON.stringify(values))}
      validationSchema={yup.object().shape({
        hello: yup.string().required()
      })}
    >
      <Field name="hello" type="text" label="Hello" />
    </Form>
  );
}
