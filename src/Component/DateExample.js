import React from "react";
import { Form, Field } from "@availity/form";
import DateField from '@availity/date';
import { avDate } from '@availity/yup';
import * as yup from "yup";
import { Button } from "reactstrap";

export default function DateExample() {
  return (
    <Form
      initialValues={{
        dateOfService: ""
      }}
      onSubmit={values => alert(JSON.stringify(values))}
      validationSchema={yup.object().shape({
        dateOfService: avDate().required(),
      })}
    >
      <DateField
      label="Date of Service"
      id="dateOfService"
      name="dateOfService"
      min={{ value: 7, units: 'day' }}
      max={{ value: 7, units: 'day' }}
    />
      <Button color="primary" type="submit">
      Submit
    </Button>
    </Form>
  );
}
