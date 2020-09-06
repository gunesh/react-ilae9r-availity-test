import React from "react";
import { Form, Field } from "@availity/form";
import * as yup from "yup";
import { Button } from "reactstrap";

export default function FieldExample() {
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
      <Button type="submit" color="primary">
        Submit
      </Button>
    </Form>
  );
}
