import React from "react";
import { Form, Field } from "@availity/form";
import { SelectField } from "@availity/select";
import * as yup from "yup";
import { Button } from "reactstrap";

export default function SelectFieldExample() {
  return (
    <>
      <Form
        initialValues={{
          justTheInput: undefined
        }}
        onSubmit={values => window.alert(JSON.stringify(values))}
        validationSchema={yup.object().shape({
          justTheInput: yup.string().required("This field is required.")
        })}
      >
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

        <Button className="mt-3" color="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
