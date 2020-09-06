import React from "react";
import {
  Form,
  Field,
  CheckboxGroup,
  Checkbox,
  RadioGroup,
  Radio
} from "@availity/form";
import { SelectField } from "@availity/select";
import DateField from "@availity/date";
import { avDate } from "@availity/yup";
import * as yup from "yup";
import { Button } from "reactstrap";

export default function AllElement() {
  return (
    <Form
      initialValues={{
        name: "",
        appcheck: [],
        justTheInput: undefined,
        appradio: "",
        dateOfService: ""
      }}
      onSubmit={values => alert(JSON.stringify(values))}
      validationSchema={yup.object().shape({
        name: yup.string().required(),
        appcheck: yup.array().required("At least one checkbox is required"),
        justTheInput: yup.string().required("This field is required."),
        appradio: yup.string().required("This field is required"),
        dateOfService: avDate().required()
      })}
    >
      <DateField
        label="Date of Service"
        id="dateOfService"
        name="dateOfService"
        min={{ value: 7, units: "day" }}
        max={{ value: 7, units: "day" }}
      />

      <Field
        name="name"
        labelClass="required"
        inputClass="required"
        type="text"
        label="Name"
      />
      <CheckboxGroup name="appcheck" label="Checkbox Group">
        <Checkbox label="Check One" value="uno" />
        <Checkbox label="Check Two" value="dos" />
        <Checkbox label="Check Three" value="tres" />
      </CheckboxGroup>
      <SelectField
        label="Just The Input"
        name="justTheInput"
        isMulti={false}
        options={[
          { label: "Option 1", value: 1 },
          { label: "Option 2", value: 2 },
          { label: "Option 3", value: 3 }
        ]}
      />
      <RadioGroup name="appradio" label="Radio Group">
        <Radio label="Radio One" value="uno" />
        <Radio label="Radio Two" value="dos" />
        <Radio label="Radio Three" value="tres" />
      </RadioGroup>

      <Button type="submit" color="primary">
        Submit
      </Button>
    </Form>
  );
}
