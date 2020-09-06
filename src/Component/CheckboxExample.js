import React from "react";
import { Form, CheckboxGroup,Checkbox } from "@availity/form";
import * as yup from "yup";
import { Button } from "reactstrap";

export default function CheckboxExample() {
  return (
    <Form
      initialValues={{
        hello: []
      }}
      onSubmit={() => {}}
      validationSchema={yup.object().shape({
        hello: yup.array().required("At least one checkbox is required")
      })}
    >
      <CheckboxGroup name="hello" label="Checkbox Group">
        <Checkbox label="Check One" value="uno" />
        <Checkbox label="Check Two" value="dos" />
        <Checkbox label="Check Three" value="tres" />
      </CheckboxGroup>
      <Button type="submit" color="primary">
        Submit
      </Button>
    </Form>
  );
}
