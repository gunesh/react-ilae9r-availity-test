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
import { Phone, validatePhone } from "@availity/phone";
import { avDate } from "@availity/yup";
import AvLink from "@availity/link";
import PageHeader from "@availity/page-header";
import { Agreement } from "@availity/typography";

import * as yup from "yup";
import {
  Card,
  Button,
  CardTitle,
  CardHeader,
  CardBody,
  CardFooter
} from "reactstrap";

export default function AllElement() {
  return (
    <>
      <div className="eft">
        <Card>
          <CardHeader>Header</CardHeader>
          <CardBody>
            <Form
              initialValues={{
                name: "",
                appcheck: [],
                justTheInput: undefined,
                appradio: "",
                dateOfService: "",
                phone: "",
                ext: ""
              }}
              onSubmit={values => alert(JSON.stringify(values))}
              validationSchema={yup.object().shape({
                name: yup.string().required(),
                appcheck: yup
                  .array()
                  .required("At least one checkbox is required"),
                justTheInput: yup.string().required("This field is required."),
                appradio: yup.string().required("This field is required"),
                dateOfService: avDate().required(),
                phone: yup.string().isRequired(true),
                ext: yup.string()
              })}
            >
              <div className="w-100 d-flex flex-row justify-content-around align-items-center">
                <AvLink href="/public/apps/my-app" target="newBody">
                  My Application
                </AvLink>
              </div>
              <Phone
                name="phone"
                label="Phone"
                country="US"
                showExtension={true}
                phoneColProps={{ xs: { size: 3 } }}
                extProps={{
                  name: "ext",
                  label: "Ext.",
                  extColProps: {
                    xs: { size: 3 }
                  }
                }}
              />
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
                size={12}
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
          </CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </div>
    </>
  );
}
